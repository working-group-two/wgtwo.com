import React from "react"
import styles from "./hero.module.css"
import common from "../../css/common.module.css"
import Translate from "@docusaurus/Translate"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

function Component() {
  const { i18n } = useDocusaurusContext()
  return (
    <div className={`${common.section} ${styles.section}`}>
      <div className={common.container}>
        <div className={`${common.text} ${styles.heroTextContainer}`}>
          <h1 className={styles.titleHeader}>
            Plug into the world's mobile core network
            {/* <span className={`${styles.ak} ${styles.hn} ${styles.ah} ${styles.av} ${styles.ab}`}>Mobile core network.</span> */}
          </h1>
          <div
            className={
              i18n.currentLocale === "en" ? `${common.subtitle} ${styles.subtitle}` : common.subtitleJp
            }
          >
            <Translate
              id="home.hero.subtitle"
              description="Subtitle for the hero section"
            >
              Join a league of global telco front-runners in their pursuit of growth and
              efficiency. By connecting to our borderless core, you will simplify operations,
              reduce cost by 30-70% and get access to a product marketplace to help you differentiate
              and build new revenue streams.
            </Translate>
          </div>
          <div className={styles.buttons}>
            <Link
              to="/technology"
              className={`${common.button} ${common.buttonPrimary} ${styles.heroButton}`}
            >
              <Translate
                id="home.hero.techButton"
                description="techButton for the hero section"
              >
                Our Technology
              </Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component
