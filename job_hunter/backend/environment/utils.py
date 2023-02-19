#imports cell

#basic imports
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

#NLP imports
import nltk
import gensim
import sklearn.svm
from gensim.utils import simple_preprocess
from gensim.parsing.preprocessing import STOPWORDS
from nltk.stem import WordNetLemmatizer, SnowballStemmer
from nltk.stem.porter import *
import re

#Classification imports
from sklearn.model_selection import train_test_split
from sklearn.utils.class_weight import compute_sample_weight
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
from sklearn.metrics import accuracy_score, confusion_matrix
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.linear_model import SGDClassifier,LogisticRegression
import pickle

class Model(Pipeline):
    def __init__(self,mode="SVM"):
        '''
        :param mode:can be SVM,Bayes,LogReg
        '''
        if mode == "Bayes":
            self.model = Pipeline([('vect', CountVectorizer()),
                         ('tfidf', TfidfTransformer()),
                         ('clf', MultinomialNB()),])
        elif mode == "SVM":
            self.model = Pipeline([('vect', CountVectorizer()),
                ('tfidf', TfidfTransformer()),
                ('clf', SGDClassifier(loss='hinge', penalty='l2',alpha=1e-3, random_state=42, max_iter=5, tol=None)),])
        elif mode == "LogReg":
            self.model = Pipeline([('vect', CountVectorizer()),
                ('tfidf', TfidfTransformer()),
                ('clf', LogisticRegression(n_jobs=1, C=1)),
               ])
    def fit(self,X,Y,weights):
        self.model.fit(X,Y,**{'clf__sample_weight': weights})
    def save(self,model_path):
        with open(model_path, "wb") as f:
            pickle.dump(self.model, f)
    def load(self,model_path):
        with open(model_path, 'rb') as f:
            self.model = pickle.load(f)
            return self.model

def clean_text(text):
    """
        text: a string
        return: modified clean string
    """
    result = ""
    for token in simple_preprocess(text):
        if token not in STOPWORDS and len(token) >= 2:
            token = token.lower() # lowercase text
            result+=token+" "     # append to result
    return result
def train_model(csv_path,x_col,y_col,mode)->Pipeline:
    dataframe = pd.read_csv(csv_path)
    classes = np.array(dataframe[y_col].unique())
    cleanframe = dataframe.drop_duplicates(subset=x_col)
    print(cleanframe.groupby(y_col).count())
    cleanframe[x_col] = cleanframe[x_col].map(clean_text)
    X = cleanframe[x_col]
    y = cleanframe[y_col]
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=24)
    weights = compute_sample_weight("balanced", y_train)
    model = Model(mode)
    # sgd = Pipeline([('vect', CountVectorizer()),
    #                 ('tfidf', TfidfTransformer()),
    #                 ('clf',
    #                  SGDClassifier(loss='hinge', penalty='l2', alpha=1e-3, random_state=24, max_iter=5, tol=None)), ])

    model.fit(X_train, y_train,weights)
    y_pred = model.model.predict(X_test)
    print('accuracy %s' % accuracy_score(y_pred, y_test))
    from sklearn.metrics import classification_report
    print(classification_report(y_test, y_pred, target_names=classes))
    return model