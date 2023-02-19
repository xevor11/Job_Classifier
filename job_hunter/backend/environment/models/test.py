from utils import *
csv_path = "naukri.csv"
x_col = "Job Title"
y_col = "Role"

# Train the SVM model
svm_model = train_model(csv_path, x_col, y_col, "SVM")

# Train the Multinomial Naive Bayes model
nb_model = train_model(csv_path, x_col, y_col, "MultiNB")

