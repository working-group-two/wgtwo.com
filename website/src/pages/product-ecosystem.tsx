import React, { useState } from "react"
import ReactDOMServer from "react-dom/server"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
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

import ReactTooltip from "react-tooltip"

import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"

import * as RoadmapItems from "../util/RoadmapItems"

// declaring last to easily override the styles of everything imported above
import styles from "./product-ecosystem.module.css"

// Tooltip Template -- moved out here bc <RoadmapColumn> (declared at bottom) uses it
const formatTooltipContent = data => {
  // ReactTooltip doesn't accept JSX, so have to format the content this way (as string)

  if (!data) return ""

  const { title: name, text: desc, source } = data

  return ReactDOMServer.renderToStaticMarkup(
    <div className={styles.tooltipContent}>
      <div className={styles.tooltipTitle}>{name}</div>
      {desc && <div className={styles.tooltipDescription}>{desc}</div>}
      {source && <small className={styles.tooltipSmallText}>({source})</small>}
    </div>
  )
}

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

  // Modal content Template -- "modalContent" state variable holds the actual data
  function ModalContent() {
    const { title: name, text: desc, source, link } = modalContent

    let linkRender = link ? (
      <a href={link} target="_blank" className={styles.modalLink}>
        {source}
      </a>
    ) : (
      source
    )

    return (
      <div className={styles.modalContent}>
        <h3>{name}</h3>
        <div className={styles.modalText}>{desc}</div>
        <div>
          <small>{linkRender}</small>
        </div>
      </div>
    )
  }

  return (
    <Layout title="Product ecosystem">
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
            display: "none",
          }}
        >
          <div className={`${common.container} ${styles.roadmapSection}`}>
            <div className={common.title}>Roadmap</div>
            <div className={styles.roadmapContainer}>
              <RoadmapColumn
                title="Products on our Radar"
                icon={<LocateFixed className={styles.titleIcon} />}
                titleClass={styles.productsOnRadarTitle}
                itemsClass={styles.productsOnRadar}
                tooltipId="rightTip"
                items={RoadmapItems.products_on_radar}
                clickFn={item => {
                  onOpenModal()
                  setModalContent(item)
                }}
              />

              <RoadmapColumn
                title="Backlog"
                icon={<Layers className={styles.titleIcon} />}
                titleClass={styles.backlogTitle}
                itemsClass={styles.backlog}
                tooltipId="rightTip"
                items={RoadmapItems.backlog}
                clickFn={item => {
                  onOpenModal()
                  setModalContent(item)
                }}
              />

              <RoadmapColumn
                title="Coming soon"
                icon={<Timer className={styles.titleIcon} />}
                titleClass={styles.comingSoonTitle}
                itemsClass={styles.comingSoon}
                tooltipId="rightTip"
                items={RoadmapItems.coming_soon}
                clickFn={item => {
                  onOpenModal()
                  setModalContent(item)
                }}
              />

              <RoadmapColumn
                title="Live"
                icon={<CheckCircle className={styles.titleIcon} />}
                titleClass={styles.liveTitle}
                itemsClass={styles.live}
                tooltipId="leftTip"
                items={RoadmapItems.live}
                clickFn={item => {
                  onOpenModal()
                  setModalContent(item)
                }}
              />
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
        className={common.tooltipStyling}
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
        className={common.tooltipStyling}
        event="mouseenter"
        eventOff="mouseleave focusout"
      />
    </Layout>
  )
}

export default Index

function RoadmapColumn({
  icon,
  title,
  titleClass,
  itemsClass,
  tooltipId,
  items,
  clickFn,
}) {
  return (
    <>
      <div className={`${styles.roadmapColumnTitle} ${titleClass}`}>
        {icon}
        <h3>{title}</h3>
        <div className={styles.offCenterBalance}></div>
      </div>
      <div className={`${styles.roadmapItemContainer} ${itemsClass}`}>
        {items.map((item, index) => {
          return (
            <button
              key={index}
              className={styles.itemBtn}
              data-tip={formatTooltipContent(item)}
              data-for={tooltipId}
              onClick={() => {
                clickFn(item)
              }}
            >
              {item.title}
            </button>
          )
        })}
      </div>
    </>
  )
}
