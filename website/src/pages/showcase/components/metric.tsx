import React from "react"
import styles from "./metric.module.css"

function Component({ title, children }) {
  return (
    <div className={styles.gridCell}>
      <div className={styles.bigText}>{title}</div>
      <div className={styles.subtitle}>{children}</div>
    </div>
  )
}

export default Component
