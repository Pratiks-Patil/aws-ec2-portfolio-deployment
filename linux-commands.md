# 🐧 Linux Commands Used

This document contains the Linux commands used throughout the deployment process.

---

# System Information

Current directory

```bash
pwd
```

List files

```bash
ls
```

Detailed file listing

```bash
ls -la
```

Current user

```bash
whoami
```

Operating System

```bash
cat /etc/os-release
```

Kernel Information

```bash
uname -a
```

Disk Usage

```bash
df -h
```

Memory Usage

```bash
free -h
```

---

# Package Management

Update package index

```bash
sudo apt update
```

Install Nginx

```bash
sudo apt install nginx -y
```

---

# Nginx Management

Check service status

```bash
sudo systemctl status nginx
```

Enable Nginx

```bash
sudo systemctl enable nginx
```

Restart Nginx

```bash
sudo systemctl restart nginx
```

Stop Nginx

```bash
sudo systemctl stop nginx
```

---

# File Operations

Navigate to web directory

```bash
cd /var/www/html
```

Backup default page

```bash
sudo mv index.nginx-debian.html index.nginx-debian.html.bak
```

Copy files

```bash
sudo cp index.html /var/www/html/

sudo cp style.css /var/www/html/

sudo cp script.js /var/www/html/

sudo cp -r assets /var/www/html/
```

---

# Secure Copy (SCP)

Transfer website files

```bash
scp -i portfolio-key.pem index.html style.css script.js ubuntu@<PUBLIC-IP>:/home/ubuntu/
```

Transfer assets

```bash
scp -i portfolio-key.pem -r assets ubuntu@<PUBLIC-IP>:/home/ubuntu/
```

---

# SSH Connection

```bash
ssh -i portfolio-key.pem ubuntu@<PUBLIC-IP>
```

---

# Summary

These commands cover:

- Linux system navigation
- Package installation
- Nginx service management
- File management
- Secure file transfer
- Remote server administration
