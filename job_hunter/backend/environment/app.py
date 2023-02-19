from flask import Flask, render_template
from flask_restful import Api, Resource, reqparse
import requests
from utils import *
from http import HTTPStatus
import pickle
# Defining App !
app = Flask(__name__)
api = Api(app)
model: Pipeline = load_model("model_svm.pkl")
# Only one Endpoint to API supported: {GET}
# class Model(Resource):
#     # Endpoint to Get a Campaign already created in my datastore.
#     def get(self, job_title):
#         model = load_model("model_svm.pkl")
#         pred_industry = model.predict([job_title])
#         return pred_industry[0],HTTPStatus.OK


@app.route("/predict/<string:job_title>", methods=['GET', 'POST'])
def predict(job_title):
    return model.predict([job_title])[0], HTTPStatus.OK


# Adding routes to the Application and Endpoints to App.
# api.add_resource(Model, "/predict/<string:job_title>")
# Run this baby server !
app.run(debug=True)
