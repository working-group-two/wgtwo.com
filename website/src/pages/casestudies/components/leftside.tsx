import React from "react"
import clsx from "clsx"
import common from "../../../css/common.module.css"
import styles from "./splitcontainer.module.css"

function Component({ sticky, children }) {
  return (
    <div className={clsx(common.text, {[styles.sidebar]: sticky})}>{children}</div>
  )
}

export default Component
