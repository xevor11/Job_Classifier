# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files into the container at /app
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm ci --only=production

# Copy the rest of the application code into the container at /app
COPY . .

# Build the React app
RUN npm run build

# Expose the port that the server will be listening on
EXPOSE 5000

# Start the server when the container launches
CMD ["npm", "start"]
