FROM node:18-alpine

WORKDIR /app

# Define build arguments
ARG EMAIL_USER
ARG EMAIL_PASS

# Set environment variables
ENV EMAIL_USER=globeviksoftware@gmail.com
ENV EMAIL_PASS=euhibaxhnxpbtgii
ENV PORT=3001
ENV NODE_ENV=production

# Copy package files
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Expose port 3001
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
