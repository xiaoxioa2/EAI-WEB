# GitHub Pages Deployment Guide

## 🚀 Quick Setup Steps

### 1. Upload Files to GitHub
1. **Create a new repository** on GitHub (or use existing)
2. **Upload all project files** to the repository
3. **Ensure the `main` branch** contains all files

### 2. Enable GitHub Pages
1. **Go to repository Settings → Pages**
2. **Set Source to "GitHub Actions"**
3. **Add custom domain**: `www.everythingaifoundation.org`
4. **Enable "Enforce HTTPS"**

### 3. Configure DNS (Squarespace)
1. **Log into your Squarespace domain management**
2. **Go to DNS settings**
3. **Add CNAME record**:
   - **Name**: `www`
   - **Value**: `YOUR-GITHUB-USERNAME.github.io`
4. **Add A records** (for apex domain):
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

### 4. Deploy
1. **Push code to `main` branch**
2. **GitHub Actions will automatically build and deploy**
3. **Check Actions tab** for deployment status
4. **Visit**: `https://www.everythingaifoundation.org`

## 🔧 Troubleshooting

### DNS Issues
- **Wait 10-15 minutes** for DNS propagation
- **Use DNS checker tools** to verify records
- **Check GitHub Pages settings** for domain verification

### Build Issues
- **Check Actions tab** for error logs
- **Ensure all dependencies** are in package.json
- **Verify Next.js export configuration**

### Custom Domain Issues
- **Ensure CNAME file** exists in public folder
- **Check domain spelling** in GitHub settings
- **Verify DNS records** are correct

## 📋 File Checklist

Make sure these files are in your GitHub repository:
- ✅ `package.json`
- ✅ `next.config.js`
- ✅ `public/CNAME`
- ✅ `.github/workflows/deploy.yml`
- ✅ All app files and components
- ✅ `tailwind.config.ts`
- ✅ `tsconfig.json`

## 🌐 Expected URLs

After successful deployment:
- **Primary**: `https://www.everythingaifoundation.org`
- **GitHub Pages**: `https://YOUR-USERNAME.github.io/REPO-NAME`
- **Both should work** and redirect to HTTPS

## 📞 Need Help?

If you encounter issues:
1. **Check GitHub Actions logs**
2. **Verify DNS settings**
3. **Ensure all files are uploaded**
4. **Wait for DNS propagation**
