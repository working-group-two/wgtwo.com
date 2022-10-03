import React from "react"
import common from "../../../css/common.module.css"

function Component({ children }) {
  return <div className={common.page}>{children}</div>
}

export default Component
