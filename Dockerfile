# Stage 1: Build using Node 24
FROM node:24-slim AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Production execution
FROM node:24-slim
WORKDIR /app

# Install a tiny, high-performance static server
RUN npm install -g serve

# We only need the 'browser' folder for SSG
COPY --from=builder /app/dist/portfolio/browser ./public

# Cloud Run usually injects a PORT environment variable
ENV PORT=3000
EXPOSE 3000

# Run 'serve' in single-page-app mode (-s) to handle routing
CMD ["sh", "-c", "serve -s public -l $PORT"]
