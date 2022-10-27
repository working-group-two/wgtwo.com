import React from "react"
import clsx from "clsx"
import common from "../../../css/common.module.css"
import styles from "./twocolumnsection.module.css"

function Component({ sticky, children }) {
  return <div className={clsx({ [styles.sidebar]: sticky })}>{children}</div>
}

export default Component
