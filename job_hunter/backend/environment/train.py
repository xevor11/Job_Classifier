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
def train_model(csv_path,x_col,y_col)->Pipeline:
    dataframe = pd.read_csv(csv_path)
    classes = np.array(dataframe[y_col])
    cleanframe = dataframe.drop_duplicates(subset=x_col)
    print(cleanframe.groupby(y_col).count())
    cleanframe[x_col] = cleanframe[x_col].map(clean_text)
    X = cleanframe[x_col]
    y = cleanframe[y_col]
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=24)
    weights = compute_sample_weight("balanced", y_train)
    sgd = Pipeline([('vect', CountVectorizer()),
                    ('tfidf', TfidfTransformer()),
                    ('clf',
                     SGDClassifier(loss='hinge', penalty='l2', alpha=1e-3, random_state=24, max_iter=10, tol=None)), ])

    sgd.fit(X_train, y_train, **{'clf__sample_weight': weights})
    y_pred = sgd.predict(X_test)
    print('accuracy %s' % accuracy_score(y_pred, y_test))
    return sgd


#loading data into a dataframe.
dataframe = pd.read_csv("./Job titles and industries.csv")
dataframe.head()
#Each job title has an industry type.
#The industry type is the classes and the job titles are our instances.
dataframe.info()
print("\nThere are only ",len(dataframe['job title'].unique()),"unique entries in job titles.")
print("\nThere are 4 Classes in the data: ",dataframe['industry'].unique())
classes = np.array(dataframe['industry'].unique())
cleanframe = dataframe.drop_duplicates(subset="job title")
# cleanframe.info()
#show the new classes distribution after removing duplicates.
# plt.figure(figsize=(10,6));
print(cleanframe.groupby('industry').count())
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

cleanframe['job title'] = cleanframe['job title'].map(clean_text)
print(cleanframe.head(10))
X = cleanframe['job title']
y = cleanframe['industry']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state = 24)
weights = compute_sample_weight("balanced",y_train)

sgd = Pipeline([('vect', CountVectorizer()),
                ('tfidf', TfidfTransformer()),
                ('clf', SGDClassifier(loss='hinge', penalty='l2',alpha=1e-3, random_state=24, max_iter=5, tol=None)),])

sgd.fit(X_train, y_train, **{'clf__sample_weight': weights})

y_pred = sgd.predict(X_test)
print('accuracy %s' % accuracy_score(y_pred, y_test))
# clf = sklearn.svm.SVC()
# clf.fit(X_train,y_train)
# y_pred =  clf.predict(X_test)
# print(accuracy_score(y_pred,y_test))

from sklearn import metrics
print(metrics.classification_report(y_test, y_pred, target_names=classes))

import pickle
with open('model_svm.pkl','wb') as f:
    pickle.dump(sgd,f)
with open('model_svm.pkl','rb') as f:
    clf2:Pipeline = pickle.load(f)
    y_pred = clf2.predict(X_test)
    print('accuracy %s' % accuracy_score(y_pred, y_test))

print(X_test[:10])
print(clf2.predict(["Junior software engineer, Amazon Books"]))
