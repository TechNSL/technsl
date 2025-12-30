---
title: AWS Storage Services
---

# AWS Storage Services

AWS provides a wide range of storage services designed to meet different needs for durability, availability, performance, and cost. Whether you need object storage, block storage, file storage, or archival solutions, AWS has options to fit your requirements.

## Key Storage Services

- **Amazon S3 (Simple Storage Service)**: Object storage for any amount of data.
- **Amazon EBS (Elastic Block Store)**: Persistent block storage for EC2 instances.
- **Amazon EFS (Elastic File System)**: Scalable file storage for EC2 instances.
- **Amazon Glacier**: Low-cost archival storage.
- **AWS Storage Gateway**: Hybrid cloud storage solutions.
- **Amazon FSx**: Fully managed file servers (Windows, Lustre, NetApp ONTAP).

## Storage Types

- **Object Storage**: S3, Glacier - Store and retrieve data as objects
- **Block Storage**: EBS - Like traditional hard drives, attached to EC2
- **File Storage**: EFS, FSx - Shared file systems accessible by multiple instances
- **Hybrid Storage**: Storage Gateway - Connect on-premises storage to AWS

## Key Considerations

- **Durability**: How reliable the storage is (e.g., S3 offers 99.999999999% durability)
- **Availability**: How accessible the data is
- **Performance**: Speed of data access and throughput
- **Cost**: Pricing models vary by service and usage patterns

Choose the right storage service based on your application's requirements for access patterns, performance, and cost.