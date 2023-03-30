import React from "react"
import styles from "./security-header.module.css"
import common from "../../css/common.module.css"
import Image from "@theme/IdealImage"
import Link from "@docusaurus/Link"

function Component() {
  return (
    <div className={`${common.section} ${common.sectionDark}`}>
      <div className={`${common.container} ${common.splitContainer}`}>
        <div className={common.text}>
          <section>
            <div className={common.pillTitle}>wgtwo Security</div>
          </section>

          <h2 className={common.title}>
            Secure network.
            <br />
            Secure data.
          </h2>
          <div className={common.subtitle}>Your trusted telco platform.</div>
        </div>
      </div>
      <div className={common.container}>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <Image
                alt="GDPR Logo"
                className={styles.logo}
                img={require("../../../static/img/gdpr.png")}
              />
            </div>
            <div className={styles.featureTitle}>GDPR</div>
            <div className={styles.featureDescription}>
              <b>wgtwo</b> is GDPR compliant and provides Data Processing
              Agreements (DPAs) with our all of our customers to outline how and
              where your data is processed.
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <Image
                alt="CSA Norway Logo"
                className={styles.logo}
                img={require("../../../static/img/aws-well-architected.png")}
              />
            </div>
            <div className={styles.featureTitle}>AWS Well Architected</div>
            <div className={styles.featureDescription}>
              <b>wgtwo</b> is committed to adopting AWS key concepts, design
              principles, and architectural best practices for designing and
              running workloads in the cloud.
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <Image
                alt="ISO Logo"
                className={styles.logo}
                img={require("../../../static/img/iso.png")}
              />
            </div>
            <div className={styles.featureTitle}>ISO 27001</div>
            <div className={styles.featureDescription}>
              <b>wgtwo</b> is ISO 27001:2022 certified. View our{" "}
              <Link to="https://trust.wgtwo.com" className={styles.link}>
                Trust Report
              </Link>{" "}
              to see our controls in action. Learn more on our{" "}
              <Link to="/blog/iso27001" className={styles.link}>
                blog.
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component
