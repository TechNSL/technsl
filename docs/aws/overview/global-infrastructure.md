---
sidebar_position: 1
sidebar_label: Global Infrastructure
title: Global Infrastructure
---

# AWS Global Infrastructure

- AWS Regions
- AWS Availability Zones (AZ)
- AWS Local Zones (LZ)
- AWS Edge Locations (CloudFront POPs (Points of Presence))
- AWS Regional Edge Cache Locations
- AWS Wavelength Zones
- AWS Outposts (for Hybrid Cloud)


AWS Region is a physical location around the world and its a cluster of data centers.
Each region has minimum of 3 and maximum of 6 Azs
Region names are like us-east-1, eu-west-3, ap-southeast-2

Each AZ is one or more discrete datacenters with redundent power
Az names are like ap-southeast-2a, ap-southeast-2b, ap-southeast-2c for Syndey region
Its a group of logical data centers

## How to choose AWS Region ?

- Complaince with data governance and legal
- Proximity/Latency 
- Available Services within a Region
- Pricing - It varies region to region


## What is the SCOPE of AWS Services ?

AWS services are either Global, Regional, or Availability Zone specific and cannot be accessed outside.

- Some AWS services are Global-scoped (IAM, Route53, CloudFront, SES)
- Most AWS services are Region-scoped (EC2, Elastic Bean Stack)
- Some AWS services are AZ-scoped