# Deployment Instructions for Number Guesser Game

## GitHub Repository Setup

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository name: `Number-Guesser-Game`
5. Description: "A modern number guessing game built with React, TypeScript, and Tailwind CSS"
6. Set visibility to **Public** (required for GitHub Pages)
7. Do NOT initialize with README, .gitignore, or license (we already have these)
8. Click "Create repository"

### Step 2: Connect Local Repository to GitHub

Run these commands in your terminal:

```bash
# Add the GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/Number-Guesser-Game.git

# Push all branches to GitHub
git push -u origin main

# Push all feature branches
git push -u origin feature/core-game-logic
git push -u origin feature/ui-components
git push -u origin feature/optional-features
git push -u origin feature/testing
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Deploy to GitHub Pages

### Option 1: Manual Deployment (Quick)

```bash
# Build the project
npm run build

# Install gh-pages if not already installed
npm install -g gh-pages

# Deploy to GitHub Pages
gh-pages -d dist
```

### Option 2: Using GitHub Actions (Automated)

The project already has a GitHub Actions workflow configured. Follow these steps:

1. **Push your code to GitHub** (from Step 2 above)

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy when you push to main

3. **Verify Deployment:**
   - After pushing, go to the "Actions" tab in your repository
   - You should see a workflow running
   - Wait for it to complete (green checkmark)
   - Your site will be live at: `https://YOUR_USERNAME.github.io/Number-Guesser-Game/`

### Option 3: Using Vite Build Configuration

Update `vite.config.ts` to set the correct base path:

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Number-Guesser-Game/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
})
```

Then:
```bash
npm run build
npx gh-pages -d dist
```

## Repository Information

Once deployed, your repository will be available at:
- **GitHub**: `https://github.com/YOUR_USERNAME/Number-Guesser-Game`
- **Live Demo**: `https://YOUR_USERNAME.github.io/Number-Guesser-Game/`

## Quick Deployment Command Summary

```bash
# 1. Add remote (replace with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/Number-Guesser-Game.git

# 2. Push code
git push -u origin main

# 3. Enable GitHub Pages in repository settings > Pages > Source: GitHub Actions

# Or manual deployment:
npm run build
npx gh-pages -d dist
```

## Troubleshooting

### GitHub Pages not loading
- Make sure the repository is public
- Check the repository settings > Pages > Source is set to "GitHub Actions"
- Verify the workflow completed successfully in the Actions tab

### 404 Error
- Update `vite.config.ts` with `base: '/Number-Guesser-Game/'`
- Rebuild and redeploy

### Build Fails
- Run `npm install` to ensure dependencies are installed
- Check that all TypeScript errors are resolved
- Run `npm run build` locally to verify it works

