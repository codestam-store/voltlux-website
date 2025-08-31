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
    cyan: '\x1b[36m'
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

// Token management
const TOKEN_FILE = join(homedir(), '.github-deploy-token');

function saveToken(token) {
    try {
        writeFileSync(TOKEN_FILE, token, 'utf8');
        logSuccess('GitHub token saved for future use');
        return true;
    } catch (error) {
        logError(`Failed to save token: ${error.message}`);
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
        deleteToken: false
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
🚀 GitHub + Vercel Deployment Script

Usage: npm run deploy [options] <repository-name>

Options:
  <repository-name>     Name for the GitHub repository (required)
  -d, --description     Repository description
  -t, --token          GitHub Personal Access Token
  --public             Make repository public (default: private)
  --delete-token       Delete saved GitHub token
  -h, --help           Show this help message

Examples:
  npm run deploy my-awesome-project
  npm run deploy my-project --description "My awesome project"
  npm run deploy my-project --public
  npm run deploy my-project -t ghp_your_token_here
  npm run deploy --delete-token

The script will:
1. Create an EMPTY GitHub repository (even if you're already in a repo)
2. Push source code to GitHub on a new branch (Vercel will build during deployment)
3. Deploy to Vercel and link with GitHub repository
4. Setup automatic deployments via GitHub webhook

Your GitHub token will be saved for future use.
Note: The new repository will be added as a remote with the repository name.
A new branch will be created based on the repository name and pushed to GitHub.
Future pushes to the repository will automatically trigger Vercel deployments.
`);
}

// Validate GitHub token
async function validateGitHubToken(token) {
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
            return true;
        } else {
            logError('Invalid GitHub token');
            return false;
        }
    } catch (error) {
        logError(`Error validating GitHub token: ${error.message}`);
        return false;
    }
}

// Create GitHub repository
async function createGitHubRepo(token, repoName, description, isPrivate) {
    logInfo('Creating empty GitHub repository...');

    try {
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
            logSuccess(`Empty repository created: ${repo.html_url}`);
            return repo;
        } else {
            const error = await response.json();
            throw new Error(error.message || 'Failed to create repository');
        }
    } catch (error) {
        logError(`Error creating repository: ${error.message}`);
        throw error;
    }
}

// Check if Vercel CLI is installed
function checkVercelCLI() {
    try {
        execSync('vercel --version', { stdio: 'ignore' });
        logSuccess('Vercel CLI is installed');
        return true;
    } catch (error) {
        logWarning('Vercel CLI is not installed');
        return false;
    }
}

// Install Vercel CLI
function installVercelCLI() {
    logInfo('Installing Vercel CLI...');
    try {
        execSync('npm install -g vercel', { stdio: 'inherit' });
        logSuccess('Vercel CLI installed successfully');
        return true;
    } catch (error) {
        logError('Failed to install Vercel CLI');
        return false;
    }
}

// Push code to GitHub with new branch
function pushToGitHub(repoUrl, repoName) {
    logInfo('Pushing source code to GitHub...');

    try {
        // Check if remote already exists and remove it
        try {
            execSync(`git remote remove ${repoName}`, { stdio: 'ignore' });
            logInfo(`Removed existing remote: ${repoName}`);
        } catch (error) {
            // Remote doesn't exist, which is fine
        }

        // Add new remote with repository name
        execSync(`git remote add ${repoName} ${repoUrl}`, { stdio: 'ignore' });
        logInfo(`Added remote: ${repoName} -> ${repoUrl}`);

        // Add all files (including untracked files)
        execSync('git add -A', { stdio: 'ignore' });
        logInfo('Added all files to staging');

        // Check if there are changes to commit
        try {
            execSync('git diff-index --quiet HEAD --', { stdio: 'ignore' });
            logInfo('No changes to commit');
        } catch (error) {
            // There are changes, commit them
            execSync('git commit -m "Initial deployment: Push source code"', { stdio: 'ignore' });
            logInfo('Committed all changes');
        }

        // Create a new branch based on repository name
        const branchName = repoName.replace(/[^a-zA-Z0-9-_]/g, '-').toLowerCase();
        logInfo(`Creating new branch: ${branchName}`);

        try {
            // Create and switch to new branch
            execSync(`git checkout -b ${branchName}`, { stdio: 'ignore' });
            logInfo(`Switched to branch: ${branchName}`);
        } catch (error) {
            // Branch might already exist, try to switch to it
            try {
                execSync(`git checkout ${branchName}`, { stdio: 'ignore' });
                logInfo(`Switched to existing branch: ${branchName}`);
            } catch (switchError) {
                logError(`Failed to create or switch to branch: ${branchName}`);
                return false;
            }
        }

        // Push to the new remote with the new branch (force push to ensure all code is pushed)
        execSync(`git push -u ${repoName} ${branchName} --force`, { stdio: 'inherit' });

        logSuccess(`Source code pushed to GitHub successfully via remote: ${repoName} on branch: ${branchName}`);
        return true;
    } catch (error) {
        logError(`Error pushing to GitHub: ${error.message}`);
        return false;
    }
}

// Deploy to Vercel
function deployToVercel(repoUrl) {
    logInfo('Deploying to Vercel...');

    try {
        // Check if vercel.json exists, if not create one
        if (!existsSync('vercel.json')) {
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
            logInfo('Created vercel.json configuration with Git integration');
        }

        // Deploy using Vercel CLI with Git integration
        logInfo('Deploying and linking with GitHub repository...');
        execSync('vercel --prod --yes', { stdio: 'inherit' });

        // Link the project with the GitHub repository for automatic deployments
        logInfo('Linking Vercel project with GitHub repository...');
        try {
            execSync(`vercel link --repo ${repoUrl}`, { stdio: 'inherit' });
            logSuccess('Vercel project linked with GitHub repository');
        } catch (error) {
            logWarning('Could not automatically link with GitHub repository');
            logInfo('You can manually link it in the Vercel dashboard');
        }

        logSuccess('Deployment to Vercel completed successfully');
        return true;
    } catch (error) {
        logError(`Error deploying to Vercel: ${error.message}`);
        return false;
    }
}

// Setup GitHub webhook for automatic deployments
async function setupGitHubWebhook(token, repoOwner, repoName) {
    logInfo('Setting up GitHub webhook for automatic deployments...');

    try {
        // Get Vercel project info
        const vercelProjectInfo = execSync('vercel project ls --json', { encoding: 'utf8' });
        const projects = JSON.parse(vercelProjectInfo);

        if (projects.length === 0) {
            logWarning('No Vercel projects found for webhook setup');
            return false;
        }

        const currentProject = projects[0]; // Use the most recent project

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
            logSuccess('GitHub webhook created for automatic deployments');
            return true;
        } else {
            logWarning('Could not create GitHub webhook automatically');
            return false;
        }
    } catch (error) {
        logWarning(`Webhook setup failed: ${error.message}`);
        return false;
    }
}

// Main deployment function
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

    log('🚀 Starting deployment process...', 'bright');

    try {
        // Get or validate GitHub token
        let token = options.token || loadToken();

        if (!token) {
            logError('GitHub token is required');
            logInfo('Provide it with: npm run deploy <repo-name> -t <your-token>');
            logInfo('Or save it for future use by running the command with -t flag once');
            process.exit(1);
        }

        // Validate token
        const isValidToken = await validateGitHubToken(token);
        if (!isValidToken) {
            process.exit(1);
        }

        // Save token if provided via command line
        if (options.token) {
            saveToken(token);
        }

        // Step 1: Create empty GitHub repository
        logInfo('Step 1: Creating empty GitHub repository...');
        const repo = await createGitHubRepo(token, options.repoName, options.description, options.isPrivate);

        // Step 2: Push source code to GitHub on new branch (Vercel will build during deployment)
        logInfo('Step 2: Pushing source code to GitHub on new branch...');
        if (!pushToGitHub(repo.clone_url, options.repoName)) {
            process.exit(1);
        }

        // Step 3: Check and install Vercel CLI
        logInfo('Step 3: Setting up Vercel deployment...');
        if (!checkVercelCLI()) {
            if (!installVercelCLI()) {
                logWarning('Skipping Vercel deployment. You can deploy manually later.');
                logInfo(`Your repository is available at: ${repo.html_url}`);
                return;
            }
        }

        // Step 4: Deploy to Vercel (Vercel will build the project)
        logInfo('Step 4: Deploying to Vercel (building project during deployment)...');
        if (!deployToVercel(repo.clone_url)) {
            logWarning('Vercel deployment failed. You can deploy manually later.');
            logInfo(`Your repository is available at: ${repo.html_url}`);
            return;
        }

        // Step 5: Setup GitHub webhook for automatic deployments
        logInfo('Step 5: Setting up automatic deployments...');
        const repoOwner = repo.owner.login;
        await setupGitHubWebhook(token, repoOwner, options.repoName);

        logSuccess('🎉 Deployment completed successfully!');
        logInfo(`GitHub Repository: ${repo.html_url}`);
        logInfo('Check your Vercel dashboard for the deployment URL');
        logInfo('Future pushes to the repository will automatically trigger Vercel deployments');

    } catch (error) {
        logError(`Deployment failed: ${error.message}`);
        process.exit(1);
    }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    logError(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
    process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    logError(`Uncaught Exception: ${error.message}`);
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
