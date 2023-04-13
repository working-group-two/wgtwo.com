import React from "react"
import common from "../../css/common.module.css"
import styles from "./security-domain.module.css"

const securityDomains = [
  {
    name: "sXGP AP",
    description:
      "WG2 performs threat modeling across its telco services to understand the threats/risks and implement countermeasures to reduce the risk of an event. Additionally, WG2 leverages best practices identified by GSMA to implement additional controls.",
  },
  {
    name: "Infrastructure Security",
    description:
      "WG2 holds an Advanced Certified Partner with AWS. In doing so, we have demonstrated the leading best practices for operating a reliable, scalable, and secure infrastructure in the cloud. For example, we have implemented policies to prevent publicly exposing data and built tools to identify exposed services and misconfigurations as it impacts the security of our products. WG2 has completed the AWS Well-Architected Best Practices assessment, which the report can be provided upon request.",
  },
  {
    name: "Application Security",
    description:
      "WG2 leverages DevSecOps and has built a robust and secure development lifecycle, which identifies security threats early in the development process to protect our APIs and services.We use security threat modeling and automated configuration static analysis to identify 3rd party vulnerabilities within our code and infrastructure misconfigurations that impact the security or privacy of our resources. If identified, all critical issues are quickly remediated. All code is peer-reviewed and checked into a code revision system.",
  },
  {
    name: "Operational Security",
    description:
      "Least-privilege, need-to-know basis, RBAC, centralized IAM, and individual accounts are just a few of the controls WG2 has in place to monitor and secure our core platform. WG2 has a 24/7 level 3 on-call program to quickly identify and remediate operational and security incidents. Dedicated security playbooks have been established to facilitate the proper handling of all security incidents. In the event of a security incident, all affected parties will be informed within 72 hours. Incident response procedures are tested and updated at least annually.",
  },
]

function Component(props) {
  return (
    <div className={styles.securityDomains}>
      {securityDomains.slice(0, props.length).map(securityDomain => (
        <div className={styles.securityDomain} key={securityDomain.name}>
          <div className={styles.securityDomainTitle}>
            {securityDomain.name}
          </div>
          <div className={styles.securityDomainDescription}>
            {securityDomain.description}
          </div>
          <a
            href={`/docs/technology/security-whitepaper#${securityDomain.name
              .replace(/ /g, "-")
              .toLowerCase()}`}
            className={styles.link}
          >
            Learn more
          </a>
          <div className={common.spacer}></div>
        </div>
      ))}
    </div>
  )
}

export default Component
