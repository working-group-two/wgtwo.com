import React from "react"
import Layout from "@theme/Layout"
import styles from "./product-ecosystem.module.css"
import common from "../css/common.module.css"
import { CheckCircle2 } from "lucide-react"
import CTA from "../components/cta/cta"
import Image from "@theme/IdealImage"

function Index() {
  return (
    <Layout title="Technology">
      <div className={common.page}>
        <div className={common.section}>
          <div className={common.container}>
            <div className={common.centeredText}>
              <div className={common.title}>
                Advancing your mobile core. <br></br>Empowering developers.
              </div>
              <br />
              <div className={common.subtitle}>
                The Product Ecosystem is a turn key solution that scales across
                operators, fully self serviced, with no need for additional
                integration. It makes it possible for you to do product
                innovation and also get access to the growing number of products
                and services from 3rd party developers that join the platform.
                All products are available and ready to get launched, monetized,
                and supported at the click of a button.
              </div>
            </div>
          </div>
        </div>
        <div className={common.container}>
          <div className={styles.priceTiers}>
            <div className={styles.priceTier}>
              <div className={styles.priceTierTitle}>Developer Portal</div>
              <div className={styles.priceTierDescription}>
                Register as a developer on the <b>wgtwo</b> Developer Portal to
                build products leveraging core network events and media streams.
                <Image
                  alt="Developer Portal site"
                  className={styles.image}
                  img={require("../../static/img/developer-portal.png")}
                />
              </div>

              <div className={styles.price}>Create your API key today </div>
              <a
                className={`${common.button} ${styles.altButton}`}
                href="https://developer.wgtwo.com"
                target="_self"
              >
                Developer Portal
              </a>
              <div className={styles.priceTierFeatures}>
                <li>
                  <CheckCircle2 /> For 3rd party developers or operators
                </li>
                <li>
                  <CheckCircle2 /> Create a product for operators to enable as a
                  default feature
                </li>
                <li>
                  <CheckCircle2 /> Create a product for individuals
                </li>
                <li>
                  <CheckCircle2 /> Access to telco APIs including
                  Authentication, Events, Data, Subscription profiles,
                  Messaging, and Voice
                </li>
              </div>
            </div>

            <div className={styles.priceTier}>
              <a
                className={common.button}
                style={{
                  backgroundColor: "#2196F3",
                  border: "0",
                  color: "#fff",
                }}
                href="https://www.wgtwo.com"
              >
                Get Started for Free
              </a>
              <div className={styles.priceTierFeatures}>
                <li>
                  <CheckCircle2 /> For small teams and startups
                </li>
                <li>
                  <CheckCircle2 /> $X / GB of cache transfer over 100 GB
                </li>
                <li>
                  <CheckCircle2 /> Up to 800 cores for remote builds
                </li>
                <li>
                  <CheckCircle2 /> Email support
                </li>
              </div>
            </div>

            <div className={styles.priceTier}>
              <div className={styles.priceTierTitle}>Storefront</div>
              <div className={styles.priceTierDescription}>
                Your platform to market your application to customers across{" "}
                <b>wgtwo</b> operators.
                <Image
                  alt="wgtwo storefront"
                  className={styles.image}
                  img={require("../../static/img/storefront.png")}
                />
              </div>
              <div className={styles.price}>Find a new app today</div>
              <a
                className={`${common.button} ${common.buttonPrimary}`}
                href="https://storefront.wgtwo.com"
                target="_self"
              >
                Storefront
              </a>
              <div className={styles.priceTierFeatures}>
                <li>
                  <CheckCircle2 /> Application Market for your telco
                  subscription
                </li>
                <li>
                  <CheckCircle2 /> Approved and secure applications
                </li>
                <li>
                  <CheckCircle2 /> Let your subscribers self service on products
                </li>
                <li>
                  <CheckCircle2 /> Let your subscribers add products when buying
                  a SIM, and/or let them add more products later
                </li>
              </div>
            </div>
          </div>
        </div>

        <CTA />
      </div>
    </Layout>
  )
}

export default Index
