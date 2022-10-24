import React from "react"
import styles from "./quote.module.css"
import { Quote } from "lucide-react"

function Component({ by, children }) {
  let quoteBy
  if (by) quoteBy = <p className={styles.quoteBy}>- {by}</p>

  return (
    <div className={styles.quoteContainer}>
      <blockquote className={styles.quote}>
        <Quote color="#aaa" strokeWidth={1} className={styles.quoteIcon} />
        {children}
      </blockquote>
      {quoteBy}
    </div>
  )
}

export default Component
