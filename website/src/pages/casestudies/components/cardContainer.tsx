import React from "react"
import common from "../../../css/common.module.css"
import styles from "./card.module.css"

function Component({ children }) {
  return <div className={styles.deploymentModels}>{children}</div>
}

export default Component
