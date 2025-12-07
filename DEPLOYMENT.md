# Tech-One Deployment Guide for 1GB RAM Linux Server

## ⚠️ IMPORTANT: 1GB RAM Limitation

**npm install will FAIL on 1GB RAM servers** due to esbuild compilation. 

**✅ RECOMMENDED APPROACH:** Build locally and deploy only the `dist` folder.

## Server Requirements
- Node.js: 20.19.x (only needed if serving with Vite)
- RAM: 1GB minimum
- OS: Linux

---

## 🚀 Method 1: Build Locally (RECOMMENDED)

This is the **BEST** approach for 1GB servers.

### On Your Windows Machine:

```powershell
# Run the build script
.\build-local.ps1

# Or manually:
npm install
npm run build
```

### Transfer to Server:

```bash
# Option 1: Using SCP
scp -r dist/ user@your-server:/path/to/Tech-One/

# Option 2: Using Git (commit dist folder first)
# Or use FTP/SFTP client
```

### On Your Linux Server:

```bash
cd Tech-One
chmod +x serve-dist.sh

# Serve the static files (uses only ~10-20MB RAM!)
./serve-dist.sh
```

**That's it!** No node_modules needed on server. Uses minimal memory.

---

## 🔧 Method 2: Build on Server (Requires 2GB+ Swap)

Only if you MUST build on the server:

### 1. Add Swap Space (REQUIRED)

```bash
# Create 2GB swap
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Make it permanent
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

# Verify
free -h
```

### 2. Clone and Build

```bash
git clone <your-repo-url>
cd Tech-One
chmod +x build.sh serve-dist.sh

# This will likely take 10-15 minutes
./build.sh
```

### 3. Serve

```bash
./serve-dist.sh
```

---

## 📊 Deployment Options

### Option A: Python HTTP Server (No Dependencies)

```bash
cd dist
python3 -m http.server 4173 --bind 0.0.0.0
```
**Memory:** ~5MB

### Option B: Serve Package

```bash
npm install -g serve
serve -s dist -l tcp://0.0.0.0:4173
```
**Memory:** ~15MB

### Option C: PM2 (Best for Production)

```bash
npm install -g pm2
pm2 serve dist 4173 --spa --name tech-one
pm2 save
pm2 startup
```
**Memory:** ~20MB  
**Benefits:** Auto-restart, monitoring, logs

---

## 🎯 Access Your Application

```
http://your-server-ip:4173
```

---

## ⚡ Optimizations Applied

- **Code Splitting:** Vendor chunks separated by library
- **Minification:** esbuild (faster, less memory than terser)
- **No Source Maps:** Reduces build size and memory
- **Static Serving:** Only 10-20MB RAM vs 200MB+ with Vite dev
- **Asset Optimization:** Efficient chunk naming and hashing

## Troubleshooting

### Out of Memory Errors
If you still encounter memory issues:

1. **Add swap space**:
```bash
sudo fallocate -l 1G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

2. **Build on another machine**: Build locally and upload only the `dist` folder

3. **Use PM2 for process management**:
```bash
npm install -g pm2
pm2 start "npm run serve" --name tech-one --max-memory-restart 500M
pm2 save
pm2 startup
```

### Port Issues
If port 4173 is in use, modify `vite.config.js`:
```javascript
preview: {
  host: true,
  port: 8080  // Change to your preferred port
}
```

## Using Nginx as Reverse Proxy (Recommended)

Create `/etc/nginx/sites-available/tech-one`:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:4173;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and restart:
```bash
sudo ln -s /etc/nginx/sites-available/tech-one /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Alternative: Serve Static Files Only

For even lower memory usage, serve the built files with a static server:

```bash
npm install -g serve
serve -s dist -l 4173
```

Or use PM2:
```bash
pm2 serve dist 4173 --name tech-one --spa
```
