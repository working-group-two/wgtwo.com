import React from "react"
import common from "../../css/common.module.css"
import styles from "./ourservice.module.css"
import { Check, CheckCircle2 } from "lucide-react"

function Component() {
  return (
    <div
      className={`${common.section} ${common.sectionDark} ${common.sectionRounded}`}
    >
      <div className={`${common.container} ${styles.stats}`}></div>
      <div className={common.container}>
        <div className={common.centeredText}>
          <h2 className={styles.ourservice}>
            Our core does not only deliver technology to run a mobile core
            network but also includes
          </h2>
          <div className={styles.ourServiceFeatures}>
            <li>
              <Yes /> Upgrades / evolution
            </li>
            <li>
              <Yes /> Operations (incl. 24/7)
            </li>
            <li>
              <Yes /> Support
            </li>
            <li>
              <Yes /> Application layer
            </li>
            <li>
              <Yes /> Orchestration
            </li>
            <li>
              <Yes /> Operating systems
            </li>
            <li>
              <Yes /> Infrastructure / hardware
            </li>
            <li>
              <Yes /> Networking
            </li>
            <li>
              <Yes /> Data centre / power
            </li>
            <li>
              <Yes /> Security
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}

function Yes() {
  return <Check color="#4CAF50" margin-right="2px" />
}

export default Component
