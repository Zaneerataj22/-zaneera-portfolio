# 🚀 GitHub Pages Deployment Guide

Follow these steps to deploy your portfolio online for FREE!

## Step 1: Create GitHub Account
1. Go to https://github.com
2. Click "Sign up"
3. Enter email: zaneerataj.developer@gmail.com (or your preferred email)
4. Create username (example: zaneerataj or zaneera-taj)
5. Create password
6. Verify email

## Step 2: Create New Repository
1. After login, click the "+" icon (top right)
2. Click "New repository"
3. Repository name: `zaneera-portfolio` (exactly this name)
4. Description: "Professional Portfolio Website - Full Stack Developer"
5. Select "Public" (important for free GitHub Pages)
6. ✅ Check "Add a README file" (optional, we already have one)
7. Click "Create repository"

## Step 3: Upload Files
### Option A: Using Web Interface (Easiest)
1. In your repository, click "Add file" → "Upload files"
2. Drag and drop ALL these files:
   - index.html
   - style.css
   - script.js
   - task-management-demo.html
   - erp-system-demo.html
   - Task & Project.png
   - ERP.png
   - README.md
   - .gitignore
3. Scroll down, add commit message: "Initial portfolio upload"
4. Click "Commit changes"

### Option B: Using Git Commands (If you have Git installed)
```bash
# Open terminal in your portfolio folder
git init
git add .
git commit -m "Initial portfolio upload"
git branch -M main
git remote add origin https://github.com/yourusername/zaneera-portfolio.git
git push -u origin main
```

## Step 4: Enable GitHub Pages
1. In your repository, click "Settings" (top menu)
2. Scroll down and click "Pages" (left sidebar)
3. Under "Source":
   - Branch: Select "main"
   - Folder: Select "/ (root)"
4. Click "Save"
5. Wait 2-3 minutes for deployment

## Step 5: Get Your Live Link
After 2-3 minutes, refresh the Pages settings page.

You'll see:
```
✅ Your site is live at https://yourusername.github.io/zaneera-portfolio/
```

## 🎉 Your Portfolio is Now Live!

### Share Your Link:
- Add to resume
- Add to LinkedIn profile
- Share with recruiters
- Share with companies

### Update Your Portfolio Later:
1. Go to your repository
2. Click on the file you want to edit
3. Click the pencil icon (Edit)
4. Make changes
5. Scroll down → "Commit changes"
6. Changes will be live in 1-2 minutes!

## 📝 Important Notes:
- Your link will be: `https://yourusername.github.io/zaneera-portfolio/`
- Replace "yourusername" with your actual GitHub username
- Portfolio updates automatically when you push changes
- It's 100% FREE forever
- You can use a custom domain later if you want

## 🔧 Troubleshooting:
- **404 Error**: Wait 5 minutes, GitHub Pages takes time to deploy
- **Styles not loading**: Make sure all files are in the root folder
- **Images not showing**: Check image file names match exactly (case-sensitive)

## 🌟 Next Steps (Optional):
1. Add custom domain (like zaneerataj.com)
2. Enable HTTPS (automatic with GitHub Pages)
3. Add Google Analytics to track visitors
4. Update content regularly

---

Need help? Check GitHub Pages documentation: https://pages.github.com
