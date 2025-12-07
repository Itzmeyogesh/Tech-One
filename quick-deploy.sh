#!/bin/bash
# Quick deploy script - Run this on your server after uploading dist/

echo "═══════════════════════════════════════════════"
echo "  Tech-One Quick Deploy - 1GB RAM Server"
echo "═══════════════════════════════════════════════"
echo ""

# Check if dist exists
if [ ! -d "dist" ]; then
    echo "❌ ERROR: 'dist' folder not found!"
    echo ""
    echo "Steps:"
    echo "  1. Build on Windows: .\\build-local.ps1"
    echo "  2. Upload dist/ folder to this location"
    echo "  3. Run this script again"
    exit 1
fi

echo "✅ Found dist/ folder"
echo ""

# Check if PM2 is available
if command -v pm2 &> /dev/null; then
    echo "📦 PM2 detected - Using PM2 (recommended)"
    echo ""
    
    # Stop existing instance if running
    pm2 stop tech-one 2>/dev/null
    pm2 delete tech-one 2>/dev/null
    
    # Start with PM2
    pm2 serve dist 4173 --spa --name tech-one
    pm2 save
    
    echo ""
    echo "✅ Deployed successfully with PM2!"
    echo ""
    echo "Useful commands:"
    echo "  pm2 status          - Check status"
    echo "  pm2 logs tech-one   - View logs"
    echo "  pm2 restart tech-one - Restart app"
    echo "  pm2 stop tech-one   - Stop app"
    
elif command -v serve &> /dev/null; then
    echo "📦 Using 'serve' package"
    echo ""
    echo "Starting server..."
    serve -s dist -l tcp://0.0.0.0:4173
    
elif command -v python3 &> /dev/null; then
    echo "📦 Using Python HTTP server"
    echo ""
    cd dist
    python3 -m http.server 4173 --bind 0.0.0.0
    
else
    echo "❌ No server found!"
    echo ""
    echo "Install one:"
    echo "  npm install -g pm2        (recommended)"
    echo "  npm install -g serve"
    exit 1
fi

echo ""
echo "═══════════════════════════════════════════════"
echo "  🌐 Access your app:"
echo "  http://$(hostname -I | awk '{print $1}'):4173"
echo "═══════════════════════════════════════════════"
