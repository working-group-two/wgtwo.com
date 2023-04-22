import React, { useState } from "react"
import Layout from "@theme/Layout"
import styles from "./technology.module.css"
import common from "../css/common.module.css"
import TechnologyMetricList from "../components/technologymetrics/technologymetrics-list"
import Multig from "../components/multig/multig"
import Ourservice from "../components/ourservice/ourservice"
import contact from "./contact.module.css"
import message from "../util/message"
import Link from "@docusaurus/Link"
import { translate } from "@docusaurus/Translate"
import { validEmail, containsAngleBrackets } from "../util/helpers"
import ReactTooltip from "react-tooltip"

import FeaturesSidebar from "../features.sidebar"

import {
  MessageSquare,
  PhoneCall,
  Binary,
  Check,
  ChevronRight,
  Info,
  MousePointer,
  MousePointerClick,
  Asterisk,
} from "lucide-react"

let form = {
  name: React.createRef<HTMLInputElement>(),
  email: React.createRef<HTMLInputElement>(),
  message: React.createRef<HTMLInputElement>(),
  button: React.createRef<HTMLButtonElement>(),
}

const basePathToFeatures = "/technology/features/"

function Index() {
  const [formError, setFormError] = useState("")
  const [formErrorName, setFormErrorName] = useState(false)
  const [formErrorEmail, setFormErrorEmail] = useState(false)
  const [formErrorMessage, setFormErrorMessage] = useState(false)

  function sendMessage() {
    setFormError("")
    setFormErrorName(false)
    setFormErrorEmail(false)
    setFormErrorMessage(false)

    // ERROR CHECK 1: INVALID EMAIL

    if (!validEmail(form.email.current.value)) {
      setFormErrorEmail(true)
      setFormError(
        translate({
          message: "Email address is invalid",
          id: "contact.form.invalidEmail",
          description: "Error message when the email address is invalid",
        })
      )
      return
    }

    // ERROR CHECK 2: ANGLE BRACKETS < > IN ANY FIELD

    let angleBracketErrorHit = false

    if (containsAngleBrackets(form.name.current.value)) {
      setFormErrorName(true)
      angleBracketErrorHit = true
    }
    if (containsAngleBrackets(form.email.current.value)) {
      setFormErrorEmail(true)
      angleBracketErrorHit = true
    }
    if (containsAngleBrackets(form.message.current.value)) {
      setFormErrorMessage(true)
      angleBracketErrorHit = true
    }

    if (angleBracketErrorHit) {
      setFormError(
        translate({
          message: "Text cannot contain < or >",
          id: "contact.form.angleBracketsInField",
          description: "Error message when a text field contains < or >",
        })
      )

      return
    }

    // SEND MESSAGE

    message(
      `New question from Technology page!\nName: ${form.name.current.value}\nEmail: ${form.email.current.value}\nMessage: ${form.message.current.value}`
    )

    form.name.current.disabled = true
    form.email.current.disabled = true
    form.message.current.disabled = true

    form.button.current.innerText = "New Case Study Submitted!"
    form.button.current.disabled = true
  }

  return (
    <Layout title="Technology">
      <div className={common.page}>
        <div className={common.section}>
          <div className={common.container}>
            <div className={common.centeredText}>
              <div className={common.title}>Let's dig into our core.</div>
              <div className={common.subtitle}>
                <br />
                <b>wgtwo</b> is building a future proof technology that reduces
                cost and complexity while radically enhancing innovation
                potential in the telecom industry. Our core is continuously
                evolving. We improve its security, scalability, redundancy,
                features, and integrations every day. Leveraging a modern
                DevSecOps approach, our customers get a continuously improving
                core network.
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${common.section} ${common.sectionDark} ${styles.technologyMetricsSection}`}
        >
          <div className={common.container}>
            <h1>
              In {new Date().getFullYear() - 1}, we helped our customers deliver
            </h1>
            <TechnologyMetricList />
          </div>
        </div>
        <Multig />

        <div
          className={common.section}
          style={{
            marginTop: "0px",
            paddingTop: "80px",
            paddingBottom: "120px",
          }}
        >
          <div className={common.container} style={{ gap: "0" }}>
            <div style={{ textAlign: "center" }}>
              <h1>Features</h1>
              <p>
                <MousePointer
                  size={16}
                  color="#999"
                  style={{ marginRight: "5px" }}
                />
                Hover over features for quick definitions.
                <MousePointerClick
                  size={19}
                  color="#999"
                  style={{ margin: "0 5px" }}
                />
                Click for more details
              </p>
            </div>
            <div className={styles.featureListGrid}>
              {FeaturesSidebar.map((category, index) => {
                return (
                  <FeatureItemsColumn
                    categoryLabel={category.label}
                    color={category.color}
                    iconName={category.icon}
                    items={category.items}
                    tooltipId="leftTip"
                    key={index}
                  />
                )
              })}
            </div>
          </div>
        </div>

        <Ourservice />
        <br />
        <br />
        <br />
        <br />
        <div className={common.container}>
          <div className={common.centeredText}>
            <div className={common.title}>Questions & Answers</div>
          </div>
        </div>
        <div className={common.container}>
          <div className={styles.questions}>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>
                Q: What do I gain when migrating my subscribers to wgtwo?
              </div>
              <div className={styles.answerAnswer}>
                <u>Operational simplicity</u>: Operators get the services in a
                managed SaaS model. This implies that we take care of
                operations, 24/7, upgrades, tickets, moving the operator to the
                next generation of technology and more.
                <br />
                <u>Architectural simplicity</u>: The core is built with
                inspiration from hyperscalers and modern technology companies.
                We terminate telco complexity at the edge of the network, which
                drives simplicity and efficiency on the inside of the network.
                <br />
                <u>Financial simplicity</u>: A set-up fee and a SIM fee. Those
                two elements generally cover our main agreement. We aim for a
                simple and transparent price annex.
                <br />
                <u>Affordability</u>: The choice of operating model,
                architecture and technology drive radical cost savings that are
                passed on to our customers.
                <br />
                <u>Faster and lower risk delivery</u>: Through pre-integrating
                all the various functions and nodes, we reduce cost, complexity
                and time involved in integration and deployment.
                <br />
                <u>Innovation</u>: The next “G” in telecom is always
                significant, but it doesn’t allow one operator to stand out from
                the rest. We provide operators the ability to do
                micro-innovation at scale, allowing the launch of many products
                to fit many segments.
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.questionQuestion}>
                Q: How many subscribers does wgtwo core support?
              </div>
              <div className={styles.answerAnswer}>
                Our core provides operators with a flexible, affordable, fully
                featured MNO-grade core that can scale down to small private
                network deployments, and up to operators with millions of
                subscribers.
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className={`${common.section} ${common.sectionDark}`}>
          <div className={`${common.container} ${common.splitContainer}`}>
            <div className={common.text}>
              <div className={common.title}>
                You still have a question in mind?
              </div>
              <div className={common.subtitle}>We love to tell you more!</div>
            </div>
            <div className={contact.form}>
              <input
                className={formErrorName ? contact.hasError : ""}
                ref={form.name}
                placeholder="Name"
              />
              <input
                className={formErrorEmail ? contact.hasError : ""}
                ref={form.email}
                placeholder="Email address"
              />
              <input
                className={`${formErrorMessage ? contact.hasError : ""} ${
                  contact.span2
                }`}
                ref={form.message}
                placeholder="Message"
              />
              <button
                ref={form.button}
                onClick={() => sendMessage()}
                className={`${common.button} ${common.buttonPrimary} ${contact.span2}`}
              >
                Submit your message
              </button>
              {formError && (
                <div className={contact.formError}>{formError}</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ReactTooltip
        id="topTip"
        place="top"
        type="dark"
        effect="solid"
        delayShow={0}
        className={`${common.tooltipStyling} ${styles.tooltipStyling}`}
      />
      <ReactTooltip
        id="leftTip"
        place="left"
        type="dark"
        effect="solid"
        delayShow={0}
        className={`${common.tooltipStyling} ${styles.tooltipStyling}`}
      />
    </Layout>
  )
}

function No() {
  return <div></div>
}

function Yes() {
  return (
    <div className={styles.check}>
      <Check color="#4CAF50" />
    </div>
  )
}

export default Index

function FeatureItemsColumn({
  categoryLabel,
  color,
  iconName,
  items,
  tooltipId,
}) {
  let Icon = ChevronRight

  if (iconName)
    switch (iconName.toLowerCase()) {
      case "messagesquare":
        Icon = MessageSquare
        break
      case "phonecall":
        Icon = PhoneCall
        break
      case "binary":
        Icon = Binary
        break
    }

  return (
    <div className={styles.featureListContainer}>
      <h4 style={{ color }}>
        <Icon /> {categoryLabel}
      </h4>
      <ul className={styles.featureList}>
        {items &&
          items.map((item, index) => {
            return (
              <li key={index} data-tip={item.tooltipText} data-for={tooltipId}>
                <LinkToFeature category={categoryLabel} item={item} />
              </li>
            )
          })}
      </ul>
    </div>
  )
}

// If href is defined return <Link>, else return non-link element <div>
function LinkToFeature({ children, category, item }) {
  const categorySlug = category.toLowerCase()

  const InfoIcon = item.tooltipText ? (
    <Info className={styles.featureInfoIcon} />
  ) : (
    <></>
  )

  if (item.href)
    return (
      <Link
        href={`${basePathToFeatures}${categorySlug}${item.href}`}
        className={styles.featureItemLink}
      >
        <div className={styles.featureBtnIcons}>
          <ChevronRight className={styles.featureViewIcon} />
        </div>
        <span>{item.name}</span>
        <div className={styles.featureBtnIcons}>
          {/*<Plus className={styles.featureAddIcon} />*/}
          {InfoIcon}
        </div>
      </Link>
    )
  else
    return (
      <div className={styles.featureItemNonLink}>
        <div className={styles.featureBtnIcons}>
          <Asterisk className={styles.featureViewIcon} />
        </div>
        <span>{item.name}</span>
        <div className={styles.featureBtnIcons}>{InfoIcon}</div>
      </div>
    )
}
