import React from "react"
import styles from "./logs.module.css"
import common from "../../css/common.module.css"
import Image from "@theme/IdealImage"
import Link from "@docusaurus/Link"
import Translate from "@docusaurus/Translate"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

function Component() {
  const { i18n } = useDocusaurusContext()
  return (
    <div className={`${common.section} ${common.sectionGray}`}>
      <div className={`${common.container} ${common.splitContainer}`}>
        <div className={common.text}>
          <h2 className={common.title}>
            Self-service
            <br /> operator console
          </h2>
          <div
            className={
              i18n.currentLocale === "en" ? common.subtitle : common.subtitleJp
            }
          >
            <Translate
              id="home.logs.subtitle"
              description="Subtitle for the logs section"
            >
              Telecom operators on the WG2 platform are able to configure
              their own subscriptions, giving them the freedom to add the
              products that meet their needs.
            </Translate>
          </div>
          <div className={styles.buttons}>
            <Link
              to="/product-ecosystem"
              className={`${common.button} ${common.buttonPrimary}`}
            >
              <Translate
                id="home.logs.ecosystemButton"
                description="ecosystemButton for the logs section"
              >
                Learn more about our Product Ecosystem
              </Translate>
            </Link>
          </div>
        </div>
        <Image
          alt="WG2 console portal image"
          className={styles.image}
          img={require("../../../static/img/console.png")}
        />
      </div>
    </div>
  )
}

export default Component
