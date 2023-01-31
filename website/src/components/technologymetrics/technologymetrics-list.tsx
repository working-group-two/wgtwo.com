import React from "react"
import common from "../../css/common.module.css"
import styles from "./technologymetrics.module.css"

const technologyMetrics = [
  { name: "527 million", description: "SMSs" },
  { name: "354 million", description: "voice calls" },
  { name: "32 million", description: "MMSs" },
  { name: "3.07 petabyte", description: "data upload" },
  { name: "30.1 petabyte", description: "data download" },
  { name: "418 billion", description: "connectivity events" },
]

function Component(props) {
  return (
    <div className={styles.technologyMetrics}>
      {technologyMetrics.slice(0, props.length).map(technologymetrics => (
        <div className={styles.technologymetrics} key={technologymetrics.name}>
          <div className={styles.technologymetricsTitle}>
            {technologymetrics.name}
          </div>
          <div className={styles.technologymetricsDescription}>
            {technologymetrics.description}
          </div>
          <div className={common.spacer}></div>
        </div>
      ))}
    </div>
  )
}

export default Component
