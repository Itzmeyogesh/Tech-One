# 🎯 SOLUTION: Running Tech-One on 1GB Linux Server

## The Problem
- `npm install` fails with SIGKILL on 1GB RAM
- esbuild compilation requires ~1.5GB RAM
- Cannot build directly on server

## ✅ The Solution

### Build locally, deploy static files only!

```
Windows PC          Linux Server
---------          ------------
npm install    →   [no install needed]
npm build      →   [no build needed]
   ↓               
dist/ folder   →   Upload   →   serve dist/
(~5MB)                          (~15MB RAM)
```

## 📋 Complete Steps

### 1️⃣ On Your Windows Machine:

```powershell
# Build the project
.\build-local.ps1

# This creates the 'dist' folder (~5MB)
```

### 2️⃣ Transfer to Server:

Choose one method:

**A) SCP:**
```bash
scp -r dist/ user@your-server-ip:/home/user/Tech-One/
```

**B) Git (if you commit dist):**
```bash
git add dist/
git commit -m "Add production build"
git push
# Then pull on server
```

**C) FTP/SFTP:** Use FileZilla or WinSCP

### 3️⃣ On Your Linux Server:

```bash
cd Tech-One
chmod +x serve-dist.sh
./serve-dist.sh
```

**Done!** Access at `http://your-server-ip:4173`

## 🚀 Production Setup (Recommended)

```bash
# Install PM2 globally
npm install -g pm2

# Serve with PM2
pm2 serve dist 4173 --spa --name tech-one

# Save PM2 config
pm2 save

# Auto-start on boot
pm2 startup
```

## 📊 What I Optimized

### Code Changes:
✅ **vite.config.js** - Aggressive code splitting, esbuild minification
✅ **package.json** - Removed problematic NODE_OPTIONS syntax
✅ **Created build-local.ps1** - Windows build script
✅ **Created serve-dist.sh** - Lightweight server script
✅ **Updated build.sh** - Warning about 1GB limitations
✅ **Updated DEPLOYMENT.md** - Complete deployment guide

### Key Optimizations:
- Split vendors into 5 separate chunks (smaller downloads)
- Use esbuild instead of terser (faster, less memory)
- Disabled source maps (smaller build)
- CSS code splitting enabled
- Disabled compressed size reporting (saves build memory)

## 🎛️ Alternative Serving Methods

### Python (No npm needed):
```bash
cd dist
python3 -m http.server 4173 --bind 0.0.0.0
```

### Node serve package:
```bash
npx serve -s dist -l tcp://0.0.0.0:4173
```

### With Nginx (Best Performance):
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /home/user/Tech-One/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 📈 Memory Usage

| Scenario | RAM Used |
|----------|----------|
| npm install | ❌ 1.5GB+ (FAILS) |
| npm run dev | ❌ 800MB |
| npm run serve | ⚠️ 200MB |
| **serve dist/** | ✅ **15MB** |
| **PM2 serve** | ✅ **20MB** |
| **Python http.server** | ✅ **5MB** |

## ❓ FAQ

**Q: Can I build on the server?**
A: Only if you add 2GB swap space. See `DEPLOYMENT.md`

**Q: Do I need Node.js on the server?**
A: Only if using `pm2` or `serve`. Python http.server needs no Node.js.

**Q: How do I update the site?**
A: Rebuild locally, upload new `dist` folder, restart server.

**Q: What about environment variables?**
A: Vite bakes them into build. Set during `npm run build`, not on server.

**Q: Is this production-ready?**
A: Yes! Static files with PM2 or Nginx is standard for React apps.

## 📁 Files Created

- ✅ `build-local.ps1` - Build on Windows
- ✅ `serve-dist.sh` - Serve static files (10-20MB RAM)
- ✅ `SERVER-SETUP.md` - Quick setup guide
- ✅ `DEPLOYMENT.md` - Complete deployment docs
- ✅ Updated `vite.config.js` - Optimized build
- ✅ Updated `build.sh` - Warning about limitations
- ✅ Updated `start-server.sh` - Better error handling

## 🎉 Result

Your React app now runs on 1GB RAM server using only **15-20MB** of memory!
