import React from "react"
import common from "../../../css/common.module.css"
import styles from "./section.module.css"

function Component({ bgColor, children }) {
  return (
    <div
      className={`${common.section} ${styles.sectionStyle}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className={`${common.container} ${styles.containerStyle}`}>
        {children}
      </div>
    </div>
  )
}

export default Component
