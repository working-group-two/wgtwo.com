import React, { useState } from "react"
import Layout from "@theme/Layout"
import styles from "./technology.module.css"
import common from "../css/common.module.css"
import { Check } from "lucide-react"
import SecurityHeader from "../components/security-header/security-header"
import SecurityDomains from "../components/security-domain/security-domain"
import SecurityLinks from "../components/security-links/security-links"
import contact from "./contact.module.css"
import message from "../util/message"
import { translate } from "@docusaurus/Translate"
import { validEmail, containsAngleBrackets } from "../util/helpers"

let form = {
  name: React.createRef<HTMLInputElement>(),
  email: React.createRef<HTMLInputElement>(),
  message: React.createRef<HTMLInputElement>(),
  button: React.createRef<HTMLButtonElement>(),
}

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
      `Message from wgtwo.com/security\nName: ${form.name.current.value}\nEmail: ${form.email.current.value}\nMessage: ${form.message.current.value}`
    )

    form.name.current.disabled = true
    form.email.current.disabled = true
    form.message.current.disabled = true

    form.button.current.innerText = "Your message was sent!"
    form.button.current.disabled = true
  }

  return (
    <Layout title="Security">
      <div className={common.page}>
        <SecurityHeader />
        {/* <hr className={styles.hr} /> */}
        <SecurityDomains />
        <SecurityLinks />

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
