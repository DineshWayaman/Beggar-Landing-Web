FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port 3001
EXPOSE 3001

# Set the environment variable for the port
ENV PORT=3001

# Start the application
CMD ["npm", "start"]
