import React from "react"
import styles from "./resource.module.css"

function Component({ title, link, children }) {
  return (
    <a href={link} target="_blank" className={styles.resourceBlock}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{children}</div>
      <div className={styles.footer}>Visit</div>
    </a>
  )
}

export default Component
