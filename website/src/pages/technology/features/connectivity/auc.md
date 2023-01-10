---
slug: auc
title: AuC using HSM
tags: [4G, 5G]
techFeaturePage: true
---

# AuC using HSM

Dedicated Cloud Authentication Center (AuC) engineered to encrypt and decrypt SIM Secrets securely using a HSM solution.

**wgtwo** CloudAuC is a cloud-based Authentication Center built on top of a Hardware Security Module (HSM) that enables us to leverage cloud computing to securely generate and use encryption keys within our telecom core network. CloudAuC uses auto-generated encryption keys backed by validated HSMs with FIPS 140-2 Level 3 compliance. Additionally, **wgtwo** CloudAuC is integrated with **wgtwo** Core Network, providing the necessary security, scalability, and availability controls to meet our regulatory and compliance needs.

### Benefits

- Manage encryption for HLR / HSS / AUSF  
  **wgtwo** CloudAuC presents a single control point for managing keys. Defining software-based policies we are able to easily create, rotate, import, and delete encryption keys via tamper-resistance secure APIs.
- Secure and highly-available by design  
  **wgtwo** CloudAuC automatically load balances requests and securely manages encryption keys across replica sets across multiple availability zones to prevent data failure.
- Built-in auditing  
  **wgtwo** CloudAuC records all API requests, including key management, usage, and access to encryption keys. External logging helps us manage risk, meet compliance requirements, perform event analysis, and conduct forensic.

### Compliance

The security and quality controls in **wgtwo** CloudAuC components have been certified under multiple compliance schemes such as SOC 2 and FIPS 140-2 Level 3.

### Additional Features

- Software-based dedicated HSM
- Leverage compliance standards
- Master key backed by a dedicated hardware HSM with FIPS 140-2 certification
- Master key auto rotation
- Scalable and secure cloud
- Automatic failover and disaster recovery
- Network policies to limit access
- External audit logging and alerting
