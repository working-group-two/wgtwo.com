import React from "react"
import common from "../../../css/common.module.css"

function Component({ backgroundImage, height, children }) {
  return (
    <div
      className={common.section}
      style={{ backgroundImage: `url('${backgroundImage}')`, height }}
    >
      <div className={common.container}>{children}</div>
    </div>
  )
}

export default Component
