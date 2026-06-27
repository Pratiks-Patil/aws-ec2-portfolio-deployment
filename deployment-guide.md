# 🚀 Deployment Guide

This document provides a step-by-step guide to deploy a static portfolio website on an AWS EC2 Ubuntu instance using Nginx.

---

# Prerequisites

- AWS Account
- IAM User with EC2 permissions
- EC2 Key Pair (.pem)
- Git (optional)
- SSH Client (PowerShell/OpenSSH)
- Portfolio website files

---

# Step 1: Launch EC2 Instance

- Launch an Ubuntu 26.04 LTS EC2 instance
- Instance Type: t3.micro
- Create or select an existing Key Pair
- Configure the Security Group

Allow:

| Port | Protocol | Purpose |
|------|----------|---------|
| 22 | TCP | SSH |
| 80 | TCP | HTTP |

---

# Step 2: Connect to EC2

```bash
ssh -i portfolio-key.pem ubuntu@<PUBLIC-IP>
```

---

# Step 3: Update Packages

```bash
sudo apt update
```

---

# Step 4: Install Nginx

```bash
sudo apt install nginx -y
```

Verify installation:

```bash
sudo systemctl status nginx
```

Enable on boot:

```bash
sudo systemctl enable nginx
```

---

# Step 5: Backup Default Website

```bash
cd /var/www/html

sudo mv index.nginx-debian.html index.nginx-debian.html.bak
```

---

# Step 6: Transfer Website Files

From the local machine:

```bash
scp -i portfolio-key.pem index.html style.css script.js ubuntu@<PUBLIC-IP>:/home/ubuntu/
```

Transfer assets folder:

```bash
scp -i portfolio-key.pem -r assets ubuntu@<PUBLIC-IP>:/home/ubuntu/
```

---

# Step 7: Copy Files to Nginx Directory

```bash
sudo cp index.html /var/www/html/

sudo cp style.css /var/www/html/

sudo cp script.js /var/www/html/

sudo cp -r assets /var/www/html/
```

---

# Step 8: Verify Deployment

Open your browser:

```
http://<PUBLIC-IP>
```

Your portfolio website should now be live.

---

# Deployment Workflow

```
Launch EC2
      ↓
Configure Security Group
      ↓
SSH Connection
      ↓
Install Nginx
      ↓
Transfer Website Files
      ↓
Deploy Website
      ↓
Verify Deployment
```

---

# Result

Successfully deployed a responsive portfolio website on an Ubuntu EC2 instance using Nginx.
