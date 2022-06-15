import React from "react"
import common from "../../css/common.module.css"
import styles from "./casestudy.module.css"
import CaseStudyList from "./casestudy-list"
import Image from "@theme/IdealImage"
import Link from "@docusaurus/Link"
import Translate from "@docusaurus/Translate"

function Component() {
  return (
    <div
      className={`${common.section} ${common.sectionDark} ${common.sectionRounded}`}
    >
      <div
        className={`${common.container} ${common.splitContainer} ${styles.caseStudyContainer}`}
      >
        <div className={common.text}>
          <div className={styles.title}>
            Adapting to your use case{" "}
            <span className={styles.heart}>&hearts;</span>
          </div>
          <div className={styles.subtitle}>
            <Translate
              id="home.casestudy.subtitle"
              description="Subtitle for the casestudy section"
            >
              wgtwo provides the platform with flexible APIs, allowing all
              customer segments to migrate to our core network. To learn more
              about how we are changing the game in the telecommunication space,
              check out the case studies to see how we can help your company.
              Our goal is to drive innovation and growth for your business.
            </Translate>
          </div>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.caseStudyList}>
        <CaseStudyList length={6} />
      </div>
      <div className={common.container}>
        <Link to="/case-studies" className={styles.caseStudyButton}>
          See all case studies
        </Link>
      </div>
    </div>
  )
}

export default Component
