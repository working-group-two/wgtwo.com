import React from "react"
import common from "../../../css/common.module.css"

function Component({ backgroundImage, children }) {
  return (
    <div
      className={common.section}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className={common.container}>{children}</div>
    </div>
  )
}

export default Component
