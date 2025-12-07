# Tech-One - 1GB Server Setup

## Quick Start for 1GB RAM Server

### ✅ Step 1: Build on Windows (Local Machine)
```powershell
.\build-local.ps1
```

### ✅ Step 2: Upload `dist` folder to server
```bash
scp -r dist/ user@server:/home/user/Tech-One/
```

### ✅ Step 3: Serve on Linux server
```bash
cd Tech-One
chmod +x serve-dist.sh
./serve-dist.sh
```

## Why This Approach?

- ❌ `npm install` fails on 1GB RAM (esbuild requires ~1.5GB)
- ✅ Pre-built `dist` folder only needs 10-20MB RAM
- ✅ No node_modules needed on server
- ✅ Fast, lightweight, production-ready

## Memory Usage Comparison

| Method | RAM Usage | node_modules Required |
|--------|-----------|----------------------|
| `npm run dev` | ~800MB | ✅ Yes |
| `npm run serve` | ~200MB | ✅ Yes |
| `serve dist/` | ~15MB | ❌ No |
| `python -m http.server` | ~5MB | ❌ No |
| `pm2 serve dist` | ~20MB | ❌ No |

## Files You Created

- `build-local.ps1` - Build on Windows
- `serve-dist.sh` - Serve on Linux (ultra lightweight)
- `build.sh` - Build on server (needs 2GB swap)
- `DEPLOYMENT.md` - Full deployment guide

## Production Setup with PM2

```bash
npm install -g pm2
pm2 serve dist 4173 --spa --name tech-one
pm2 save
pm2 startup
```

Benefits:
- Auto-restart on crash
- Process monitoring
- Log management
- Startup on boot

## Troubleshooting

**Port already in use?**
```bash
# Change port in serve command
serve -s dist -l tcp://0.0.0.0:8080
```

**Need HTTPS?**
Use Nginx reverse proxy (see DEPLOYMENT.md)

**Check if app is running:**
```bash
pm2 status
pm2 logs tech-one
```
