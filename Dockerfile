FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm install

# Copy source and env files
COPY . .
COPY .env.local .env.local

# Build the application
RUN npm run build

# Expose port 3001
EXPOSE 3001

# Set environment variables
ENV PORT=3001
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]
