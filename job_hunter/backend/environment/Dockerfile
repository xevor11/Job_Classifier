# Use an official Python runtime as a parent image
FROM python:3.9-slim-buster

# Set the working directory to /app
WORKDIR /app

# Copy the requirements file into the container at /app
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container at /app
COPY . .

# Expose the port that the Flask app will be listening on
EXPOSE 5000

# Set the environment variable to tell Flask that we're running in a Docker container
ENV FLASK_ENV=docker

# Start the Flask app when the container launches
CMD ["python", "app.py"]
