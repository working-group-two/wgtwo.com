import React from "react";
import common from "../../css/common.module.css";
import styles from "./integrations.module.css";
import Image from "@theme/IdealImage";

function Component() {
  return (
    <div className={`${common.section} ${common.sectionGray} ${styles.integrationSection}`}>
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
            style={{ padding: "20px 0"}}
            img={require("../../../static/img/vimla.png")}
          />
          <Image
            alt="Altibox Logo"
            className={styles.logo}
            style={{ padding: "20px 0", height: "90px" }}
            img={require("../../../static/img/altibox.png")}
          />
          <Image
            alt="Cisco"
            className={styles.logo}
            style={{ padding: "20px 0" }}
            img={require("../../../static/img/cisco.png")}
          />
          <Image
            alt="3 Logo"
            className={styles.logo}
            style={{ padding: "24px 0" }}
            img={require("../../../static/img/3.png")}
          />
          <Image
            alt="Hutch CKH Logo"
            className={styles.logo}
            style={{ padding: "20px 0" }}
            img={require("../../../static/img/ckh.png")}
          />
          <Image
            alt="Atos Logo"
            className={styles.logo}
            style={{ padding: "20px 0", height: "80px" }}
            img={require("../../../static/img/atos.png")}
          />
          <Image
            alt="Televox Logo"
            className={styles.logo}
            style={{ padding: "20px 0" }}
            img={require("../../../static/img/televox.png")}
          />
          <Image
            alt="University of Maryland Logo"
            className={styles.logo}
            style={{ padding: "20px 0" }}
            img={require("../../../static/img/university-of-maryland.png")}
          />
          <Image
            alt="e-Rate Logo"
            className={styles.logo}
            style={{ padding: "20px 0" }}
            img={require("../../../static/img/e-rate.png")}
          />
          <Image
            alt="AWS Integration"
            className={styles.logo}
            style={{ padding: "24px 0" }}
            img={require("../../../static/img/aws.png")}
          />
          <Image
            alt="Enghouse-Networks Logo"
            className={styles.logo}
            style={{ padding: "24px 0" }}
            img={require("../../../static/img/enghouse-networks.png")}
          />
          <Image
            alt="Happybytes Logo"
            className={styles.logo}
            style={{ padding: "24px 0" }}
            img={require("../../../static/img/happybytes.png")}
          />
          <Image
            alt="Telenor Logo"
            className={styles.logo}
            style={{ padding: "24px 0" }}
            img={require("../../../static/img/telenor.png")}
          />

          <Image
            alt="Fjordkraft Logo"
            className={styles.logo}
            style={{ padding: "24px 0" }}
            img={require("../../../static/img/fjordkraft.png")}
          />
          <Image
            alt="nortel Logo"
            className={styles.logo}
            style={{ padding: "24px 0", height: "80px" }}
            img={require("../../../static/img/nortel.png")}
          />
          <Image
            alt="MKI Logo"
            className={styles.logo}
            style={{ padding: "24px 0" }}
            img={require("../../../static/img/mki.png")}
          />
        </div>
      </div>
    </div>
  );
}

export default Component;
