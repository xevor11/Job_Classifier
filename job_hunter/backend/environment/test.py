from utils import *
csv_path = "naukri.csv"
x_col = "Job Title"
y_col = "Role"
model = train_model(csv_path,x_col,y_col,"LogReg")
