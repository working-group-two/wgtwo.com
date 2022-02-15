import React from "react";
import styles from "./hero.module.css";
import common from "../../css/common.module.css";
import Image from "@theme/IdealImage";
import Link from "@docusaurus/Link";

function Component() {
  return (
    <div className={common.section}>
      <div className={`${common.container} ${common.splitContainer}`}>
        <div className={common.text}>
          <h1 className={styles.titleHeader}>
            Programmable. <br /> Scalable. <br /> Innovative. <br /> 
            Your new mobile core network.
            {/* <span className={`${styles.ak} ${styles.hn} ${styles.ah} ${styles.av} ${styles.ab}`}>Mobile core network.</span> */}
          </h1>
          <div className={common.subtitle}>
            No more boxes, no more end-of-life, no large upfront investments. With <b>wgtwo's</b> cloud-native mobile core network you get continuous innovation, reduced costs and tremendous scalability. To make it really simple for operators – it’s delivered as-a-service and grows as you grow. 
          </div>
          <div className={styles.buttons}>
            <Link to="/technology" className={`${common.button} ${common.buttonPrimary}`}>
              Our Technology
            </Link>
            <Link to="/request-demo" className={common.button}>
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
