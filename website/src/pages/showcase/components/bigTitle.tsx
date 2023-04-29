import React from "react"
import common from "../../../css/common.module.css"
import styles from "./bigTitle.module.css"

function Component({ pillText, logoUrl, children }) {
  let logo

  if (logoUrl) logo = <img className={styles.logo} src={logoUrl} />

  return (
    <div>
      <div className={common.pillTitle}>{pillText}</div>
      <div className={styles.header}>
        <div className={styles.logoContainer}>{logo}</div>
      </div>
      <div className={common.subtitle}>{children}</div>
    </div>
  )
}

export default Component
