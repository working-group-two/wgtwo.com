import React, { useState } from "react"
import { translate } from "@docusaurus/Translate"
import Layout from "@theme/Layout"
import common from "../css/common.module.css"
import styles from "./contact.module.css"
import message from "../util/message"
import { validEmail, containsAngleBrackets } from "../util/helpers"

let form = {
  company: React.createRef<HTMLInputElement>(),
  email: React.createRef<HTMLInputElement>(),
  name: React.createRef<HTMLInputElement>(),
  subscriptionCount: React.createRef<HTMLInputElement>(),
  message: React.createRef<HTMLInputElement>(),
  button: React.createRef<HTMLButtonElement>(),
}

function RequestDemo() {
  const [formError, setFormError] = useState("")
  const [formErrorCompany, setFormErrorCompany] = useState(false)
  const [formErrorEmail, setFormErrorEmail] = useState(false)
  const [formErrorName, setFormErrorName] = useState(false)
  const [formErrorSubscriptionCount, setFormErrorSubscriptionCount] =
    useState(false)
  const [formErrorMessage, setFormErrorMessage] = useState(false)

  function sendMessage() {
    setFormError("")
    setFormErrorCompany(false)
    setFormErrorEmail(false)
    setFormErrorName(false)
    setFormErrorSubscriptionCount(false)
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

    if (containsAngleBrackets(form.company.current.value)) {
      setFormErrorCompany(true)
      angleBracketErrorHit = true
    }
    if (containsAngleBrackets(form.email.current.value)) {
      setFormErrorEmail(true)
      angleBracketErrorHit = true
    }
    if (containsAngleBrackets(form.name.current.value)) {
      setFormErrorName(true)
      angleBracketErrorHit = true
    }
    if (containsAngleBrackets(form.subscriptionCount.current.value)) {
      setFormErrorSubscriptionCount(true)
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
      `Message from wg2.com/request-demo\nName: ${form.name.current.value} \nEmail: ${form.email.current.value}\nCompany: ${form.company.current.value}\nNumber of Subscribers: ${form.subscriptionCount.current.value}\nMessage - Most Interested in: ${form.message.current.value}`
    )

    form.company.current.disabled = true
    form.email.current.disabled = true
    form.name.current.disabled = true
    form.subscriptionCount.current.disabled = true
    form.message.current.disabled = true

    form.button.current.innerText = "Request Sent!"
    form.button.current.disabled = true
  }

  return (
    <Layout title="Request a Demo">
      <div className={common.page}>
        <div className={common.section}>
          <div className={common.container}>
            <div className={common.centeredText}>
              <div className={common.title}>Request a demo.</div>
              <div className={common.subtitle}>
                <br />
                We'd love to show you around.
              </div>
            </div>
          </div>
          <div className={common.container}>
            <div className={styles.form}>
              <input
                className={formErrorCompany ? styles.hasError : ""}
                ref={form.company}
                placeholder="Company"
              />
              <input
                className={formErrorEmail ? styles.hasError : ""}
                ref={form.email}
                placeholder="Work email address"
              />
              <input
                className={formErrorName ? styles.hasError : ""}
                ref={form.name}
                placeholder="Name"
              />
              <input
                className={formErrorSubscriptionCount ? styles.hasError : ""}
                ref={form.subscriptionCount}
                placeholder="Subscription count"
              />
              <input
                className={`${formErrorMessage ? styles.hasError : ""} ${
                  styles.span2
                }`}
                ref={form.message}
                placeholder="Most interested in ..."
              />
              <button
                ref={form.button}
                onClick={() => sendMessage()}
                className={`${common.button} ${common.buttonPrimary} ${styles.span2}`}
              >
                Request a Demo
              </button>
              {formError && <div className={styles.formError}>{formError}</div>}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default RequestDemo
