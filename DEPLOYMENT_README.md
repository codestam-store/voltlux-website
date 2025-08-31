# Deployment Script Documentation

This script automates the process of creating a GitHub repository, pushing your code, and deploying to Vercel.

## Prerequisites

Before running the deployment script, ensure you have the following:

### 1. Required Tools
- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **Git** (configured with your credentials)

### 2. GitHub Personal Access Token
You need a GitHub Personal Access Token with the following permissions:
- `repo` (Full control of private repositories)
- `workflow` (Update GitHub Action workflows)

#### How to create a GitHub Personal Access Token:
1. Go to GitHub.com and sign in
2. Click your profile picture → Settings
3. Scroll down to "Developer settings" (bottom left)
4. Click "Personal access tokens" → "Tokens (classic)"
5. Click "Generate new token" → "Generate new token (classic)"
6. Give it a name (e.g., "Deployment Script")
7. Select the required scopes:
   - `repo` (Full control of private repositories)
   - `workflow` (Update GitHub Action workflows)
8. Click "Generate token"
9. **Copy the token immediately** (you won't see it again)

### 3. Git Repository Setup
Make sure your project is initialized as a Git repository:
```bash
git init
git add .
git commit -m "Initial commit"
```

## Running the Deployment Script

### Usage
```bash
npm run deploy [options] <repository-name>
```

### Options
- `<repository-name>` - Name for the GitHub repository (required)
- `-d, --description` - Repository description
- `-t, --token` - GitHub Personal Access Token
- `--public` - Make repository public (default: private)
- `--delete-token` - Delete saved GitHub token
- `-h, --help` - Show help message

### Examples
```bash
# Basic usage (private repository)
npm run deploy my-awesome-project

# With description
npm run deploy my-project --description "My awesome project"

# Public repository
npm run deploy my-project --public

# First time with token (saves for future use)
npm run deploy my-project -t ghp_your_token_here

# Delete saved token
npm run deploy --delete-token

# Show help
npm run deploy --help
```

## What the Script Does

The deployment script performs the following steps:

1. **Empty GitHub Repository Creation**
   - Creates an EMPTY repository on GitHub (private by default)
   - Validates your GitHub token
   - Works even if you're already in a GitHub repository
   - No initial files, README, or gitignore

2. **Source Code Push**
   - Adds the new repository as a remote with the repository name
   - Adds ALL files to staging (including untracked files)
   - Commits all changes with "Initial deployment" message
   - Force pushes all code to the new repository
   - Preserves existing remotes (origin, etc.)

3. **Vercel Deployment**
   - Checks if Vercel CLI is installed (installs if needed)
   - Creates `vercel.json` configuration with Git integration
   - Deploys the project to Vercel (Vercel builds during deployment)
   - Links Vercel project with GitHub repository

4. **Automatic Deployments Setup**
   - Creates GitHub webhook for automatic deployments
   - Configures push events to trigger Vercel deployments
   - Ensures future code pushes automatically deploy

## Why No Local Build?

The script skips local building for several reasons:
- **Vercel Builds Automatically**: Vercel will build your project during deployment
- **Faster Deployment**: No need to wait for local build
- **Cleaner Repository**: Only source code, not build artifacts
- **Better CI/CD**: Build happens in the cloud environment
- **Error Detection**: Build errors are caught during Vercel deployment

## Token Management

The script automatically saves your GitHub token for future use:
- **First run**: Provide token with `-t` flag
- **Subsequent runs**: Token is automatically loaded
- **Delete token**: Use `--delete-token` flag

Token is stored securely in your home directory: `~/.github-deploy-token`

## Remote Management

The script handles Git remotes intelligently:
- **Creates new remote**: Uses repository name as remote name (e.g., `my-project`)
- **Preserves existing remotes**: Keeps your existing `origin` and other remotes
- **Updates existing remote**: If a remote with the same name exists, it's updated
- **Multiple deployments**: You can deploy to multiple repositories from the same project

Example remotes after multiple deployments:
```
origin          https://github.com/username/original-repo.git
my-project      https://github.com/username/my-project.git
another-repo    https://github.com/username/another-repo.git
```

## Automatic Deployments

The script sets up automatic deployments:
- **GitHub webhook**: Created to listen for push events
- **Vercel integration**: Links your Vercel project with the GitHub repository
- **Auto-deploy**: Future pushes to the repository automatically trigger Vercel deployments
- **No manual intervention**: Once set up, deployments happen automatically

### How it works:
1. When you push code to the GitHub repository
2. GitHub webhook sends a notification to Vercel
3. Vercel automatically builds and deploys your changes
4. Your site is updated with the latest code

### Benefits:
- ✅ **Continuous deployment**: Code changes are deployed automatically
- ✅ **No manual steps**: Push code and it's live
- ✅ **Team collaboration**: Multiple developers can trigger deployments
- ✅ **Version control**: Every deployment is tied to a specific commit

## Error Handling

The script includes comprehensive error handling:

- **Invalid GitHub token**: Will validate the token before proceeding
- **Push failures**: Will handle Git push errors gracefully
- **Vercel deployment failures**: Will continue even if Vercel deployment fails

## Troubleshooting

### Common Issues and Solutions

#### 1. "Repository name is required"
**Solution**: Provide repository name as first argument
```bash
npm run deploy my-project-name
```

#### 2. "GitHub token is required"
**Solution**: 
- First time: `npm run deploy my-project -t your_token_here`
- Check if token is saved: The script will use saved token automatically
- Delete and re-save: `npm run deploy --delete-token` then run with `-t` flag again

#### 3. "Invalid GitHub token"
**Solution**: 
- Check if your token has the required permissions
- Generate a new token if needed
- Delete saved token and provide new one: `npm run deploy --delete-token`

#### 4. "Vercel CLI is not installed"
**Solution**: The script will attempt to install it automatically. If it fails:
```bash
npm install -g vercel
```

### Manual Deployment Steps

If the script fails, you can perform the steps manually:

1. **Create GitHub Repository**:
   - Go to GitHub.com
   - Click "New repository"
   - Fill in details and create

2. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/username/repo-name.git
   git push -u origin main
   ```

3. **Deploy to Vercel**:
   ```bash
   npm install -g vercel
   vercel --prod
   ```

## Security Notes

- **Token storage**: Your GitHub token is stored in your home directory
- **Token deletion**: Use `--delete-token` to remove saved token
- **Never commit tokens**: Tokens are never committed to version control
- **Regular rotation**: Consider rotating your GitHub Personal Access Tokens periodically

## Script Features

- ✅ Command line arguments (no interactive prompts)
- ✅ Automatic token saving and loading
- ✅ Private repositories by default
- ✅ Colored console output for better readability
- ✅ Comprehensive error handling
- ✅ Automatic tool installation
- ✅ Progress indicators
- ✅ Graceful fallbacks
- ✅ Cross-platform compatibility
- ✅ Detailed logging

## Files Created/Modified

The script may create or modify these files:
- `vercel.json` (if it doesn't exist)
- Git remote origin (added to your repository)
- Token file: `~/.github-deploy-token` (for token storage)
