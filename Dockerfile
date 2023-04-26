# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to /app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to /app
COPY . .

# Build the application
RUN npm run build

# Set the environment variable for the production build
ENV NODE_ENV=production

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
