import React from "react"
import styles from "./enterprise.module.css"
import common from "../../css/common.module.css"
import {
  PhoneCall,
  MessageSquare,
  BarChart,
  DownloadCloud,
  Slack,
  Laptop2,
} from "lucide-react"
import Translate from "@docusaurus/Translate"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

function Component() {
  const { i18n } = useDocusaurusContext()
  return (
    <div className={common.section}>
      <div className={common.container}>
        <div className={common.centeredText}>
          <h2 className={common.title}>Your next generation core</h2>
          <div
            className={
              i18n.currentLocale === "en" ? common.subtitle : common.subtitleJp
            }
          >
            <Translate
              id="home.enterprise.subtitle"
              description="Subtitle for the enterprise section"
            >
              WG2 core offers the full set of capabilities related to
              authentication, provisioning, voice, messaging and data services -
              transforming your existing business to the next level.
            </Translate>
          </div>
        </div>
      </div>
      <div className={common.container}>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <DownloadCloud />
            </div>
            <div className={styles.featureTitle}>Data</div>
            <div
              className={
                i18n.currentLocale === "en"
                  ? styles.featureDescription
                  : styles.featureDescriptionJp
              }
            >
              <Translate
                id="home.enterprise.data.description"
                description="Description for the data feature"
              >
                Fast, secure, geo-region, and reliable data connections serving
                all of your subscriber's requirements.
              </Translate>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <MessageSquare />
            </div>
            <div className={styles.featureTitle}>Messaging</div>
            <div
              className={
                i18n.currentLocale === "en"
                  ? styles.featureDescription
                  : styles.featureDescriptionJp
              }
            >
              <Translate
                id="home.enterprise.messaging.description"
                description="Description for the messaging feature"
              >
                SMS, MMS traffic and serving secure voicemail.
              </Translate>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <PhoneCall />
            </div>
            <div className={styles.featureTitle}>Voice</div>
            <div
              className={
                i18n.currentLocale === "en"
                  ? styles.featureDescription
                  : styles.featureDescriptionJp
              }
            >
              <Translate
                id="home.enterprise.voice.description"
                description="Description for the voice feature"
              >
                Reliable voice SIP traffic across 2G, 3G, 4G (VoLTE).
              </Translate>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <BarChart />
            </div>
            <div className={styles.featureTitle}>Connectivity</div>
            <div
              className={
                i18n.currentLocale === "en"
                  ? styles.featureDescription
                  : styles.featureDescriptionJp
              }
            >
              <Translate
                id="home.enterprise.connectivity.description"
                description="Description for the connectivity feature"
              >
                Secure authentication and provisioning SIM cards.
              </Translate>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <Laptop2 />
            </div>
            <div className={styles.featureTitle}>Console</div>
            <div
              className={
                i18n.currentLocale === "en"
                  ? styles.featureDescription
                  : styles.featureDescriptionJp
              }
            >
              <Translate
                id="home.enterprise.console.description"
                description="Description for the console feature"
              >
                Provision new subscribers, enable new features, customer service
                requests.
              </Translate>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <Slack />
            </div>
            <div className={styles.featureTitle}>Support</div>
            <div
              className={
                i18n.currentLocale === "en"
                  ? styles.featureDescription
                  : styles.featureDescriptionJp
              }
            >
              <Translate
                id="home.enterprise.support.description"
                description="Description for the support feature"
              >
                24/7 Level 3 Support.
              </Translate>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component
