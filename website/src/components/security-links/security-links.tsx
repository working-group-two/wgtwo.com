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
            <b>wgtwo</b> strives to become the most secure mobile telco core
            network. In doing so, we would like to share several of our
            implemented controls.
          </div>
        </div>
        <div className={`${common.container} ${styles.SecurityDomainList}`}>
          <Link
            to="https://www.iafcertsearch.org/certified-entity/b173f6b7-3418-5050-875b-e513ecaece42"
            className={`${common.button} ${common.buttonPrimary}`}
          >
            View our ISO 27001:2022 Certification
          </Link>
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
