import React from "react"
import common from "../../../css/common.module.css"
import styles from "./splitcontainer.module.css"

function Component({ bgColor, children }) {
  return (
    <div className={`${common.section} ${common.sectionDark}`} style={{backgroundColor: bgColor}}>
      <div className={`${common.container} ${styles.splitContainer} `}>
        {children}
      </div>
    </div>
  )
}

export default Component
