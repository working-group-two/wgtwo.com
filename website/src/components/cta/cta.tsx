import React from "react"
import common from "../../css/common.module.css"
import styles from "./cta.module.css"
import Link from "@docusaurus/Link"

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
            Request a Demo
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Component
