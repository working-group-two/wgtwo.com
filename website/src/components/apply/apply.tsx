import React from "react";
import common from "../../css/common.module.css";
import styles from "../../pages/contact.module.css";

function Component() {
  return (
    <div className={styles.form}>
      <a target="_blank" href="https://wgtwo.jobs.personio.de/job/451724" className={`${common.button} ${common.buttonPrimary} ${styles.span2}`}> Submit Application to Personio </a>
    </div>
  );
}

export default Component;
