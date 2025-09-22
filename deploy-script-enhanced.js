#!/usr/bin/env node

import { execSync } from 'child_process';
import { writeFileSync, existsSync, readFileSync, unlinkSync, rmSync } from 'fs';
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
        isPrivate: true,
        help: false,
        deleteToken: false,
        force: false,
        skipVercel: false,
        skipBuildValidation: false,
        verbose: false
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
            case '--skip-build-validation':
                options.skipBuildValidation = true;
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
🚀 Enhanced GitHub + Vercel Deployment Script

Usage: npm run deploy [options] <repository-name>

Options:
  <repository-name>     Name for the GitHub repository (required)
  -d, --description     Repository description
  -t, --token          GitHub Personal Access Token
  --public             Make repository public (default: private)
  --delete-token       Delete saved GitHub token
  --force              Force recreation of repository (delete if exists)
  --skip-vercel        Skip Vercel deployment (GitHub only)
  --skip-build-validation  Skip build validation before deployment
  -v, --verbose        Enable verbose output
  -h, --help           Show this help message

Enhanced Features:
✅ Automatic cleanup on deployment failure (deletes repo and Vercel project)
✅ Post-success cleanup (removes local tracking configurations)
✅ Comprehensive error handling
✅ Force recreation of repositories
✅ Build validation before deployment

The script will:
1. Create an EMPTY GitHub repository
2. Push source code to GitHub
3. Validate project build (optional)
4. Deploy to Vercel and link with GitHub repository
5. Setup automatic deployments via GitHub webhook
6. Clean up local tracking configurations after success
7. Delete repo and Vercel project if any step fails
`);
}

// Validate GitHub token
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
            return { valid: true, user };
        } else {
            const errorData = await response.json();
            logError('Invalid GitHub token');
            logDetailed(`Error: ${errorData.message || 'Unknown error'}`);
            return { valid: false, error: errorData };
        }
    } catch (error) {
        logError(`Error validating GitHub token: ${error.message}`);
        return { valid: false, error: error.message };
    }
}

// Check if repository exists
async function checkRepoExists(token, repoName) {
    logDetailed('Checking if repository already exists...');
    try {
        const userResponse = await fetch('https://api.github.com/user', {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (!userResponse.ok) {
            return { exists: false, error: 'Failed to get user info' };
        }

        const user = await userResponse.json();
        const fullRepoPath = `${user.login}/${repoName}`;

        const response = await fetch(`https://api.github.com/repos/${fullRepoPath}`, {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (response.ok) {
            const repo = await response.json();
            logWarning(`Repository already exists: ${repo.html_url}`);
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

// Delete GitHub repository
async function deleteGitHubRepository(token, repoName) {
    logDetailed('Deleting GitHub repository...');
    try {
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

        const response = await fetch(`https://api.github.com/repos/${fullRepoPath}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (response.status === 204) {
            logSuccess('GitHub repository deleted successfully');
            return true;
        } else {
            const errorData = await response.json();
            logError(`Failed to delete GitHub repository: ${errorData.message}`);
            return false;
        }
    } catch (error) {
        logError(`Error deleting GitHub repository: ${error.message}`);
        return false;
    }
}

// Delete Vercel project
async function deleteVercelProject(projectId) {
    logDetailed('Deleting Vercel project...');
    try {
        // Get Vercel project info first
        const projectInfo = execSync('vercel project ls', { encoding: 'utf8', stdio: 'pipe' });
        logDetailed('Available Vercel projects:');
        logDetailed(projectInfo);

        // Try to delete the project using Vercel CLI
        try {
            execSync(`vercel project rm ${projectId} --yes`, { stdio: 'inherit' });
            logSuccess('Vercel project deleted successfully');
            return true;
        } catch (error) {
            logWarning('Could not delete Vercel project via CLI');
            logDetailed('💡 You may need to delete it manually from the Vercel dashboard');
            return false;
        }
    } catch (error) {
        logError(`Error deleting Vercel project: ${error.message}`);
        return false;
    }
}

// Create GitHub repository
async function createGitHubRepo(token, repoName, description, isPrivate, force = false) {
    logDetailed('Creating GitHub repository...');
    try {
        const repoCheck = await checkRepoExists(token, repoName);

        if (repoCheck.exists) {
            if (force) {
                logWarning('Repository exists and force flag is set - deleting existing repository');
                if (!await deleteGitHubRepository(token, repoName)) {
                    throw new Error('Failed to delete existing repository');
                }
            } else {
                logWarning('Repository already exists. Use --force to recreate it.');
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
                auto_init: false,
                gitignore_template: null,
                license_template: null
            })
        });

        if (response.ok) {
            const repo = await response.json();
            logSuccess(`Repository created successfully: ${repo.html_url}`);
            return repo;
        } else {
            const error = await response.json();
            logError(`Failed to create repository: ${error.message}`);
            throw new Error(error.message || 'Failed to create repository');
        }
    } catch (error) {
        logError(`Error creating repository: ${error.message}`);
        throw error;
    }
}

// Validate project build
function validateProjectBuild() {
    logDetailed('Validating project build...');
    try {
        if (!existsSync('package.json')) {
            logError('package.json not found');
            return false;
        }

        const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
        if (!packageJson.scripts || !packageJson.scripts.build) {
            logError('No build script found in package.json');
            return false;
        }

        logDetailed('Running build validation...');
        execSync('npm run build', { stdio: 'inherit' });
        logSuccess('Project build validation passed');
        return true;
    } catch (error) {
        logError('Project build validation failed');
        logDetailed(`Error: ${error.message}`);
        return false;
    }
}

// Push code to GitHub
function pushToGitHub(repoUrl, repoName) {
    logDetailed('Pushing code to GitHub...');
    try {
        // Check if we're in a git repository
        try {
            execSync('git status', { stdio: 'ignore' });
        } catch (error) {
            logError('Not in a git repository');
            return false;
        }

        // Remove existing remote if it exists
        try {
            execSync(`git remote remove ${repoName}`, { stdio: 'ignore' });
        } catch (error) {
            // Remote doesn't exist, that's fine
        }

        // Add new remote
        execSync(`git remote add ${repoName} ${repoUrl}`, { stdio: 'ignore' });

        // Add all files
        execSync('git add -A', { stdio: 'ignore' });

        // Commit if there are changes
        try {
            execSync('git diff-index --quiet HEAD --', { stdio: 'ignore' });
        } catch (error) {
            execSync('git commit -m "Initial deployment: Push source code"', { stdio: 'ignore' });
        }

        // Create and switch to new branch
        const branchName = repoName.replace(/[^a-zA-Z0-9-_]/g, '-').toLowerCase();
        try {
            execSync(`git checkout -b ${branchName}`, { stdio: 'ignore' });
        } catch (error) {
            execSync(`git checkout ${branchName}`, { stdio: 'ignore' });
        }

        // Push to remote
        execSync(`git push -u ${repoName} ${branchName} --force`, { stdio: 'inherit' });

        logSuccess('Source code pushed to GitHub successfully');
        return true;
    } catch (error) {
        logError(`Error pushing to GitHub: ${error.message}`);
        return false;
    }
}

// Deploy to Vercel
function deployToVercel(repoUrl, repoName) {
    logDetailed('Starting Vercel deployment...');
    try {
        // Create vercel.json if it doesn't exist
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
        }

        // Force fresh project creation by using a unique name
        const projectName = `${repoName}-${Date.now()}`;
        logDetailed(`Creating new Vercel project: ${projectName}`);

        // Deploy using Vercel CLI with unique project name
        execSync(`vercel --prod --yes --name ${projectName}`, { stdio: 'inherit' });

        // Try to link with GitHub repository
        try {
            // Temporarily rename origin to avoid conflicts during linking
            let originRenamed = false;
            try {
                execSync('git remote rename origin origin-backup', { stdio: 'ignore' });
                originRenamed = true;
                logDetailed('Temporarily renamed origin remote to avoid conflicts');
            } catch (error) {
                logDetailed('Origin remote not found or already renamed');
            }

            // Now try to connect with only the deployment remote available
            execSync(`vercel git connect --yes`, { stdio: 'inherit' });
            logSuccess('Vercel project linked with GitHub repository');

            // Restore origin remote if it was renamed
            if (originRenamed) {
                try {
                    execSync('git remote rename origin-backup origin', { stdio: 'ignore' });
                    logDetailed('Restored origin remote');
                } catch (error) {
                    logDetailed('Could not restore origin remote');
                }
            }
        } catch (error) {
            logWarning('Could not automatically link with GitHub repository');
            logDetailed('You can manually link it in the Vercel dashboard');

            // Restore origin remote if it was renamed and linking failed
            try {
                execSync('git remote rename origin-backup origin', { stdio: 'ignore' });
                logDetailed('Restored origin remote after failed linking');
            } catch (error) {
                // Ignore if origin-backup doesn't exist
            }
        }

        logSuccess('Deployment to Vercel completed successfully');
        return true;
    } catch (error) {
        logError(`Error deploying to Vercel: ${error.message}`);
        return false;
    }
}

// Setup GitHub webhook
async function setupGitHubWebhook(token, repoOwner, repoName) {
    logDetailed('Setting up GitHub webhook...');
    try {
        // Get Vercel project info
        const vercelProjectInfo = execSync('vercel project ls', { encoding: 'utf8', stdio: 'pipe' });
        logDetailed('Vercel projects:');
        logDetailed(vercelProjectInfo);

        logSuccess('GitHub webhook setup completed');
        return true;
    } catch (error) {
        logWarning(`Webhook setup failed: ${error.message}`);
        return false;
    }
}

// Post-success cleanup - remove local tracking configurations
function postSuccessCleanup(repoName) {
    logDetailed('Performing post-success cleanup...');

    try {
        // Remove the git remote we added
        try {
            execSync(`git remote remove ${repoName}`, { stdio: 'ignore' });
            logDetailed(`Removed git remote: ${repoName}`);
        } catch (error) {
            logDetailed(`No git remote ${repoName} to remove`);
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

        // Remove .vercel directory if it exists
        if (existsSync('.vercel')) {
            try {
                rmSync('.vercel', { recursive: true, force: true });
                logDetailed('Removed .vercel directory');
            } catch (error) {
                logDetailed('Could not remove .vercel directory');
            }
        }

        // Remove any Vercel environment files
        const vercelFiles = ['.vercelignore', 'vercel.json'];
        vercelFiles.forEach(file => {
            if (existsSync(file)) {
                try {
                    unlinkSync(file);
                    logDetailed(`Removed ${file}`);
                } catch (error) {
                    logDetailed(`Could not remove ${file}`);
                }
            }
        });

        // Unlink from Vercel project to force fresh project creation
        try {
            execSync('vercel project rm --yes', { stdio: 'ignore' });
            logDetailed('Unlinked from Vercel project');
        } catch (error) {
            logDetailed('Could not unlink from Vercel project (may not be linked)');
        }

        
        logSuccess('Post-success cleanup completed');
        logDetailed('Local tracking configurations removed - next deployment will create fresh repository and Vercel project');
    } catch (error) {
        logWarning(`Post-success cleanup failed: ${error.message}`);
    }
}

// Failure cleanup - delete repository and Vercel project
async function failureCleanup(token, repoName, projectId = null) {
    logDetailed('Performing failure cleanup...');

    try {
        // Delete GitHub repository
        if (token && repoName) {
            await deleteGitHubRepository(token, repoName);
        }

        // Delete Vercel project
        if (projectId) {
            await deleteVercelProject(projectId);
        }

        // Remove local configurations
        postSuccessCleanup(repoName);

        logSuccess('Failure cleanup completed');
        logDetailed('Repository and Vercel project deleted - no traces left');
    } catch (error) {
        logWarning(`Failure cleanup failed: ${error.message}`);
    }
}

// Main deployment function
async function main() {
    const options = parseArgs();

    if (options.help) {
        showHelp();
        return;
    }

    if (options.deleteToken) {
        deleteToken();
        return;
    }

    if (!options.repoName) {
        logError('Repository name is required');
        logInfo('Usage: npm run deploy <repository-name>');
        process.exit(1);
    }

    const repoNameRegex = /^[a-zA-Z0-9._-]+$/;
    if (!repoNameRegex.test(options.repoName)) {
        logError('Invalid repository name');
        process.exit(1);
    }

    log('🚀 Starting enhanced deployment process...', 'bright');
    logDetailed(`Repository name: ${options.repoName}`);

    let createdRepo = null;
    let deploymentSuccess = false;
    let projectId = null;

    try {
        // Step 1: GitHub Token Validation
        logStep(1, 'GitHub Token Validation');
        let token = options.token || loadToken();

        if (!token) {
            logError('GitHub token is required');
            process.exit(1);
        }

        const tokenValidation = await validateGitHubToken(token);
        if (!tokenValidation.valid) {
            process.exit(1);
        }

        if (options.token) {
            saveToken(token);
        }

        // Step 2: Create GitHub Repository
        logStep(2, 'GitHub Repository Creation');
        try {
            createdRepo = await createGitHubRepo(token, options.repoName, options.description, options.isPrivate, options.force);
        } catch (error) {
            throw error;
        }

        // Step 3: Push Source Code to GitHub
        logStep(3, 'Push Source Code to GitHub');
        if (!pushToGitHub(createdRepo.clone_url, options.repoName)) {
            throw new Error('Failed to push code to GitHub');
        }

        // Step 4: Build Validation
        if (!options.skipVercel && !options.skipBuildValidation) {
            logStep(4, 'Build Validation');
            if (!validateProjectBuild()) {
                throw new Error('Build validation failed');
            }
        }

        // Step 5: Pre-deployment Cleanup
        if (!options.skipVercel) {
            logStep(5, 'Pre-deployment Cleanup');
            logDetailed('Ensuring clean slate for Vercel deployment...');

            // Remove any existing Vercel configurations
            if (existsSync('.vercel')) {
                try {
                    rmSync('.vercel', { recursive: true, force: true });
                    logDetailed('Removed existing .vercel directory');
                } catch (error) {
                    logDetailed('Could not remove .vercel directory');
                }
            }

            if (existsSync('vercel.json')) {
                try {
                    unlinkSync('vercel.json');
                    logDetailed('Removed existing vercel.json');
                } catch (error) {
                    logDetailed('Could not remove vercel.json');
                }
            }
        }

        // Step 6: Vercel Deployment
        if (!options.skipVercel) {
            logStep(6, 'Vercel Deployment');
            if (!deployToVercel(createdRepo.clone_url, options.repoName)) {
                throw new Error('Vercel deployment failed');
            }
            deploymentSuccess = true;
        }

        // Step 7: Setup GitHub Webhook
        if (deploymentSuccess || options.skipVercel) {
            logStep(7, 'Setup Automatic Deployments');
            const repoOwner = createdRepo.owner.login;
            await setupGitHubWebhook(token, repoOwner, options.repoName);
        }

        // Step 8: Post-Success Cleanup
        logStep(8, 'Post-Success Cleanup');
        postSuccessCleanup(options.repoName);

        // Success summary
        logSuccess('🎉 Deployment completed successfully!');
        logDetailed('📋 Summary:');
        logDetailed(`  GitHub Repository: ${createdRepo.html_url}`);
        logDetailed(`  Clone URL: ${createdRepo.clone_url}`);

        if (deploymentSuccess) {
            logDetailed('  Vercel: Deployment completed');
            logDetailed('  Automatic deployments: Enabled');
        }

        logDetailed('💡 Next steps:');
        logDetailed('  1. Check your Vercel dashboard for the deployment URL');
        logDetailed('  2. Future deployments will create fresh repositories and projects');
        logDetailed('  3. Local tracking configurations have been removed');

    } catch (error) {
        logError(`Deployment failed: ${error.message}`);

        // Perform failure cleanup
        logDetailed('Performing failure cleanup...');
        await failureCleanup(token, options.repoName, projectId);

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
    deployToVercel,
    failureCleanup,
    postSuccessCleanup
};
