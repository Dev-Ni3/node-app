FROM node:18-alpine AS builder

# Set working directory inside container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .


# Expose port (default NestJS port is 3000)
EXPOSE 3000

# Start the app
CMD ["node", "dist/main"]