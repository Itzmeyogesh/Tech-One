#!/bin/bash
# Server startup script for production
# This uses Vite preview server (requires node_modules)

if [ ! -d "node_modules" ]; then
    echo "❌ node_modules not found!"
    echo ""
    echo "For 1GB RAM server, use serve-dist.sh instead:"
    echo "  ./serve-dist.sh"
    echo ""
    echo "It only needs the 'dist' folder (no node_modules required)"
    exit 1
fi

export NODE_OPTIONS="--max-old-space-size=512"
export NODE_ENV=production

echo "🌐 Starting Tech-One with Vite preview server..."
echo "📊 Memory limit: 512MB"
npm run serve
