#!/bin/bash
# Build script for Vercel
echo "Starting custom build script..."
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

# Make vite executable
chmod +x ./node_modules/.bin/vite

# Run the build
npx vite build

echo "Build completed!"