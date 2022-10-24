import React from "react"
import common from "../../../css/common.module.css"
import styles from "./resourcessection.module.css"

function Component({ bgColor, children }) {
  return (
    <div
      className={`${common.section} ${styles.sectionStyle}`}
      style={{ backgroundColor: bgColor }}
    >
      <h2 className={styles.title}>Resources</h2>
      <div className={`${common.container} ${styles.gridContainer} `}>
        {children}
      </div>
    </div>
  )
}

export default Component
