import React from "react"
import common from "../../../css/common.module.css"

function Component({ pillText, titleText, children }) {
  return (
    <div>
      <div className={common.pillTitle}>{pillText}</div>
      <h2 className={common.title}>{titleText}</h2>
      <div className={common.subtitle}>
        {children}
      </div>
    </div>
  )
}

export default Component
