import React from "react";
import common from "../../css/common.module.css";
import styles from "./casestudy.module.css";
import CaseStudyList from "./casestudy-list";
import Image from "@theme/IdealImage";

function Component() {
  return (
    <div className={`${common.section} ${common.sectionDark} ${common.sectionRounded}`}>
      <div className={`${common.container} ${common.splitContainer} ${styles.caseStudyContainer}`}>
        <div className={common.text}>
          <div className={styles.title}>
            Adapting to your use case <span className={styles.heart}>&hearts;</span>
          </div>
          <div className={styles.subtitle}>
            <b>wgtwo</b> provides the platform with flexible APIs,
            allowing all customer segments to migrate to our core network. To learn more about how we are changing the game
            in the telecommunication space, check out the case studies to see how we can help your company. Our goal is to drive innovation and growth for your business.
          </div>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.caseStudyList}>
        <CaseStudyList length={6} />
      </div>
      <div className={common.container}>
        <a href="/case-studies" className={styles.caseStudyButton}>
          See all case studies
        </a>
      </div>
    </div>
  );
}

export default Component;
