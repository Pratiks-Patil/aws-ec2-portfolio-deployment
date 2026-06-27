<img width="1000" height="400" alt="ChatGPT Image Jun 27, 2026, 01_13_47 PM" src="https://github.com/user-attachments/assets/513759cf-7370-400b-81a2-4965b262ad4c" />


<p align="center">

![AWS](https://img.shields.io/badge/AWS-EC2-orange?style=for-the-badge&logo=amazonaws)
![Ubuntu](https://img.shields.io/badge/Ubuntu-26.04-E95420?style=for-the-badge&logo=ubuntu)
![Nginx](https://img.shields.io/badge/Nginx-Web%20Server-009639?style=for-the-badge&logo=nginx)
![Linux](https://img.shields.io/badge/Linux-Ubuntu-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</p>

---

## 📌 Project Overview

This project demonstrates the deployment of a responsive personal portfolio website on an **AWS EC2 Ubuntu instance** using **Nginx** as the web server.

The project covers the complete deployment lifecycle—from provisioning a cloud server to configuring Linux, installing Nginx, securely connecting using SSH, and hosting a live static website.

This project was built as part of my AWS Cloud learning journey with a focus on practical, production-oriented deployment.

---

## 🎯 Objectives

- Deploy a static website on AWS EC2
- Learn Linux server administration
- Configure Nginx as a web server
- Secure server access using SSH key pairs
- Understand AWS networking and Security Groups
- Practice real-world cloud deployment

---

# 🏗 Architecture
<p align="center">
<img width="1536" height="1024" alt="ChatGPT Image Jun 27, 2026, 01_09_47 PM" src="https://github.com/user-attachments/assets/5a76509b-184d-45c1-a863-44053ae8e876" />
</p>

---

# ☁ AWS Services Used


| 🛠️ Service | 🎯 Purpose |
|------------|------------|
| 👤 **IAM** | Secure user authentication and access management |
| 🖥️ **Amazon EC2** | Virtual Ubuntu Linux server hosting the website |
| 🛡️ **Security Groups** | Virtual firewall controlling inbound and outbound traffic |
| 💾 **Amazon EBS** | Persistent block storage for the EC2 instance |
| 🔐 **SSH** | Secure remote administration of the Linux server |
| 🌐 **Internet Gateway** | Enables communication between the VPC and the Internet |
| 📦 **Nginx** | Web server for serving the static portfolio website |

---

# 💻 Technologies Used

- AWS EC2
- Ubuntu 26.04 LTS
- Nginx
- Linux
- HTML5
- CSS3
- JavaScript
- Git
- GitHub

---

# 📂 Project Structure

```
aws-ec2-portfolio-deployment
│
├── README.md
├── deployment-guide.md
├── linux-commands.md
│
├── architecture
│   └── architecture.png
│
├── screenshots
│   ├── ssh-connected.png
│   ├── nginx-default-page.png
│   └── live-portfolio.png
│
└── website
    ├── index.html
    ├── style.css
    ├── script.js
    └── assets
```

---

# 🚀 Deployment Workflow

- Launch EC2 Ubuntu Instance
- Configure Security Group
- Connect using SSH
- Install Nginx
- Backup default Nginx page
- Transfer portfolio files
- Deploy website
- Verify deployment in browser

---

# 📸 Project Screenshots

## Creating an instance on EC2
<img width="1917" height="981" alt="01-aws-console" src="https://github.com/user-attachments/assets/78532f78-c3b7-4243-836f-39f2cf85b160" />


---

## SSH Connection

<img width="1271" height="862" alt="SSH_2" src="https://github.com/user-attachments/assets/193020d6-128c-42ff-a09b-74b0b885ecaa" />


---

## Install Nginx on EC2 Ubuntu system

<img width="1917" height="997" alt="SSH_4" src="https://github.com/user-attachments/assets/4aa0e240-d9cb-4dd4-a604-7ef0319ac51b" />
<img width="1180" height="237" alt="SSH_5" src="https://github.com/user-attachments/assets/9da47624-3082-48a1-8791-88e261aa90cb" />


---

## Transfering Files from Local Machine to EC2 Ubuntu system

<img width="1906" height="1017" alt="SSH_3" src="https://github.com/user-attachments/assets/658940b0-92a3-4124-b479-d97aff03a569" />
<img width="882" height="572" alt="SSH_6" src="https://github.com/user-attachments/assets/58eb030b-5f47-4100-90af-85a6dbd59dc3" />


---

## Live Portfolio Website

<img width="1882" height="997" alt="Result" src="https://github.com/user-attachments/assets/2e2ee60c-bb69-4672-9c3b-e7e5237b69cd" />


---

# 🔧 Challenges Faced

During the deployment, the following real-world issues were encountered and resolved:

- SSH connection timeout
- Public IP address changed after restarting the EC2 instance
- Windows `.pem` private key permission issue
- Replacing the default Nginx landing page
- Securely transferring website files using SCP

---

# 📚 Key Learnings

- AWS IAM best practices
- EC2 instance provisioning
- Security Group configuration
- Linux server management
- SSH authentication using key pairs
- Installing and managing services with systemctl
- Hosting static websites using Nginx
- Secure file transfer using SCP

---

# 🚀 Future Improvements

- Configure a custom domain using Route 53
- Enable HTTPS using AWS Certificate Manager
- Serve content through CloudFront CDN
- Automate deployment with GitHub Actions
- Containerize the application using Docker
- Deploy using Infrastructure as Code (Terraform)

---

# 👨‍💻 Author

**Pratik Patil**

Aspiring Cloud & DevOps Engineer

GitHub:
https://github.com/Pratiks-Patil

LinkedIn:
https://www.linkedin.com/in/pratikpatil03/

---

⭐ If you found this project useful, consider giving it a star!
