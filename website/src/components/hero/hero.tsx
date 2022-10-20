import React from "react"
import styles from "./hero.module.css"
import common from "../../css/common.module.css"
import Translate from "@docusaurus/Translate"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

function Component() {
  const { i18n } = useDocusaurusContext()
  return (
    <div className={common.section}>
      <div className={`${common.container} ${common.splitContainer}`}>
        <div className={common.text}>
          <h1 className={styles.titleHeader}>
            Programmable. <br /> Scalable. <br /> Innovative. <br />
            This is your new mobile core network.
            {/* <span className={`${styles.ak} ${styles.hn} ${styles.ah} ${styles.av} ${styles.ab}`}>Mobile core network.</span> */}
          </h1>
          <div className={i18n.currentLocale === "en" ? common.subtitle : common.subtitleJp}>
            <Translate
              id="home.hero.subtitle"
              description="Subtitle for the hero section"
            >
              No more boxes, no more end-of-life, no large upfront investments.
              With wgtwo's cloud-native mobile core you get continuous
              innovation, reduced costs and real flexibility. To make it really
              simple for operators – it's delivered as-a-service and grows as
              you grow.
            </Translate>
          </div>
          <div className={styles.buttons}>
            <Link
              to="/technology"
              className={`${common.button} ${common.buttonPrimary}`}
            >
              <Translate
              id="home.hero.techButton"
              description="techButton for the hero section"
              >
                Our Technology
              </Translate>
            </Link>
            <Link to="/request-demo" className={common.button}>
              <Translate
                id="home.hero.contactButton"
                description="contactButton for the hero section"
              >
                Request a Demo
              </Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component
