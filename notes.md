
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

# DNS and Records

## Domain Name System (DNS)
DNS is a decentralized naming system that translates human-readable domain names into IP addresses, allowing users to access resources on the internet. It consists of a hierarchical structure with different components.

### Components of DNS:

1. **Domain Name:** The human-readable name used to identify a resource on the internet.
2. **Top-Level Domain (TLD):** The highest level in the DNS hierarchy, such as .com, .org, .net.
3. **Second-Level Domain (SLD):** Directly beneath the TLD, it is the main part of the domain name.
4. **Subdomain:** A subdivision of a domain, used to organize and navigate within a website.

## DNS Records

DNS records (aka zone files) are instructions that live in authoritative DNS servers and provide information about a domain including what IP address is associated with that domain and how to handle requests for that domain. These records consist of a series of text files written in what is known as DNS syntax. DNS syntax is just a string of characters used as commands that tell the DNS server what to do. All DNS records also have a ‘TTL’, which stands for time-to-live, and indicates how often a DNS server will refresh that record.

You can think of a set of DNS records like a business listing on Yelp. That listing will give you a bunch of useful information about a business such as their location, hours, services offered, etc. All domains are required to have at least a few essential DNS records for a user to be able to access their website using a domain name, and there are several optional records that serve additional purposes.

### Common DNS Record Types:

1. **A (Address) Record:**
   - Maps a domain or subdomain to an IPv4 address.

   Example:
   ```markdown
   example.com.      IN   A       192.168.1.1
   ```

2. **AAAA (IPv6 Address) Record:**
   - Maps a domain or subdomain to an IPv6 address.

   Example:
   ```markdown
   example.com.      IN   AAAA    2001:0db8:85a3:0000:0000:8a2e:0370:7334
   ```

3. **CNAME (Canonical Name) Record:**
   - Creates an alias for one domain to another.

   Example:
   ```markdown
   www           IN    CNAME    example.com.
   ```

4. **MX (Mail Exchange) Record:**
   - Specifies mail servers responsible for receiving emails on behalf of the domain.

   Example:
   ```markdown
   example.com.      IN   MX   10   mail.example.com.
   ```

5. **TXT (Text) Record:**
   - Stores text information. Often used for verification and authentication.

   Example:
   ```markdown
   example.com.      IN   TXT   "v=spf1 mx -all"
   ```

6. **NS (Name Server) Record:**
   - Specifies authoritative DNS servers for the domain.

   Example:
   ```markdown
   example.com.      IN   NS   ns1.exampledns.com.
   ```

7. **PTR (Pointer) Record:**
   - Used for reverse DNS lookups to map an IP address to a domain.

   Example:
   ```markdown
   1.1.168.192.in-addr.arpa.   IN   PTR   example.com.
   ```

   # HTTPS, TLS, and Web Certificates

## Non-Secure Website

- In the early days of the web, many websites used HTTP (non-secure hypertext transport protocol) due to difficulties, performance issues, and expenses associated with securing connections.
- Web 1.0 primarily involved document servers, and security wasn't a priority. However, with the shift to Web 2.0 and interactive web applications, securing connections became crucial to protect user information.

## HTTPS and TLS

- **HTTPS (Secure Hypertext Transport Protocol):** The secure version of HTTP that establishes a secure connection before data exchange.
- **TLS (Transport Layer Security):** Protocol used in HTTPS for encryption. TLS negotiates a shared secret to encrypt data, replacing the less secure SSL protocol.
- The negotiation involves multiple steps, and you can observe it using tools like `curl -v`.

```bash
➜ curl -v -s https://byu.edu > /dev/null
# TLS handshake and certificate details are displayed
```

## Web Certificates

- **Web Certificates:** Generated by a trusted third party using public/private key encryption.
- Certificate issuers verify domain ownership. Certificates include information like domain name, issuer details, and validity dates.
- Let's Encrypt, a non-profit, provides free certificates, breaking the cost barrier and making web certificates accessible to everyone.

## Let's Encrypt Certificate Generation

- Let's Encrypt issues certificates dynamically using the ACME protocol.
- Caddy, a web service, uses Let's Encrypt to generate certificates automatically.
- ACME protocol verifies domain ownership by having the requester respond with a specific digitally signed response for a temporary URL.

## Enabling HTTPS

- Modern browsers expect secure connections (HTTPS), and HTTP v3 only supports secure connections.
- Obtaining and renewing certificates involves enabling the ACME protocol on your web server and communicating with Let's Encrypt.
- Many programming languages support ACME functionality through libraries.

## Caddy Configuration

- Caddy, used as a gateway, has built-in ACME support.
- Manually configure Caddy by editing the Caddyfile:

```bash
➜ cd ~
➜ vi Caddyfile
# Modify rules for handling HTTP and routing traffic for web applications
# Save and exit VI (:wq)
```

- Restart Caddy to apply changes:

```bash
sudo service caddy restart
```

- Now, accessing your domain via a browser will display a lock icon, indicating a secure connection with an automatically issued Let's Encrypt certificate.
