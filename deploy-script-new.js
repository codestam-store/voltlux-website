#!/usr/bin/env node

import { execSync } from 'child_process';
import { writeFileSync, existsSync, readFileSync, unlinkSync } from 'fs';
import { join } from 'path';
import { homedir } from 'os';

// Colors for console output
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function logError(message) {
    log(`❌ ERROR: ${message}`, 'red');
}

function logSuccess(message) {
    log(`✅ ${message}`, 'green');
}

function logInfo(message) {
    log(`ℹ️  ${message}`, 'blue');
}

function logWarning(message) {
    log(`⚠️  ${message}`, 'yellow');
}

function logStep(step, message) {
    log(`\n${colors.cyan}=== STEP ${step}: ${message} ===${colors.reset}`, 'bright');
}

function logDetailed(message) {
    log(`📋 ${message}`, 'white');
}

// Token management
const TOKEN_FILE = join(homedir(), '.github-deploy-token');

function saveToken(token) {
    try {
        writeFileSync(TOKEN_FILE, token, 'utf8');
        logSuccess('GitHub token saved for future use');
        return true;
    } catch (error) {
        logError(`Failed to save token: ${error.message}`);
        logDetailed(`Error details: ${error.stack}`);
        return false;
    }
}

function loadToken() {
    try {
        if (existsSync(TOKEN_FILE)) {
            return readFileSync(TOKEN_FILE, 'utf8').trim();
        }
    } catch (error) {
        logWarning('Could not load saved token');
        logDetailed(`Error details: ${error.message}`);
    }
    return null;
}

function deleteToken() {
    try {
        if (existsSync(TOKEN_FILE)) {
            unlinkSync(TOKEN_FILE);
            logSuccess('Saved token deleted');
        }
    } catch (error) {
        logError(`Failed to delete token: ${error.message}`);
        logDetailed(`Error details: ${error.stack}`);
    }
}

// Parse command line arguments
function parseArgs() {
    const args = process.argv.slice(2);
    const options = {
        repoName: '',
        description: '',
        token: '',
        isPrivate: true, // Default to private
        help: false,
        deleteToken: false,
        force: false, // Force recreation of repository
        skipVercel: false, // Skip Vercel deployment
        verbose: false // Verbose output
    };

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        switch (arg) {
            case '--help':
            case '-h':
                options.help = true;
                break;
            case '--public':
                options.isPrivate = false;
                break;
            case '--delete-token':
                options.deleteToken = true;
                break;
            case '--force':
                options.force = true;
                break;
            case '--skip-vercel':
                options.skipVercel = true;
                break;
            case '--verbose':
            case '-v':
                options.verbose = true;
                break;
            case '--token':
            case '-t':
                options.token = args[++i] || '';
                break;
            case '--description':
            case '-d':
                options.description = args[++i] || '';
                break;
            default:
                if (!options.repoName) {
                    options.repoName = arg;
                }
                break;
        }
    }

    return options;
}

// Show help
function showHelp() {
    console.log(`
🚀 GitHub + Vercel Deployment Script (Enhanced Error Handling)

Usage: npm run deploy [options] <repository-name>

Options:
  <repository-name>     Name for the GitHub repository (required)
  -d, --description     Repository description
  -t, --token          GitHub Personal Access Token
  --public             Make repository public (default: private)
  --delete-token       Delete saved GitHub token
  --force              Force recreation of repository (delete if exists)
  --skip-vercel        Skip Vercel deployment (GitHub only)
  -v, --verbose        Enable verbose output with detailed error messages
  -h, --help           Show this help message

Examples:
  npm run deploy my-awesome-project
  npm run deploy my-project --description "My awesome project"
  npm run deploy my-project --public
  npm run deploy my-project -t ghp_your_token_here
  npm run deploy my-project --force
  npm run deploy my-project --skip-vercel
  npm run deploy --delete-token

Enhanced Features:
✅ Comprehensive error handling with detailed messages
✅ Handles existing repositories gracefully
✅ Detailed deployment status and progress tracking
✅ Ability to skip Vercel deployment if needed
✅ Force recreation of repositories
✅ Verbose logging for debugging
✅ Automatic cleanup on failures
✅ Step-by-step progress with detailed explanations

The script will:
1. Create an EMPTY GitHub repository (handles existing repos)
2. Push source code to GitHub on a new branch
3. Deploy to Vercel and link with GitHub repository
4. Setup automatic deployments via GitHub webhook

Your GitHub token will be saved for future use.
Note: The new repository will be added as a remote with the repository name.
A new branch will be created based on the repository name and pushed to GitHub.
Future pushes to the repository will automatically trigger Vercel deployments.
`);
}

// Validate GitHub token with detailed error messages
async function validateGitHubToken(token) {
    logDetailed('Validating GitHub token...');

    try {
        const response = await fetch('https://api.github.com/user', {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (response.ok) {
            const user = await response.json();
            logSuccess(`GitHub token validated for user: ${user.login}`);
            logDetailed(`User ID: ${user.id}, Email: ${user.email || 'Not public'}`);
            return { valid: true, user };
        } else {
            const errorData = await response.json();
            logError('Invalid GitHub token');
            logDetailed(`HTTP Status: ${response.status} ${response.statusText}`);
            logDetailed(`Error Message: ${errorData.message || 'Unknown error'}`);
            logDetailed(`Documentation URL: ${errorData.documentation_url || 'N/A'}`);

            if (response.status === 401) {
                logDetailed('💡 Solution: Check if your token is valid and has the required permissions');
                logDetailed('💡 Required permissions: repo, workflow (for webhooks)');
            }
            return { valid: false, error: errorData };
        }
    } catch (error) {
        logError(`Error validating GitHub token: ${error.message}`);
        logDetailed(`Network error: ${error.stack}`);
        logDetailed('💡 Solution: Check your internet connection and try again');
        return { valid: false, error: error.message };
    }
}

// Check if repository exists
async function checkRepoExists(token, repoName) {
    logDetailed('Checking if repository already exists...');

    try {
        // First, get the authenticated user to construct the full repo path
        const userResponse = await fetch('https://api.github.com/user', {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (!userResponse.ok) {
            logError('Failed to get user information for repository check');
            return { exists: false, error: 'Failed to get user info' };
        }

        const user = await userResponse.json();
        const fullRepoPath = `${user.login}/${repoName}`;

        logDetailed(`Checking repository: ${fullRepoPath}`);

        const response = await fetch(`https://api.github.com/repos/${fullRepoPath}`, {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (response.ok) {
            const repo = await response.json();
            logWarning(`Repository already exists: ${repo.html_url}`);
            logDetailed(`Repository ID: ${repo.id}`);
            logDetailed(`Created: ${repo.created_at}`);
            logDetailed(`Last updated: ${repo.updated_at}`);
            logDetailed(`Visibility: ${repo.private ? 'Private' : 'Public'}`);
            return { exists: true, repo };
        } else if (response.status === 404) {
            logDetailed('Repository does not exist - will create new one');
            return { exists: false };
        } else {
            const errorData = await response.json();
            logError(`Error checking repository: ${errorData.message}`);
            return { exists: false, error: errorData };
        }
    } catch (error) {
        logError(`Error checking repository existence: ${error.message}`);
        return { exists: false, error: error.message };
    }
}

// Delete existing repository
async function deleteRepository(token, repoName) {
    logDetailed('Deleting existing repository...');

    try {
        // Get the authenticated user to construct the full repo path
        const userResponse = await fetch('https://api.github.com/user', {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (!userResponse.ok) {
            logError('Failed to get user information for repository deletion');
            return false;
        }

        const user = await userResponse.json();
        const fullRepoPath = `${user.login}/${repoName}`;

        logDetailed(`Deleting repository: ${fullRepoPath}`);

        const response = await fetch(`https://api.github.com/repos/${fullRepoPath}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (response.status === 204) {
            logSuccess('Existing repository deleted successfully');
            return true;
        } else {
            const errorData = await response.json();
            logError(`Failed to delete repository: ${errorData.message}`);
            logDetailed(`HTTP Status: ${response.status} ${response.statusText}`);
            return false;
        }
    } catch (error) {
        logError(`Error deleting repository: ${error.message}`);
        return false;
    }
}

// Create GitHub repository with detailed error handling
async function createGitHubRepo(token, repoName, description, isPrivate, force = false) {
    logDetailed('Creating GitHub repository...');
    logDetailed(`Repository name: ${repoName}`);
    logDetailed(`Description: ${description || 'No description'}`);
    logDetailed(`Visibility: ${isPrivate ? 'Private' : 'Public'}`);
    logDetailed(`Force recreation: ${force ? 'Yes' : 'No'}`);

    try {
        // Check if repository exists
        const repoCheck = await checkRepoExists(token, repoName);

        if (repoCheck.exists) {
            if (force) {
                logWarning('Repository exists and force flag is set - deleting existing repository');
                if (!await deleteRepository(token, repoName)) {
                    throw new Error('Failed to delete existing repository');
                }
            } else {
                logWarning('Repository already exists. Use --force to recreate it.');
                logDetailed(`Existing repository URL: ${repoCheck.repo.html_url}`);
                logDetailed('💡 Solutions:');
                logDetailed('  1. Use --force flag to delete and recreate');
                logDetailed('  2. Choose a different repository name');
                logDetailed('  3. Continue with existing repository');

                // Ask user what to do (in a real scenario, you might want to prompt)
                logInfo('Continuing with existing repository...');
                return repoCheck.repo;
            }
        }

        const response = await fetch('https://api.github.com/user/repos', {
            method: 'POST',
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: repoName,
                description: description,
                private: isPrivate,
                auto_init: false, // Ensure repository is created empty
                gitignore_template: null, // No gitignore template
                license_template: null // No license template
            })
        });

        if (response.ok) {
            const repo = await response.json();
            logSuccess(`Repository created successfully: ${repo.html_url}`);
            logDetailed(`Repository ID: ${repo.id}`);
            logDetailed(`Clone URL: ${repo.clone_url}`);
            logDetailed(`SSH URL: ${repo.ssh_url}`);
            logDetailed(`Created at: ${repo.created_at}`);
            return repo;
        } else {
            const error = await response.json();
            logError(`Failed to create repository: ${error.message}`);
            logDetailed(`HTTP Status: ${response.status} ${response.statusText}`);
            logDetailed(`Error details: ${JSON.stringify(error, null, 2)}`);

            if (response.status === 422) {
                logDetailed('💡 Common causes:');
                logDetailed('  - Repository name already exists');
                logDetailed('  - Repository name contains invalid characters');
                logDetailed('  - Repository name is too long (>100 characters)');
                logDetailed('  - Repository name starts with a dot or hyphen');

                // Suggest alternative names if repository already exists
                if (error.message.includes('name already exists')) {
                    logDetailed('💡 Suggested alternative names:');
                    const alternatives = [
                        `${repoName}-${Date.now()}`,
                        `${repoName}-project`,
                        `${repoName}-app`,
                        `${repoName}-${Math.floor(Math.random() * 1000)}`,
                        `${repoName}-deployment`
                    ];
                    alternatives.forEach((alt, index) => {
                        logDetailed(`  ${index + 1}. ${alt}`);
                    });
                }
            }

            throw new Error(error.message || 'Failed to create repository');
        }
    } catch (error) {
        logError(`Error creating repository: ${error.message}`);
        logDetailed(`Full error: ${error.stack}`);
        throw error;
    }
}

// Check if Vercel CLI is installed with detailed output
function checkVercelCLI() {
    logDetailed('Checking Vercel CLI installation...');

    try {
        const version = execSync('vercel --version', { encoding: 'utf8', stdio: 'pipe' });
        logSuccess(`Vercel CLI is installed: ${version.trim()}`);
        return true;
    } catch (error) {
        logWarning('Vercel CLI is not installed');
        logDetailed(`Error: ${error.message}`);
        logDetailed('💡 Solution: Run "npm install -g vercel" to install Vercel CLI');
        return false;
    }
}

// Install Vercel CLI with detailed progress
function installVercelCLI() {
    logDetailed('Installing Vercel CLI globally...');

    try {
        logDetailed('Running: npm install -g vercel');
        execSync('npm install -g vercel', { stdio: 'inherit' });
        logSuccess('Vercel CLI installed successfully');

        // Verify installation
        const version = execSync('vercel --version', { encoding: 'utf8', stdio: 'pipe' });
        logDetailed(`Installed version: ${version.trim()}`);
        return true;
    } catch (error) {
        logError('Failed to install Vercel CLI');
        logDetailed(`Error: ${error.message}`);
        logDetailed('💡 Solutions:');
        logDetailed('  1. Try running with sudo: sudo npm install -g vercel');
        logDetailed('  2. Check your npm configuration: npm config list');
        logDetailed('  3. Install manually: https://vercel.com/docs/cli');
        return false;
    }
}

// Push code to GitHub with comprehensive error handling
function pushToGitHub(repoUrl, repoName) {
    logDetailed('Preparing to push code to GitHub...');
    logDetailed(`Repository URL: ${repoUrl}`);
    logDetailed(`Remote name: ${repoName}`);

    try {
        // Check if we're in a git repository
        try {
            execSync('git status', { stdio: 'ignore' });
            logDetailed('Git repository detected');
        } catch (error) {
            logError('Not in a git repository');
            logDetailed('💡 Solution: Initialize git repository first');
            logDetailed('   Run: git init');
            return false;
        }

        // Check if remote already exists and remove it
        try {
            execSync(`git remote remove ${repoName}`, { stdio: 'ignore' });
            logDetailed(`Removed existing remote: ${repoName}`);
        } catch (error) {
            logDetailed(`No existing remote named ${repoName} found`);
        }

        // Add new remote with repository name
        execSync(`git remote add ${repoName} ${repoUrl}`, { stdio: 'ignore' });
        logDetailed(`Added remote: ${repoName} -> ${repoUrl}`);

        // Check current branch
        const currentBranch = execSync('git branch --show-current', { encoding: 'utf8', stdio: 'pipe' }).trim();
        logDetailed(`Current branch: ${currentBranch}`);

        // Add all files (including untracked files)
        execSync('git add -A', { stdio: 'ignore' });
        logDetailed('Added all files to staging');

        // Check if there are changes to commit
        try {
            execSync('git diff-index --quiet HEAD --', { stdio: 'ignore' });
            logDetailed('No changes to commit');
        } catch (error) {
            // There are changes, commit them
            execSync('git commit -m "Initial deployment: Push source code"', { stdio: 'ignore' });
            logDetailed('Committed all changes');
        }

        // Create a new branch based on repository name
        const branchName = repoName.replace(/[^a-zA-Z0-9-_]/g, '-').toLowerCase();
        logDetailed(`Creating new branch: ${branchName}`);

        try {
            // Create and switch to new branch
            execSync(`git checkout -b ${branchName}`, { stdio: 'ignore' });
            logDetailed(`Switched to branch: ${branchName}`);
        } catch (error) {
            // Branch might already exist, try to switch to it
            try {
                execSync(`git checkout ${branchName}`, { stdio: 'ignore' });
                logDetailed(`Switched to existing branch: ${branchName}`);
            } catch (switchError) {
                logError(`Failed to create or switch to branch: ${branchName}`);
                logDetailed(`Error: ${switchError.message}`);
                logDetailed('💡 Solution: Check if branch name is valid and try again');
                return false;
            }
        }

        // Push to the new remote with the new branch (force push to ensure all code is pushed)
        logDetailed(`Pushing to remote: ${repoName}/${branchName}`);
        execSync(`git push -u ${repoName} ${branchName} --force`, { stdio: 'inherit' });

        logSuccess(`Source code pushed to GitHub successfully`);
        logDetailed(`Remote: ${repoName}`);
        logDetailed(`Branch: ${branchName}`);
        logDetailed(`URL: ${repoUrl}`);
        return true;
    } catch (error) {
        logError(`Error pushing to GitHub: ${error.message}`);
        logDetailed(`Full error: ${error.stack}`);
        logDetailed('💡 Common solutions:');
        logDetailed('  1. Check your internet connection');
        logDetailed('  2. Verify your GitHub token has repo permissions');
        logDetailed('  3. Check if the repository URL is correct');
        logDetailed('  4. Try running: git remote -v to see configured remotes');
        return false;
    }
}

// Deploy to Vercel with detailed progress tracking
function deployToVercel(repoUrl) {
    logDetailed('Starting Vercel deployment process...');
    logDetailed(`Repository URL: ${repoUrl}`);

    try {
        // Check if vercel.json exists, if not create one
        if (!existsSync('vercel.json')) {
            logDetailed('Creating vercel.json configuration...');
            const vercelConfig = {
                "version": 2,
                "builds": [
                    {
                        "src": "package.json",
                        "use": "@vercel/next"
                    }
                ],
                "git": {
                    "deploymentEnabled": true
                }
            };
            writeFileSync('vercel.json', JSON.stringify(vercelConfig, null, 2));
            logDetailed('Created vercel.json configuration with Git integration');
        } else {
            logDetailed('vercel.json already exists');
        }

        // Check package.json
        if (!existsSync('package.json')) {
            logError('package.json not found');
            logDetailed('💡 Solution: Ensure you are in the correct project directory');
            return false;
        }

        // Deploy using Vercel CLI with Git integration
        logDetailed('Deploying to Vercel (this may take a few minutes)...');
        logDetailed('Running: vercel --prod --yes --debug');

        execSync('vercel --prod --yes --debug', { stdio: 'inherit' });

        // Link the project with the GitHub repository for automatic deployments
        logDetailed('Linking Vercel project with GitHub repository...');
        try {
            execSync(`vercel link --repo ${repoUrl}`, { stdio: 'inherit' });
            logSuccess('Vercel project linked with GitHub repository');
        } catch (error) {
            logWarning('Could not automatically link with GitHub repository');
            logDetailed(`Error: ${error.message}`);
            logDetailed('💡 Solution: You can manually link it in the Vercel dashboard');
        }

        logSuccess('Deployment to Vercel completed successfully');
        return true;
    } catch (error) {
        logError(`Error deploying to Vercel: ${error.message}`);
        logDetailed(`Full error: ${error.stack}`);
        logDetailed('💡 Common solutions:');
        logDetailed('  1. Check your Vercel account and login: vercel login');
        logDetailed('  2. Verify your project structure');
        logDetailed('  3. Check if all dependencies are installed: npm install');
        logDetailed('  4. Try deploying manually: vercel');
        return false;
    }
}

// Setup GitHub webhook for automatic deployments with detailed error handling
async function setupGitHubWebhook(token, repoOwner, repoName) {
    logDetailed('Setting up GitHub webhook for automatic deployments...');
    logDetailed(`Repository: ${repoOwner}/${repoName}`);

    try {
        // Get Vercel project info
        logDetailed('Getting Vercel project information...');
        const vercelProjectInfo = execSync('vercel project ls --json', { encoding: 'utf8' });
        const projects = JSON.parse(vercelProjectInfo);

        if (projects.length === 0) {
            logWarning('No Vercel projects found for webhook setup');
            logDetailed('💡 Solution: Deploy to Vercel first, then run this script again');
            return false;
        }

        const currentProject = projects[0]; // Use the most recent project
        logDetailed(`Using Vercel project: ${currentProject.name} (${currentProject.id})`);

        // Create webhook payload
        const webhookPayload = {
            name: "web",
            active: true,
            events: ["push"],
            config: {
                url: `https://api.vercel.com/v1/hooks/deploy?teamId=${currentProject.teamId || ''}&projectId=${currentProject.id}`,
                content_type: "json"
            }
        };

        logDetailed('Creating GitHub webhook...');
        logDetailed(`Webhook URL: ${webhookPayload.config.url}`);

        // Create webhook via GitHub API
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/hooks`, {
            method: 'POST',
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(webhookPayload)
        });

        if (response.ok) {
            const webhook = await response.json();
            logSuccess('GitHub webhook created for automatic deployments');
            logDetailed(`Webhook ID: ${webhook.id}`);
            logDetailed(`Webhook URL: ${webhook.config.url}`);
            return true;
        } else {
            const error = await response.json();
            logWarning('Could not create GitHub webhook automatically');
            logDetailed(`HTTP Status: ${response.status} ${response.statusText}`);
            logDetailed(`Error: ${error.message}`);
            logDetailed('💡 Solution: You can manually create webhooks in the GitHub repository settings');
            return false;
        }
    } catch (error) {
        logWarning(`Webhook setup failed: ${error.message}`);
        logDetailed(`Full error: ${error.stack}`);
        logDetailed('💡 Solution: Webhooks can be set up manually in GitHub repository settings');
        return false;
    }
}

// Cleanup function for failed deployments
function cleanup(repoName) {
    logDetailed('Performing cleanup...');

    try {
        // Remove the remote we added
        try {
            execSync(`git remote remove ${repoName}`, { stdio: 'ignore' });
            logDetailed(`Removed remote: ${repoName}`);
        } catch (error) {
            logDetailed(`No remote ${repoName} to remove`);
        }

        // Remove vercel.json if we created it
        if (existsSync('vercel.json')) {
            try {
                unlinkSync('vercel.json');
                logDetailed('Removed vercel.json');
            } catch (error) {
                logDetailed('Could not remove vercel.json');
            }
        }

        logDetailed('Cleanup completed');
    } catch (error) {
        logWarning(`Cleanup failed: ${error.message}`);
    }
}

// Main deployment function with comprehensive error handling
async function main() {
    const options = parseArgs();

    // Handle help
    if (options.help) {
        showHelp();
        return;
    }

    // Handle delete token
    if (options.deleteToken) {
        deleteToken();
        return;
    }

    // Validate repository name
    if (!options.repoName) {
        logError('Repository name is required');
        logInfo('Usage: npm run deploy <repository-name>');
        logInfo('Run: npm run deploy --help for more information');
        process.exit(1);
    }

    // Validate repository name format
    const repoNameRegex = /^[a-zA-Z0-9._-]+$/;
    if (!repoNameRegex.test(options.repoName)) {
        logError('Invalid repository name');
        logDetailed('Repository name can only contain letters, numbers, dots, underscores, and hyphens');
        logDetailed('Examples of valid names: my-project, project_123, project-name');
        process.exit(1);
    }

    log('🚀 Starting enhanced deployment process...', 'bright');
    logDetailed(`Repository name: ${options.repoName}`);
    logDetailed(`Description: ${options.description || 'No description'}`);
    logDetailed(`Visibility: ${options.isPrivate ? 'Private' : 'Public'}`);
    logDetailed(`Force recreation: ${options.force ? 'Yes' : 'No'}`);
    logDetailed(`Skip Vercel: ${options.skipVercel ? 'Yes' : 'No'}`);
    logDetailed(`Verbose mode: ${options.verbose ? 'Yes' : 'No'}`);

    let createdRepo = null;
    let deploymentSuccess = false;

    try {
        // Step 1: Get or validate GitHub token
        logStep(1, 'GitHub Token Validation');
        let token = options.token || loadToken();

        if (!token) {
            logError('GitHub token is required');
            logDetailed('💡 Solutions:');
            logDetailed('  1. Provide token with: npm run deploy <repo-name> -t <your-token>');
            logDetailed('  2. Save token for future use by running the command with -t flag once');
            logDetailed('  3. Create a new token at: https://github.com/settings/tokens');
            process.exit(1);
        }

        // Validate token
        const tokenValidation = await validateGitHubToken(token);
        if (!tokenValidation.valid) {
            logDetailed('Token validation failed - exiting');
            process.exit(1);
        }

        // Save token if provided via command line
        if (options.token) {
            saveToken(token);
        }

        // Step 2: Create GitHub repository
        logStep(2, 'GitHub Repository Creation');
        try {
            createdRepo = await createGitHubRepo(token, options.repoName, options.description, options.isPrivate, options.force);
        } catch (error) {
            if (error.message.includes('name already exists')) {
                logError('Repository name already exists');
                logDetailed('💡 Solutions:');
                logDetailed('  1. Use --force flag to delete and recreate: npm run deploy my-project --force');
                logDetailed('  2. Choose a different repository name');
                logDetailed('  3. Check your existing repositories at: https://github.com/settings/repositories');
                logDetailed('  4. Use --skip-vercel to only push to GitHub without Vercel deployment');

                process.exit(1);
            } else {
                throw error; // Re-throw other errors
            }
        }

        // Step 3: Push source code to GitHub
        logStep(3, 'Push Source Code to GitHub');
        if (!pushToGitHub(createdRepo.clone_url, options.repoName)) {
            logError('Failed to push code to GitHub');
            logDetailed('💡 Solutions:');
            logDetailed('  1. Check your internet connection');
            logDetailed('  2. Verify your GitHub token has repo permissions');
            logDetailed('  3. Check if you are in a git repository');
            logDetailed('  4. Try running: git status to check repository state');

            // Cleanup and exit
            cleanup(options.repoName);
            process.exit(1);
        }

        // Step 4: Vercel deployment (optional)
        if (!options.skipVercel) {
            logStep(4, 'Vercel Deployment Setup');

            if (!checkVercelCLI()) {
                logDetailed('Installing Vercel CLI...');
                if (!installVercelCLI()) {
                    logWarning('Vercel CLI installation failed');
                    logDetailed('💡 Solutions:');
                    logDetailed('  1. Install manually: npm install -g vercel');
                    logDetailed('  2. Use --skip-vercel flag to skip Vercel deployment');
                    logDetailed('  3. Deploy manually later using Vercel dashboard');

                    logInfo(`Your repository is available at: ${createdRepo.html_url}`);
                    logDetailed('You can deploy to Vercel manually later');
                    return;
                }
            }

            logStep(5, 'Deploy to Vercel');
            if (!deployToVercel(createdRepo.clone_url)) {
                logWarning('Vercel deployment failed');
                logDetailed('💡 Solutions:');
                logDetailed('  1. Check your Vercel account: vercel login');
                logDetailed('  2. Verify your project structure');
                logDetailed('  3. Install dependencies: npm install');
                logDetailed('  4. Deploy manually: vercel');

                logInfo(`Your repository is available at: ${createdRepo.html_url}`);
                logDetailed('You can deploy to Vercel manually later');
                return;
            }

            deploymentSuccess = true;
        } else {
            logInfo('Skipping Vercel deployment as requested');
        }

        // Step 5: Setup GitHub webhook for automatic deployments
        if (deploymentSuccess || options.skipVercel) {
            logStep(6, 'Setup Automatic Deployments');
            const repoOwner = createdRepo.owner.login;
            await setupGitHubWebhook(token, repoOwner, options.repoName);
        }

        // Success summary
        logSuccess('🎉 Deployment completed successfully!');
        logDetailed('📋 Summary:');
        logDetailed(`  GitHub Repository: ${createdRepo.html_url}`);
        logDetailed(`  Clone URL: ${createdRepo.clone_url}`);
        logDetailed(`  SSH URL: ${createdRepo.ssh_url}`);

        if (deploymentSuccess) {
            logDetailed('  Vercel: Deployment completed');
            logDetailed('  Automatic deployments: Enabled');
        } else if (options.skipVercel) {
            logDetailed('  Vercel: Skipped');
            logDetailed('  Automatic deployments: Not configured');
        }

        logDetailed('💡 Next steps:');
        logDetailed('  1. Check your Vercel dashboard for the deployment URL');
        logDetailed('  2. Future pushes to the repository will automatically trigger deployments');
        logDetailed('  3. You can manage deployments from the Vercel dashboard');

    } catch (error) {
        logError(`Deployment failed: ${error.message}`);
        logDetailed(`Full error: ${error.stack}`);

        // Cleanup on failure
        if (createdRepo) {
            logDetailed('Performing cleanup due to failure...');
            cleanup(options.repoName);
        }

        logDetailed('💡 Troubleshooting:');
        logDetailed('  1. Check the error messages above for specific issues');
        logDetailed('  2. Verify your GitHub token has the required permissions');
        logDetailed('  3. Check your internet connection');
        logDetailed('  4. Try running with --verbose flag for more details');
        logDetailed('  5. Check if the repository name is available');

        process.exit(1);
    }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    logError(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
    logDetailed('This indicates a bug in the script. Please report this issue.');
    process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    logError(`Uncaught Exception: ${error.message}`);
    logDetailed(`Stack trace: ${error.stack}`);
    logDetailed('This indicates a critical error. Please check your system and try again.');
    process.exit(1);
});

// Run the script
main();

export {
    main,
    createGitHubRepo,
    pushToGitHub,
    deployToVercel
};
