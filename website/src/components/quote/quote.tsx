import React from "react";
import common from "../../css/common.module.css";
import styles from "./quote.module.css";

function Component() {
  return (
    <div className={`${common.section} ${common.sectionDark} ${common.sectionRounded}`}>
      <div className={`${common.container} ${styles.stats}`}>
        <div className={styles.stat}>
          <div className={styles.statNumber}>10</div>
          <div className={styles.statTitle}>months of integration</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNumber}>80,000</div>
          <div className={styles.statTitle}>SIMs</div>
        </div>
      </div>
      <div className={common.container}>
        <div className={common.centeredText}>
          <h2 className={styles.quote}>
            "Our collaboration with Working Group Two to deploy our core network on the public cloud delivers simplicity, improved operational efficiency and the ability to quickly develop new initiatives to meet market needs, with particular focus on the MVNO, IoT and Private Network space. It’s about achieving scale and the highest levels of security while reducing complexity – to the benefit of our customers and ultimately, end-users in our markets.”
          </h2>
          <div className={styles.attribution}>
            <b>Joe Parker, CEO of CKH IOD </b>
            <br />
            
          </div>
        </div>
      </div>
      <div className={common.container}>
        <img alt="CKH Logo" className={styles.logo} width="125px" height="100px" src="/img/ckh.svg" />
      </div>
    </div>
  );
}

export default Component;
