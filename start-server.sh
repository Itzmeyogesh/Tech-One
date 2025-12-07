#!/bin/bash
# Server startup script for production

export NODE_OPTIONS="--max-old-space-size=512"
export NODE_ENV=production

echo "🌐 Starting Tech-One server on port 4173..."
npm run serve
