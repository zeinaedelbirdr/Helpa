# 🧠 Helpa – Experimental Image Processing Engine on AWS EC2

## 🧩 Project Context

Helpa is an academic and exploratory image processing platform developed to evaluate the feasibility and performance of running transformation workloads on AWS EC2 infrastructure. Instead of going serverless, this research-focused approach leverages traditional compute power, giving us control over scaling strategies, resource allocation, and optimization logic.

Helpa simulates a real-world scenario where users upload images, and the backend processes them on-demand—resizing, reformatting, and optimizing for faster delivery across diverse devices.

---

## ⚙️ System Blueprint

**Architecture Type:** Compute-Centric (EC2-based)  
**Use Case:** Dynamic Image Transformation and Optimization  
**Deployment Target:** AWS Cloud Platform

### 🔧 Core AWS Components

| Service              | Role in Architecture                                              |
|----------------------|-------------------------------------------------------------------|
| EC2 Instances         | Hosts the image processing engine using Sharp and Node.js        |
| ALB (Load Balancer)   | Manages traffic and balances load across running EC2 instances   |
| Auto Scaling Group    | Scales compute capacity up/down in response to usage patterns    |
| S3 Buckets            | Stores raw image uploads and finalized output images             |
| IAM Roles             | Grants secure, scoped permissions to EC2 and other services      |
| CloudWatch + SNS      | Tracks metrics and alerts based on defined operational triggers  |
| (Optional) CloudFront | Accelerates global delivery of processed media assets            |

---

## 🔬 Key Objectives

- Investigate how well EC2 handles high-load image processing tasks compared to serverless functions.
- Analyze horizontal scaling behavior under fluctuating image request traffic.
- Explore performance and latency trends when integrated with a CDN like CloudFront.
- Study image format conversions, size reductions, and caching strategies.

---

## 🚀 Application Features

- Upload and queue images for transformation (resize, reformat, compress).
- Serve processed images via a load-balanced HTTP endpoint.
- Dynamic adjustment of resources using Auto Scaling thresholds.
- Optional caching layer through CloudFront for CDN-style access.
- Monitoring stack using CloudWatch dashboards and custom alarms.

---

## 📘 Why EC2 for Image Processing?

While many modern solutions lean on Lambda and serverless stacks, Helpa flips the question:

> _"Can a compute-based architecture still be a viable choice for media-heavy, on-demand workloads?"_

This project puts EC2 to the test—benchmarking not just speed and cost, but flexibility in handling custom logic, libraries, and system-level controls.

---

## 🎓 Research Deliverables

- Comparative analysis: EC2 vs Serverless for image workloads
- Performance logs across instance types and Auto Scaling configurations
- Cost estimations based on variable usage scenarios
- Sample datasets for image input/output tracking

---

## 📁 Directory Snapshot

