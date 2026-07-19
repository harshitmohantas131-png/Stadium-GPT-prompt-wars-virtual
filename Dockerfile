# Base image using Node 20 Alpine
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Pass VITE_GEMINI_API_KEY as a build argument
ARG VITE_GEMINI_API_KEY
ENV VITE_GEMINI_API_KEY=$VITE_GEMINI_API_KEY

# Build the Vite project for production
RUN npm run build

# Install serve to run the application
RUN npm install -g serve

# Expose the Cloud Run port
EXPOSE 8080

# Start the application using serve
CMD ["serve", "-s", "dist", "-l", "8080"]
