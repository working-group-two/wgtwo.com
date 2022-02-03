import React from "react";
import styles from "./enterprise.module.css";
import common from "../../css/common.module.css";
import { PhoneCall, MessageSquare, BarChart, DownloadCloud, Slack, Laptop2 } from "lucide-react";

function Component() {
  return (
    <div className={common.section}>
      <div className={common.container}>
        <div className={common.centeredText}>
          <h2 className={common.title}>Your next generation core</h2>
          <div className={common.subtitle}>
          <b>wgtwo</b> core offers the full set of capabilities related to authentication, provisioning, voice, messaging and data services - transforming your existing business to the next level.
          </div>
        </div>
      </div>
      <div className={common.container}>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <MessageSquare />
            </div>
            <div className={styles.featureTitle}>Messaging</div>
            <div className={styles.featureDescription}>
              SMS, MMS traffic and serving secure voicemail.
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <PhoneCall />
            </div>
            <div className={styles.featureTitle}>Voice</div>
            <div className={styles.featureDescription}>
              Reliable voice SIP traffic across 2G, 3G, 4G (VoLTE).
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <DownloadCloud />
            </div>
            <div className={styles.featureTitle}>Data</div>
            <div className={styles.featureDescription}>
              Fast, secure, geo-region, and reliable data connections serving all of your subscriber's requirements.
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <BarChart />
            </div>
            <div className={styles.featureTitle}>Connectivity</div>
            <div className={styles.featureDescription}>
              Secure authentication and provisioning SIM cards.
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <Laptop2 />
            </div>
            <div className={styles.featureTitle}>Console</div>
            <div className={styles.featureDescription}>
              Provision new subscribers, enable new features, customer service requests.
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <Slack />
            </div>
            <div className={styles.featureTitle}>Support</div>
            <div className={styles.featureDescription}>
              24/7 Level 3 Support.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
