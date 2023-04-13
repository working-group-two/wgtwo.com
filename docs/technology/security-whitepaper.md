---
title: Security Whitepaper
---

Security is at the forefront of how **WG2** builds its mobile core network. The goal of this document is to communicate **WG2**’s approach to security across various domains including application, infrastructure, telecommunication, and operational security.

## Data Security and Encryption
Protecting customers’ data from unauthorized access is **WG2**’s top priority. Several countermeasures exist to identify, contain, and prevent data leakage. Leveraging security as part of the design, encryption, access controls, and integrity controls, **WG2** can protect customer data.

### Encryption
**WG2** leverages encryption at every level of our mobile core network to ensure the confidentiality and integrity of customer data. To ensure **WG2** always protects  customer data and remains compliant with industry standards, we have implemented software-defined policies that automatically monitor and prevent misconfigurations. For example, it is impossible to deploy a new database resource without encryption enabled as this will be prevented at run-time by these policies.

### Encryption in Transit
All data transmitted between **WG2** clients and its operators’ services (northbound interface, for e.g. BSS) is done using strong encryption protocols. **WG2** supports the latest recommended secure cipher suites to encrypt all external traffic in transit, including TLSv1.2 protocols, IPsec with AES128 encryption, and ECDHE ciphers.

### Encryption at Rest
**WG2** enforces encryption-at-rest policies for deployed cloud resources. This includes AWS EBS, S3, RDS, ElasticCache, SQS, and ElasticSearch. Encryption keys for AuC/AUSF (for SIM secrets) are FIPS 140-2 validated, auto-rotated, and backed by an HSM. In addition, various core services such as SMS and HLR/HSS perform additional encryption of sensitive data within the application. **WG2** also has further mechanisms and policies for secure key management such as least-privilege RBAC with audit alerting. 

### Data Availability
Leveraging remote backups, **WG2** can ensure that data is not lost, compromised, or permanently deleted in an event.

Additional security controls: 
- Non-production test data, keeping production data untouched in a development zone
- RBAC controls restrict who has access to personal data
- Privacy and security training for all employees

## Application Security

**WG2** leverages DevSecOps and has built a robust and secure development lifecycle, which identifies security threats early in the development process to protect our APIs and services. We use security threat modeling and automated configuration static analysis to identify 3rd party vulnerabilities within our code and infrastructure misconfigurations that impact the security or privacy of our resources. If identified, all critical issues are quickly remediated. All code is peer-reviewed and checked into a code revision system.
### Software Development

**WG2** has several security controls across the software development lifecycle to ensure that security is addressed as early as possible. As part of the design phase, security threat modeling is performed on critical applications and features that can impact the security and privacy of our customers’ data. All threats, existing countermeasures, and gaps are recorded, prioritized, and remediated.

Third-party vendors are rarely used on behalf of the **WG2** core network. If a third-party vendor is used, proper security due diligence is performed and recorded in our ISO 27001 risk register. 

Additional security controls:
- Security automation such as SAST scans across the SDLC
- Process for reviewing source code before production releases
- Alerts and notifications to stakeholders on security findings throughout the SDLC process

### API Security

APIs are built on top of **WG2** core network to provide developers and operators access to the mobile core network services. At all times, authentication and authorization mechanisms are implemented to prevent unauthorized access. Third-party developers must adopt the oAuth authentication model to ensure data governance between the subscriber and developer.

All APIs undergo the same security controls listed in the previous section, Software Development. Additionally, the following security controls include:
- Rate limiting
- Metrics and logging
- Input validation
- Static Analysis Security Testing (SAST)
- Penetration testing

### Authentication
**WG2** operates several application products offered as a service for end-subscribers and operators. All applications undergo security controls listed in this document, including sections specific to Software Development.

Authentication to these applications is managed through oAuth, SAML, or other secure authentication methods approved by **WG2**. For customer-facing applications, Auth0 provides a secure configuration and interface for managing authentication and authorization. This authentication mechanism provides access controls, audit logs, and custom integrations to allow authentication mechanisms to meet your business requirements.

### Container Security
**WG2** operates a centralized docker registry where all container images are scanned for vulnerabilities before being deployed into production. These security scans can identify and report when a container has known CVEs and vulnerabilities. Additionally, **WG2** monitors running containers frequently to identify CVEs and vulnerabilities.

Additional controls across the software development lifecycle:
- Developers receive yearly application security training aligned to OWASP Top 10 and common security threats
- Automated Static Analysis Security Testing (SAST) scans are performed on all pull requests before production releases to identify common application vulnerabilities. SAST scans include identifying OWASP Top 10 vulnerabilities. In addition, SAST scans are performed on cloud and application code regularly for enhanced monitoring.
- Peer reviews are required
- Applications are monitored regularly to identify critical vulnerabilities and notifications are sent to respected stakeholders
- Applications undergo internal and external penetration testing aligned to OWASP Top 10 threats
- Applications are deployed behind load balancers and leverage Kubernetes deployment best practices to remediate from denial of service
- There exists a process to monitor third-party libraries continuously for vulnerabilities and issue remediations and upgrades
- Application code is tested in a controlled environment before production releases
- Threat modeling is performed on all applications when a new feature is introduced that can potentially impact the security or privacy of our customers’ data
- Software vulnerabilities are monitored continuously to provide recommended upgrades and patches on open source dependencies such as OS, packages, and libraries

## Infrastructure Security
### Cloud Security

**WG2** operates primarily within AWS Cloud. Best practices are adopted to ensure security controls, processes, and countermeasures are implemented to reduce their attack surface.

**WG2** holds an [Advanced Certified Partner](https://partners.amazonaws.com/partners/0010h00001ZY6fDAAT/Working%20Group%20Two%20As) with AWS. In doing so, we have demonstrated the leading best practices for operating a reliable, scalable, and secure infrastructure in the cloud. For example, we have implemented policies to prevent publicly exposing data and built tools to identify exposed services and misconfigurations as it impacts the security of our products. **WG2** has completed the AWS Well-Architected Best Practices assessment, which the report can be provided upon request.

### On-premise Security
**WG2** operates and manages edge networks in private data centers, handling all the traffic (control-plane and user-plane) coming from Mobile Network Operators, before being forwarded to the Cloud. All data centers are verified by our security team to meet the same security standard. Security controls on the edge sites include logging, alerting, metrics, public IP management, config management, firewall rules, vulnerability management, network security (L2-4), network diagrams, upgrade strategies, secure management via SSH and IPsec, and physical security of hardware.

Additional security controls include:
- Privacy checklists to ensure GDPR compliance
- Security checklists before production deployments
- Recurring vulnerability management
- External audit logging and alerting
- Monitoring
- Automated configuration backups
- Business continuity plan and redundancy as aligned to customer integrations
- Threat modeling on common threat scenarios such as DDoS and unauthorized access

### Logging and Monitoring
A centralized logging and monitoring system allows **WG2** to ensure business continuity and security with the ability to alert and investigate security incidents. Some of this technology is leveraging AWS OpenSearch, Prometheus, Alertmanager, and Pagerduty.

Following are additional controls in place to assist with our process:
- Authentication mechanisms to access logs
- Tamperproof logging off-host in a centralized multi-cluster database for analysis
- Logs are encrypted at rest
- Alerts on log volume and on-call alerts on failures in the logging service
- Personal data such as SMS or voicemail content is not logged
- Audit trails when access to personal data is logged externally
- Employee and user audit logs are kept for 3 years

### Identity and Access Management
Least-privilege, need-to-know basis, RBAC, centralized IAM, and individual accounts are just a few of the controls **WG2** has in place to monitor and secure our core platform. 

Additional controls include:
- Centralized policies across accounts, cloud, and application resources restricting access
- Individual accounts
- External audit logging stored for 3 years
- Alerting when a high privileged account is used, and access to remote systems
- Strict password policy at least 12 characters with a combination of uppercase, lowercase, number, and special character
- Secure remote access using encryption protocols
- Procedures for offboarding employees across systems

### Disaster Recovery and Business Continuity Plan
**WG2** utilizes services deployed by our hosting provider to distribute production operations across multiple separate physical locations. These three locations are within one geographic region which protects **WG2**’s service from loss of connectivity, power infrastructure, and other common location-specific failures. **WG2** retains a full backup copy of production data, in real-time. Backups are tested periodically.

In addition, several security controls are implemented across the cloud infrastructure include:
- A secure Identify and Access Management (IAM) is used to implement RBAC controls over cloud resources that meet legal requirements and least privileged access
- MFA authentication is required for all access to cloud resources
- API communication is over HTTPS/TLS
- A zero-downtime deployment model architecture is adopted across the cloud service to operate across multiple availability zones and regions. In addition, failures are tested regularly as part of our backup and disaster recovery plan.
- Communication workflows are organized with customers if downtime is expected within our cloud or applications
- Cloud and application logs are ported to internal services for analysis, monitoring, and reporting. In addition, log events can be exported to customers.
- Isolation mechanisms are created across cloud resources to ensure tenants are secured
- Internal and external application penetration testing is performed on a regular basis
- Detection mechanisms are implemented to identify abuse across telco and network services
- There exists a business continuity plan for assessing and recovering from potential cloud-related incidents that can result in production downtime
- Global policies to prevent misconfigurations of data stores. E.g. public databases

### Network and System Security

**WG2** operates a global network to ensure our customers are connected to the SS7 and internet services securely. To ensure security is implemented, we have adopted an onion-approach security model to implement security across multiple layers of the network. Depending on the application or service, security controls are aligned to reduce the risk of unauthorized access and exposure to rogue devices, networks, and users.

**WG2** divides its systems into separate networks to better protect sensitive data. Systems supporting testing and development activities are hosted in a separate network from systems supporting **WG2**’s production infrastructure. All servers within the development and production infrastructure are hardened (e.g., removing default passwords, disabling unnecessary ports, etc.) and have a base configuration image applied to ensure consistency across the environment. Automatic security updates are applied regularly.

A network-based intrusion detection system has been deployed across all environments to identify and alert on network anomalies such as data leakage (DLP), trojans, unauthorized access, backdoors, and brute-forcing. 

A host-based intrusion detection system is deployed across all cluster resources to identify and alert on host-based network anomalies such as rogue system processes, bitcoin mining, log tampering, the launch of privileged shells, outbound connections to C2 servers, unexpected network traffic, and more. All findings generate metrics and alerts which will notify on-call engineers of such events.

### DDoS
Distributed Denial of Service (DDoS) is a known threat across **WG2**’s application and telco infrastructure. In response, **WG2** has controls, metrics, and playbooks for reducing the risk of an event to ensure business and service continuity.

#### **WG2** Edge Locations - DDoS
**WG2** has identified key controls through threat model sessions and best practices to reduce the risk from DDoS events. Today, on **WG2** Edge Locations, there exist controls and procedures to drop traffic, capacity planning, metrics and alerting, and playbooks for mitigating such events. Playbooks are defined in correlation with upstream ISPs to blackhole malicious traffic before reaching our systems.

#### Cloud Infrastructure - DDoS
**WG2** leverages a multi-availability, immutable infrastructure design that allows us to scale our infrastructure and applications based on traffic patterns with little to no downtime. 

### Endpoint Security
Encryption at rest is required for all endpoint hard drives. **WG2** monitors all device OS versions for known vulnerabilities. Additionally, there exist procedures for remotely wiping company data on the phone if lost or stolen. 

Additional security controls include:
- Firewall rules per service level (inbound, and depending on the service, also outbound)
- Monitoring public endpoints and misconfigurations such as public data stores
- Automatic security updates across all servers
- Yearly 3rd party penetration test
- Monitoring vulnerabilities across application services, OS, and applications
- Threat modeling core services throughout the development lifecycle

## Telecommunication Security
**WG2** performs threat modeling across its telco services to understand the threats/risks and implement countermeasures to reduce the risk of an event. Additionally, **WG2** leverages best practices identified by GSMA to implement additional controls.

### SS7 Firewall
**WG2** has implemented an SS7 firewall that will block/reject SS7 signaling based on security best practices outlined by GSMA (FS.11 and FS.19). Some example rules include checks on:
- Cross-layer address consistency checks (e.g. SCCP <=> MAP)
- Screening verifies messages originate in subscriber’s VPLMN
- MAP operations that return actual subscriber’s IMSI, cell-location, and MSC are not implemented (SMS Home-Routing by default)
- Message filtering is based on several criteria such as the time and location of the last update
    - SS7 Protocol (SCCP CgPA/CdPA, OpCode, ACN, TCAP message type, IMSI, ...)
    - Diameter protocol (Origin-/Destination-Host/-Realm, Command Code, Application Id, IMSI, ...)
    - Diameter Application ID / Command Code filtering and consistency check
    - Verify address fields consistency, limit message length / grouped AVPs nesting depth
    - Validate protocol consistency through input validation (e.g. doubled address AVPs, wrong AVP address, AVP Type, and format checks)

### SMS 
In 2021, Android-based spyware named Flubot propagated via SMS across handsets, infecting hundreds of thousands of phones. **WG2** was able to protect its customers and limit the propagation through  advanced controls and spam alerting through advanced metrics and alerting.

### Voicemail 
**WG2** has several controls in place to prevent unauthorized access to voicemail content. Some controls include metrics and alerts on brute force attacks and network checks to prevent spoofing of an end device. Voicemail access also requires a user-configured pin code to mitigate common vulnerabilities in these systems.  Additional controls are implemented according to GSMA best practices.

### Voice call 
An operator can configure least-privilege controls to restrict the number of parallel calls and limit the national and internal call duration (e.g. 8 hours national, 2 hours international, and 10 parallel calls). 

## Operational Security

**WG2** is building an industry-leading security program based on the concept of defense-in-depth, securing its organization and your data at every layer. **WG2** security program aligns with industry security and privacy standards, such as ISO 27001, CIS, NIST, GSMA, and GDPR.

**WG2** employs security personnel who’s responsible for implementing its security program. Focus areas include: 
- Cloud and On-Premise Security Architecture
- Product Development Security
- Technical Security Training
- Security Engineering and Operations 
- Detection and Response
- Risk and Compliance
- Telecommunication SS7 Security

Additional security controls:
- Procedures to backup personal data
- Formal security awareness training for all new and existing employees
- Formulate contractual agreements when required
- Policies and procedures outlining the employee responsibility of confidentiality of personal data
- Process for managing system access for employees for onboarding and offboarding

### Customer Integration Security
**WG2** ensures security is aligned early in the process when integrating new partners onto our core network. Throughout an integration process, we ensure security is part of the design process and is aligned with our existing security procedures.

Additional security controls include:
- Separation of customer traffic
- All integrations follow **WG2**’s SDLC lifecycle process
- All integrations follow our procedures for ensuring encryption in transit and at rest
- For new integrations or features that impact the privacy or security of customer data, threat modeling is performed
- Business continuity and disaster recovery plans
- Secure auth solution compatible with SAML, OAuth, email, and MFA

### Certification
**WG2** security program aligns with industry security and privacy standards, such as ISO 27001, CIS, NIST, GSMA, and GDPR. Processes exist to monitor our cloud and application infrastructure to these standards and fix any gaps.



### Auditing
There exist policies for security practices, standards, and processes within the scope of how **WG2** implements a security governance framework. These policies can be shared with authorized parties.

Referencing section Logging and Monitoring, several controls exist with auditing.

Additional security controls include:
- Logging administrative operations
- Ability to retrieve and view logs on a usage report
- Audit trails across cloud and physical machines
- CRUD events are audited automatically
- Audit logs are ingested as part of the SIEM

### Policies and Procedures
**WG2** maintains an ISO 27001 policy packet to ensure security governance is followed across the organization; available upon request. **WG2** has also started the process to get the ISO 27001 certification.

### Internal Phishing Campaigns
**WG2** performs internal phishing campaigns on a continual basis across all employees. To learn more about how WG2 performs phishing, visit our [blog post](/blog/internal-email-phishing-campaigns).

## Privacy
### Privacy Regulation
**WG2** aligns with local and regional regulations on behalf of our customers. This includes but is not limited to regional data protection laws and privacy protection laws. **WG2** as a company operates within the scope of GDPR within the EU.

### GDPR
**WG2** is the Data-Processor of all data and provides the ability for operators to have full control of their end-user data. The Data-Controller sets the data retention policy and processing agreement outlined in the Data Processing Agreement (DPA). This ensures that the customer has control over how long the data is stored, where the data is stored, and who has access to the data.

### Personal Data Breach Notification
**WG2** has a 24/7 level 3 on-call program to quickly identify and remediate operational and security incidents. Dedicated security playbooks have been established to facilitate the proper handling of all security incidents. In the event of a security incident, all affected parties will be informed within 72 hours. Incident response procedures are tested and updated at least annually.

Additional security controls:
- Centralized SIEM to collect, monitor, and alert on security anomalies within the application and network traffic
- Incident Response Policy and Plan
- Data Privacy Risk Assessment
- Communication incident procedures with customers for timely notifications

## Contact Details
Security is at the heart of **WG2**’s engineering culture. Every person, team, and organization deserves and expects their data to be secure and confidential. **WG2** continues to work hard to ensure the safeguarding of this data. Please contact us at security@wgtwo.com if you have any questions.
