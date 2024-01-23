
**Git Basics:**

1. **Initialize a Repository:**
   - `git init`: Initializes a new Git repository in the current directory.

2. **Clone a Repository:**
   - `git clone <repository_url>`: Copies a remote repository to your local machine.

3. **Stage Changes:**
   - `git add <file>`: Adds changes in a file to the staging area.
   - `git add .`: Adds all changes to the staging area.

4. **Commit Changes:**
   - `git commit -m "Commit message"`: Commits the staged changes with a descriptive message.

5. **Branching:**
   - `git branch`: Lists all local branches.
   - `git branch <branch_name>`: Creates a new branch.
   - `git checkout <branch_name>`: Switches to a specific branch.
   - `git merge <branch_name>`: Merges changes from one branch into the current branch.

6. **Remote Repositories:**
   - `git remote -v`: Lists all remote repositories.
   - `git push <remote_name> <branch_name>`: Pushes changes to a remote repository.
   - `git pull <remote_name> <branch_name>`: Fetches changes from a remote repository and merges them into the current branch.

7. **Undoing Changes:**
   - `git reset <file>`: Unstages changes in a file.
   - `git reset --hard`: Discards all changes and resets to the last commit.

**GitHub Essentials:**

1. **Forking:**
   - Click on "Fork" on GitHub to create a personal copy of someone else's project.

2. **Pull Requests:**
   - Open a pull request to propose changes from your fork to the original repository.

3. **Issues:**
   - Create issues to track tasks, enhancements, bugs, etc.

4. **Collaboration:**
   - Add collaborators to your repository for collaborative development.

5. **GitHub Pages:**
   - Host static websites directly from your GitHub repository using GitHub Pages.

6. **.gitignore:**
   - Create a `.gitignore` file to specify files or directories that Git should ignore.

7. **README.md:**
   - Create a `README.md` file with information about your project.

8. **GitHub Actions:**
   - Automate workflows by using GitHub Actions for tasks like testing, building, and deploying.


# Amazon Web Services - EC2

## Overview
- Renting a web server from a cloud provider like Amazon Web Services (AWS) is preferable to hosting on a personal device due to availability, bandwidth, and security concerns.
- AWS provides a cost-effective solution with data centers in various locations globally.

## Creating an AWS Server Instance
1. **Login to AWS Console**
   - Open the AWS console in your browser and log in.

2. **Navigate to EC2 Service**
   - Go to the EC2 service.

3. **Change Region**
   - Change the region to US East (N. Virginia) - us-east-1 for optimal availability.

4. **Launch Instance**
   - Select "Launch instance" to create a new server.

5. **Instance Configuration**
   - Give the instance a meaningful name.
   - Use the provided class AMI (ami-0b009f6c56cdd83ed).
   - Choose instance type (e.g., t3.nano, t3.micro).

6. **Key Pair**
   - Create or use an existing key pair for SSH access.
   - Save the key pair securely.

7. **Network Settings**
   - Enable auto-assign public IP address.
   - Configure firewall (security group) to allow SSH, HTTP, and HTTPS traffic.

8. **Advanced Details (Optional)**
   - For T3 class servers, consider changing Credit specification to Unlimited.

9. **Launch Instance**
   - Review settings and launch the instance.

10. **Accessing the Web Server**
   - Once running, copy the public IP address.
   - Open a browser and paste the IP with the prefix http://.
   - Confirm the server's default web page is visible.

## SSH into Your Server
- Use SSH to remote shell into the server.
   ```bash
   ssh -i [key pair file] ubuntu@[ip address]
   ```

## Keeping the Same Public IP Address
- Stopping the server changes its public IP address.
- Options to maintain the same IP:
   1. Never stop the server.
   2. Assign an Elastic IP address (recommended).

## Assigning Elastic IP
1. **Open AWS Console**
   - Navigate to EC2 service.

2. **Elastic IPs**
   - In the left menu, select Network & Security > Elastic IPs.

3. **Allocate Elastic IP**
   - Press "Allocate Elastic IP address."

4. **Associate Elastic IP**
   - Select the allocated address and press "Actions."
   - Choose "Associate Elastic IP address."
   - Select your server instance and press "Associate."

## Server Sizing Recommendations
- Use t3.nano instance for course requirements.
- Upgrade if server performance is inadequate.
- Consider stopping the server when not in use to save costs.
