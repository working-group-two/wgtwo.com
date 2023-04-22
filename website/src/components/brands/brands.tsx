import React from "react"
import styles from "./brands.module.css"
import Image from "@theme/IdealImage"

function Component() {
  return (
    <div className={styles.brands}>
      <a
        target="_blank"
        href="https://www.telenor.com/media/newsroom/archive/working-group-two-readies-commercial-launch/"
      >
        <Image
          alt="Telenor Logo"
          className={styles.logo}
          img={require("../../../static/img/telenor.png")}
        />
      </a>
      <a
        target="_blank"
        href="https://partners.amazonaws.com/partners/0010h00001ZY6fDAAT/Working%20Group%20Two%20As"
      >
        <Image
          alt="AWS APN Partner Logo"
          className={styles.logo}
          img={require("../../../static/img/aws.png")}
        />
      </a>
      <a
        target="_blank"
        href="https://newsroom.cisco.com/press-release-content?type=webcontent&articleId=1969058"
      >
        <Image
          alt="Cisco Logo"
          className={styles.logo}
          img={require("../../../static/img/cisco.png")}
        />
      </a>
    </div>
  )
}

export default Component
