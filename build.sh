#!/bin/bash
# Build script for low-memory Linux server (1GB RAM)
# WARNING: Building on 1GB RAM server will likely FAIL
# Recommendation: Build locally and upload only the 'dist' folder

echo "⚠️  WARNING: Building with npm install on 1GB RAM will likely fail!"
echo "📌 RECOMMENDED: Build on your local machine and upload the 'dist' folder"
echo ""
read -p "Do you want to continue anyway? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Build cancelled."
    echo ""
    echo "To deploy without building:"
    echo "  1. Build locally: npm install && npm run build"
    echo "  2. Upload 'dist' folder to server"
    echo "  3. On server: npx serve -s dist -l 4173"
    exit 1
fi

echo "🚀 Starting build process..."

# Set memory limit
export NODE_OPTIONS="--max-old-space-size=768"

# Check if swap exists
if ! swapon --show | grep -q '/swapfile'; then
    echo "⚠️  No swap detected! Adding swap will help prevent OOM errors."
    echo "Run these commands first:"
    echo "  sudo fallocate -l 2G /swapfile"
    echo "  sudo chmod 600 /swapfile"
    echo "  sudo mkswap /swapfile"
    echo "  sudo swapon /swapfile"
    echo ""
fi

echo "📦 Installing dependencies (this may take a while)..."
npm install --no-audit --prefer-offline

if [ $? -ne 0 ]; then
    echo "❌ npm install failed (out of memory)"
    echo ""
    echo "Solutions:"
    echo "  1. Add swap space (see commands above)"
    echo "  2. Build locally and upload 'dist' folder"
    exit 1
fi

echo "🔨 Building production bundle..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Build output is in the 'dist' directory"
    echo ""
    echo "To serve: ./start-server.sh"
else
    echo "❌ Build failed"
    exit 1
fi
