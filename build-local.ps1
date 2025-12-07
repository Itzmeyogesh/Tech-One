# Quick Deploy Script for 1GB RAM Linux Server
# This script builds locally on Windows and prepares for server deployment

Write-Host "🚀 Building Tech-One for 1GB Linux Server..." -ForegroundColor Cyan

# Build locally
Write-Host "`n📦 Installing dependencies..." -ForegroundColor Yellow
npm install

Write-Host "`n🔨 Building production bundle..." -ForegroundColor Yellow
$env:NODE_OPTIONS="--max-old-space-size=2048"
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Build completed successfully!" -ForegroundColor Green
    Write-Host "`n📁 To deploy to your Linux server:" -ForegroundColor Cyan
    Write-Host "   1. Upload the 'dist' folder to your server" -ForegroundColor White
    Write-Host "   2. On server, run: npx serve -s dist -l 4173" -ForegroundColor White
    Write-Host "   Or use: pm2 serve dist 4173 --spa --name tech-one" -ForegroundColor White
} else {
    Write-Host "`n❌ Build failed!" -ForegroundColor Red
}
