import React from "react"
import styles from "./multig.module.css"
import common from "../../css/common.module.css"
import Image from "@theme/IdealImage"

function Component() {
  return (
    <div className={`${common.section} ${common.sectionGray}`}>
      <div className={`${common.container} ${common.splitContainer}`}>
        <div className={common.text}>
          <section>
            <div className={common.pillTitle}>2G</div>{" "}
            <div className={common.pillTitle}>3G</div>{" "}
            <div className={common.pillTitle}>4G</div>{" "}
            <div className={common.pillTitle}>5G</div>
          </section>

          <h2 className={common.title}>Multi-G Support</h2>
          <div className={common.subtitle}>
            Our core has multi-G support in that it offers a full MNO core for
            4G and 5G, as well as a full MVNO functionality for 2G/3G. This
            allows operators to build full modern 4G/5G core networks while
            leveraging national roaming for 2G/3G where necessary. Our core
            offers the full set of capabilities related to authentication and
            provisioning, voice, messaging, and data services.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component
