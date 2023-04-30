import React from "react"
import common from "../../../css/common.module.css"
import styles from "./card.module.css"

function Component({ label, title, children }) {
  return (
    <>
      <div className={styles.deploymentModel}>
        <div className={styles.deploymentModelLabel}>{label}</div>
        <div className={styles.deploymentModelTitle}>{title}</div>
        <div className={styles.deploymentModelText}>{children}</div>
      </div>
    </>
  )
}

export default Component
