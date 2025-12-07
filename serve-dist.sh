#!/bin/bash
# Serve pre-built dist folder (ultra lightweight - only ~10-20MB RAM)

if [ ! -d "dist" ]; then
    echo "❌ 'dist' folder not found!"
    echo ""
    echo "Please build the project first:"
    echo "  Option 1: Build locally (Windows) and upload 'dist' folder"
    echo "  Option 2: Run ./build.sh (requires 2GB+ RAM with swap)"
    exit 1
fi

echo "🌐 Starting Tech-One server..."
echo "📁 Serving from: dist/"
echo "🔗 Port: 4173"
echo "📊 Memory usage: ~10-20MB"
echo ""

# Check if 'serve' is installed globally
if command -v serve &> /dev/null; then
    echo "Using 'serve' package..."
    serve -s dist -l tcp://0.0.0.0:4173
elif command -v python3 &> /dev/null; then
    echo "Using Python HTTP server..."
    cd dist
    python3 -m http.server 4173 --bind 0.0.0.0
elif command -v npx &> /dev/null; then
    echo "Using npx serve (will install temporarily)..."
    npx serve -s dist -l tcp://0.0.0.0:4173
else
    echo "❌ No server found!"
    echo ""
    echo "Install a static server:"
    echo "  npm install -g serve"
    echo "  # OR install PM2:"
    echo "  npm install -g pm2"
    echo "  pm2 serve dist 4173 --spa --name tech-one"
    exit 1
fi
