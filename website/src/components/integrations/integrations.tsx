import React from "react"
import common from "../../css/common.module.css"
import styles from "./integrations.module.css"
import Image from "@theme/IdealImage"

function Component() {
  return (
    <div
      className={`${common.section} ${common.sectionGray} ${styles.integrationSection}`}
    >
      <div className={common.container}>
        <div className={styles.text}>
          <h2 className={styles.title}>Customers and collaborators</h2>
        </div>
      </div>
      <div className={common.container}>
        <div className={styles.logos}>
          <Image
            alt="Vimla"
            className={styles.logo}
            style={{ padding: "20px 0" }}
            img={require("../../../static/img/vimla.png")}
          />
          <Image
            alt="Cisco"
            className={styles.logo}
            style={{ padding: "20px 0" }}
            img={require("../../../static/img/cisco.png")}
          />
          <Image
            alt="Telavox Logo"
            className={styles.logo}
            style={{ padding: "0px 0" }}
            img={require("../../../static/img/telavox.png")}
          />
          <Image
            alt="Hutch CKH Logo"
            className={styles.logo}
            style={{ padding: "20px 0" }}
            img={require("../../../static/img/ckh.png")}
          />
          <Image
            alt="AWS Integration"
            className={styles.logo}
            style={{ padding: "24px 0" }}
            img={require("../../../static/img/aws.png")}
          />
          <Image
            alt="Mobi Logo"
            className={styles.logo}
            style={{ padding: "12px 0" }}
            img={require("../../../static/img/mobi.png")}
          />
          <Image
            alt="Telenor Logo"
            className={styles.logo}
            style={{ padding: "24px 0" }}
            img={require("../../../static/img/telenor.png")}
          />
          <Image
            alt="MKI Logo"
            className={styles.logo}
            style={{ padding: "24px 0" }}
            img={require("../../../static/img/mki.png")}
          />
          <Image
            alt="Kyocera Logo"
            className={styles.logo}
            style={{ padding: "24px 0" }}
            img={require("../../../static/img/kyocera.png")}
          />
          <Image
            alt="Atos Logo"
            className={styles.logo}
            style={{ padding: "24px 0" }}
            img={require("../../../static/img/atos.png")}
          />
        </div>
      </div>
    </div>
  )
}

export default Component
