# Stage 1: Build using Node 24
FROM node:24-slim AS builder
WORKDIR /app

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: Production execution
FROM node:24-slim
WORKDIR /app

# Only copy necessary build artifacts and production modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Environment optimization
ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "dist/analog/server/index.mjs"]
