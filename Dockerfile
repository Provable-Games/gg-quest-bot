FROM oven/bun:1

WORKDIR /app

# Install Python and build essentials
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    build-essential \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./

# Install dependencies with specific configuration
RUN bun install

# Copy source code
COPY . .

# Build TypeScript
RUN bun run build

# Expose port (if needed)
EXPOSE 3000

# Start the application
CMD ["bun", "run", "src/index.ts", "worker", "monitorQuests"]