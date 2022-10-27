import React from "react"
import styles from "./tooltip.module.css"

function Component(props) {
  return (
    <div className={styles.tooltip}>
      {props.text}
      <span className={styles.tooltiptext}>{props.subtext}</span>
    </div>
  )
}

export default Component
