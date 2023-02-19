from flask import Flask, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["mydatabase"]

# Define a route to retrieve data from the database
@app.route("/data")
def get_data():
    collection = db["mycollection"]
    data = collection.find()
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
