import React from "react"
import common from "../../../css/common.module.css"
import styles from "./twocolumnsection.module.css"

function Component({ bgColor, children }) {
  return (
    <div
      className={`${common.section} ${common.sectionDark} ${styles.sectionStyle}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className={`${common.container} ${styles.splitContainer} `}>
        {children}
      </div>
    </div>
  )
}

export default Component
