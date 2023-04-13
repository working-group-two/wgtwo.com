import React from "react"
import common from "../../css/common.module.css"
import styles from "../security-domain/security-domain.module.css"
import Link from "@docusaurus/Link"

function Component() {
  return (
    <div className={`${common.section} ${common.sectionDark}`}>
      <div
        className={`${common.container} ${common.splitContainer} ${styles.securityDomainContainer}`}
      >
        <div className={common.text}>
          <div className={styles.title}>Trust is our priority.</div>
          <div className={styles.subtitle}>
            <b>WG2</b> strives to become the most secure mobile telco core
            network. In doing so, we would like to share several of our
            implemented controls.
          </div>
        </div>
        <div className={`${common.container} ${styles.SecurityDomainList}`}>
          <Link
            to="/docs/technology/security-whitepaper"
            className={`${common.button} ${common.buttonPrimary}`}
          >
            Read our security whitepaper
          </Link>
          <Link
            to="https://trust.wgtwo.com"
            className={`${common.button} ${common.buttonPrimary}`}
          >
            View our trust report
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Component
