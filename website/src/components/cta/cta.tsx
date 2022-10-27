import React from "react"
import common from "../../css/common.module.css"
import styles from "./cta.module.css"
import Link from "@docusaurus/Link"
import Translate from "@docusaurus/Translate"

function Component() {
  return (
    <div className={common.section}>
      <div className={common.container}>
        <div className={`${common.centeredText}`}>
          <h2 className={common.title}>Integrate your subscribers today.</h2>
          <Link
            to="/contact"
            className={`${common.button} ${common.buttonPrimary} ${styles.button}`}
          >
            <Translate
              id="home.cta.contact"
              description="contact for the cta section"
            >
              Request a Demo
            </Translate>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Component
