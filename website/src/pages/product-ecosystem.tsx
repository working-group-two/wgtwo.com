import React, { useState } from "react"
import ReactDOMServer from "react-dom/server"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import styles from "./product-ecosystem.module.css"
import common from "../css/common.module.css"
import {
  CheckCircle,
  CheckCircle2,
  FlagTriangleRight,
  Layers,
  LocateFixed,
  Timer,
} from "lucide-react"
import CTA from "../components/cta/cta"
import Image from "@theme/IdealImage"

import { Scrollbars } from "rc-scrollbars"
import ReactTooltip from "react-tooltip"

import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"

import * as RoadmapItems from "../util/RoadmapItems"

function Index() {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalContent, setModalContent] = useState([])
  const [modalOverlayAnimation, setModalOverlayAnimation] = useState("")
  const [modalDialogAnimation, setModalDialogAnimation] = useState("")

  const onOpenModal = () => {
    setModalDialogAnimation(styles.modalDialogSlideIn)
    setModalOverlayAnimation(styles.modalOverlayFadeIn)
    setModalVisible(true)
  }
  const onCloseModal = () => {
    setModalDialogAnimation(styles.modalDialogFadeOut)
    setModalOverlayAnimation(styles.modalOverlayFadeOut)
    setModalVisible(false)
  }

  const formatTooltipContent = data => {
    // ReactTooltip doesn't accept JSX, so have to format the content this way (as string)

    if (data) {
      const name = data[0]
      const desc = data[1]
      const source = data[2]

      return ReactDOMServer.renderToStaticMarkup(
        <div className={styles.tooltipContent}>
          <b>{name}</b>
          {desc && (
            <div style={{ lineHeight: "1.4em", marginTop: "1px" }}>{desc}</div>
          )}
          {source && (
            <small style={{ margin: "6px 0", display: "block", color: "#ccc" }}>
              ({source})
            </small>
          )}
        </div>
      )
    }

    return ""
  }

  // Modal content Template -- "modalContent" state variable holds the actual data
  function ModalContent() {
    const name = modalContent[0]
    const desc = modalContent[1]
    const source = modalContent[2]
    const link = modalContent[3]

    let linkRender

    if (link)
      linkRender = (
        <a href={link} target="_blank" style={{ color: "#1872ff" }}>
          {source}
        </a>
      )
    else linkRender = source

    return (
      <div style={{ width: "95%" }}>
        <h3>{name}</h3>
        <div style={{ marginBottom: "0.5em" }}>{desc}</div>
        <div>
          <small>{linkRender}</small>
        </div>
      </div>
    )
  }

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

        {/* Background image Credit: https://www.toptal.com/designers/subtlepatterns/whirlpool/ */}
        <div
          className={common.section}
          style={{
            paddingTop: "48px",
            paddingBottom: "60px",
            backgroundImage: "url('/img/whirlpool.webp')",
          }}
        >
          <div className={`${common.container} ${styles.roadmapSection}`}>
            <div className={common.title}>Roadmap</div>
            <div className={styles.roadmapContainer}>
              {/* Products on Radar */}
              <div className={styles.roadmapColumn}>
                <div className={styles.roadmapColumnTitle}>
                  <LocateFixed className={styles.titleIcon} /> Products on our
                  Radar <div className={styles.offCenterBalance}></div>
                </div>
                <div
                  className={`${styles.roadmapItemContainer} ${styles.productsOnRadar}`}
                >
                  <Scrollbars
                    universal
                    autoHeight
                    autoHeightMax={500}
                    className={styles.scrollbar}
                  >
                    {RoadmapItems.products_on_radar.map((item, index) => {
                      return (
                        <button
                          key={index}
                          className={styles.itemBtn}
                          data-tip={formatTooltipContent(item)}
                          data-for="rightTip"
                          onClick={() => {
                            onOpenModal()
                            setModalContent(item)
                          }}
                        >
                          {item[0]}
                        </button>
                      )
                    })}
                  </Scrollbars>
                </div>
              </div>

              {/* Backlog */}
              <div className={styles.roadmapColumn}>
                <div className={styles.roadmapColumnTitle}>
                  <Layers className={styles.titleIcon} /> Backlog{" "}
                  <div className={styles.offCenterBalance}></div>
                </div>
                <div
                  className={`${styles.roadmapItemContainer} ${styles.backlog}`}
                >
                  <Scrollbars
                    universal
                    autoHeight
                    autoHeightMax={500}
                    className={styles.scrollbar}
                  >
                    {RoadmapItems.backlog.map((item, index) => {
                      return (
                        <button
                          key={index}
                          className={styles.itemBtn}
                          data-tip={formatTooltipContent(item)}
                          data-for="rightTip"
                          onClick={() => {
                            onOpenModal()
                            setModalContent(item)
                          }}
                        >
                          {item[0]}
                        </button>
                      )
                    })}
                  </Scrollbars>
                </div>
              </div>

              {/* Coming soon */}
              <div className={styles.roadmapColumn}>
                <div className={styles.roadmapColumnTitle}>
                  <Timer className={styles.titleIcon} /> Coming soon{" "}
                  <div className={styles.offCenterBalance}></div>
                </div>
                <div
                  className={`${styles.roadmapItemContainer} ${styles.comingSoon}`}
                >
                  <Scrollbars
                    universal
                    autoHeight
                    autoHeightMax={500}
                    className={styles.scrollbar}
                  >
                    {RoadmapItems.coming_soon.map((item, index) => {
                      return (
                        <button
                          key={index}
                          className={styles.itemBtn}
                          data-tip={formatTooltipContent(item)}
                          data-for="rightTip"
                          onClick={() => {
                            onOpenModal()
                            setModalContent(item)
                          }}
                        >
                          {item[0]}
                        </button>
                      )
                    })}
                  </Scrollbars>
                </div>
              </div>

              {/* Live */}
              <div className={styles.roadmapColumn}>
                <div className={styles.roadmapColumnTitle}>
                  <CheckCircle className={styles.titleIcon} /> Live{" "}
                  <div className={styles.offCenterBalance}></div>
                </div>
                <div
                  className={`${styles.roadmapItemContainer} ${styles.live}`}
                >
                  <Scrollbars
                    universal
                    autoHeight
                    autoHeightMax={500}
                    className={styles.scrollbar}
                  >
                    {RoadmapItems.live.map((item, index) => {
                      return (
                        <button
                          key={index}
                          className={styles.itemBtn}
                          data-tip={formatTooltipContent(item)}
                          data-for="leftTip"
                          onClick={() => {
                            onOpenModal()
                            setModalContent(item)
                          }}
                        >
                          {item[0]}
                        </button>
                      )
                    })}
                  </Scrollbars>
                </div>
              </div>
            </div>

            {/* Roadmap Call-to-Action Buttons */}
            <div className={styles.roadmapCTAGrid}>
              <div className={styles.roadmapCTAColumn}>
                <div className={styles.roadmapCTATitle}>Developers</div>
                <div className={styles.roadmapCTAText}>
                  Drive distribution and monetize your products
                </div>
                <a
                  className={`${common.button} ${styles.altButton} ${styles.roadmapCTABtn}`}
                  href="https://auth.developer.wgtwo.com/"
                  target="_self"
                >
                  Developer Portal
                </a>
              </div>
              <div className={styles.roadmapCTAColumn}>
                <div className={styles.roadmapCTATitle}>Operators</div>
                <div className={styles.roadmapCTAText}>
                  Talk to us about differentiation and revenue growth
                </div>
                <Link
                  className={`${common.button} ${common.buttonPrimary} ${styles.roadmapCTABtn}`}
                  to="/contact"
                >
                  Talk with us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={common.container} style={{ paddingTop: "86px" }}>
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

      <Modal
        open={modalVisible}
        onClose={onCloseModal}
        center
        blockScroll={false}
        classNames={{
          modal: `${styles.modalDialog} ${modalDialogAnimation}`,
          overlay: `${styles.modalOverlay} ${modalOverlayAnimation}`,
          modalAnimationIn: styles.modalSlideIn,
        }}
      >
        <ModalContent />
      </Modal>

      <ReactTooltip
        id="rightTip"
        place="right"
        type="dark"
        effect="solid"
        delayShow={0}
        html
        getContent={html => html}
        className={styles.tooltipStyling}
        event="mouseenter"
        eventOff="mouseleave focusout"
      />
      <ReactTooltip
        id="leftTip"
        place="left"
        type="dark"
        effect="solid"
        delayShow={0}
        html
        getContent={html => html}
        className={styles.tooltipStyling}
        event="mouseenter"
        eventOff="mouseleave focusout"
      />
    </Layout>
  )
}

export default Index
