# Tech-One Deployment Guide for Linux Server

## Server Requirements
- Node.js: 20.19.x
- RAM: 1GB minimum
- OS: Linux

## Deployment Steps

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd Tech-One
```

### 2. Make scripts executable
```bash
chmod +x build.sh start-server.sh
```

### 3. Build the project
```bash
./build.sh
```

This will:
- Install dependencies with memory optimization
- Build the production bundle with limited memory (768MB)
- Output static files to the `dist` directory

### 4. Start the server
```bash
./start-server.sh
```

Or using npm:
```bash
npm run serve
```

The application will be accessible at `http://your-server-ip:4173`

## Memory Optimization

The project is configured to work with 1GB RAM servers:
- Build process limited to 768MB of memory
- Server process limited to 512MB of memory
- Code splitting to reduce bundle sizes
- Console logs removed in production

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
