import React from "react";
import common from "../../css/common.module.css";
import styles from "./security-domain.module.css";
import SecurityDomainList from "./security-domain-list";
import Image from "@theme/IdealImage";
import Link from "@docusaurus/Link";

function Component() {
  return (
    <div className={`${common.section} ${common.sectionDark}`}>
      <div className={`${common.container} ${common.splitContainer} ${styles.securityDomainContainer}`}>
        <div className={common.text}>
          <div className={styles.title}>
          Security is at the forefront of how wgtwo builds its mobile core network.
          </div>
          <div className={styles.subtitle}>
          Every person, team, customer, and organization deserves and expects their data to be secure and confidential. <b>wgtwo</b> continues to work hard to ensure the safeguarding of this data by focusing on implementing security controls across various domains. 
          </div>
        </div>
      </div>
      {/* <hr className={styles.hr} /> */}

      <div className={styles.SecurityDomainList}>
        <div className={common.container}>
          <SecurityDomainList length={6} />
        </div>
      </div>
      <div className={common.container}>
        <Link to="/docs/technology/security-whitepaper" className={styles.securityDomainButton}>
          Read our security whitepaper
        </Link>
      </div>
    </div>
  );
}

export default Component;
