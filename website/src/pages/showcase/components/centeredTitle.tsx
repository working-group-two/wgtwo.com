import React from "react"
import common from "../../../css/common.module.css"

function Component({ title, description }) {
  return (
    <div className={common.centeredText}>
      <div className={common.title}>{title}</div>
      <div className={common.subtitle}>{description}</div>
    </div>
  )
}

export default Component
