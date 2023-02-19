import keras.utils
import numpy as np
import tensorflow as tf
import pandas as pd

# def train_model(csv_path,x_col,y_col,mode):
#     dataframe = pd.read_csv(csv_path)
#     classes = np.array(dataframe[y_col].unique())
#     cleanframe = dataframe.drop_duplicates(subset=x_col)
#     print(cleanframe.groupby(y_col).count())
#     cleanframe[x_col] = cleanframe[x_col].map(clean_text)
#     X = cleanframe[x_col]
#     y = cleanframe[y_col]
# csv_path = "job_skills.csv"
# df = pd.read_csv(csv_path)
# title = df['Title']
# category = df['Category']
# print(df.head())
# classes = category.unique().tolist()
#
# print(type(classes))
# print(classes)
# print(len(classes)," classes")
# df_pruned = df[ ['Category','Title'] ]
# df_pruned['Category'] = df_pruned['Category'].map(lambda s:classes.index(s))
# df_pruned.to_csv("job_skills_pruned.csv")
csv_path = "job_skills_pruned.csv"
# csv_file = keras.utils.get_file(csv_path)
# print(csv_file)
df = pd.read_csv(csv_path)
# print(df)
ds = tf.data.Dataset.from_tensor_slices(dict(df))
for element in ds:
    print(element)
    idx,cat,title = element
    print()
