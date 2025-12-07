#!/bin/bash
# Build script for low-memory Linux server (1GB RAM)

echo "🚀 Starting build process for Tech-One..."

# Set memory limit for Node.js to prevent OOM errors
export NODE_OPTIONS="--max-old-space-size=768"

echo "📦 Installing dependencies..."
npm ci --prefer-offline --no-audit

echo "🔨 Building production bundle..."
npm run build

echo "✅ Build completed successfully!"
echo "📁 Build output is in the 'dist' directory"
echo ""
echo "To serve the application, run:"
echo "  npm run serve"
