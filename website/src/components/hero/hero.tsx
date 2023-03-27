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
      <div className={`${common.container} `}>
        <h1 className={styles.titleHeader}>
          Plug into the world's mobile core network
        </h1>
        <div
          className={
            i18n.currentLocale === "en" ? common.subtitle : common.subtitleJp
          }
        >
          <Translate
            id="home.hero.subtitle"
            description="Subtitle for the hero section"
          >
            Join a league of global telco front-runners in their pursuit of
            growth and efficiency. By connecting to our borderless core, you
            will simplify operations, reduce cost by 30-70% and get access to a
            product marketplace to help you differentiate and build new revenue
            streams.
          </Translate>
        </div>
        <div className={styles.buttons}>
          {i18n.currentLocale === "en" && (
            <>
              <Link
                to="/contact"
                className={`${common.button} ${common.buttonPrimary} ${styles.heroButton}`}
              >
                <Translate
                  id="home.hero.techButton"
                  description="techButton for the hero section"
                >
                  Show me how
                </Translate>
              </Link>
            </>
          )}

          {i18n.currentLocale === "jp" && (
            <>
              <Link
                to="/technology"
                className={`${common.button} ${common.buttonPrimary} ${styles.heroButton}`}
              >
                <Translate
                  id="home.hero.techButton"
                  description="techButton for the hero section"
                >
                  詳しく見る
                </Translate>
              </Link>
              <Link
                to="/request-demo"
                className={`${common.button} ${common.buttonPrimary} ${styles.heroButton}`}
              >
                <Translate
                  id="home.hero.contactButton"
                  description="contactButton for the hero section"
                >
                  sXGPクラウドサービス
                </Translate>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Component
