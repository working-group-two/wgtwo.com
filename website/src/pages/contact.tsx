import React, { useState } from "react"
import Layout from "@theme/Layout"
import common from "../css/common.module.css"
import styles from "./contact.module.css"
import message from "../util/message"
import { Calendar, HelpCircle, Mail, Building } from "lucide-react"
import Link from "@docusaurus/Link"
import NewsletterSignup from "../components/newsletter-signup/newsletter-signup"
import Translate, { translate } from "@docusaurus/Translate"
import { validEmail, containsAngleBrackets } from "../util/helpers"

let form = {
  company: React.createRef<HTMLInputElement>(),
  email: React.createRef<HTMLInputElement>(),
  name: React.createRef<HTMLInputElement>(),
  message: React.createRef<HTMLTextAreaElement>(),
  button: React.createRef<HTMLButtonElement>(),
}

function Contact() {
  const [formError, setFormError] = useState("")
  const [formErrorCompany, setFormErrorCompany] = useState(false)
  const [formErrorEmail, setFormErrorEmail] = useState(false)
  const [formErrorName, setFormErrorName] = useState(false)
  const [formErrorMessage, setFormErrorMessage] = useState(false)

  function sendMessage() {
    setFormError("")
    setFormErrorCompany(false)
    setFormErrorEmail(false)
    setFormErrorName(false)
    setFormErrorMessage(false)

    // ERROR CHECK 1: INVALID EMAIL

    if (!validEmail(form.email.current.value)) {
      setFormErrorEmail(true)
      setFormError(
        translate({
          message: "Email address is invalid. Please use a company email.",
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
      `Message from wgtwo.com/contact\nName: ${form.name.current.value}\nEmail: ${form.email.current.value}\nCompany: ${form.company.current.value}\nMessage: ${form.message.current.value}`
    )

    form.name.current.disabled = true
    form.email.current.disabled = true
    form.company.current.disabled = true
    form.message.current.disabled = true

    form.button.current.innerText = "Message Sent!"
    form.button.current.disabled = true
  }

  return (
    <Layout title="Contact Us">
      <div className={common.page}>
        <div className={common.section}>
          <div className={common.container}>
            <div className={common.centeredText}>
              <div className={common.title}>
                <Translate
                  id="contact.title1"
                  description="Title for the first line of the contact section"
                >
                  Get in touch,
                </Translate>
                <br />
                <Translate
                  id="contact.title2"
                  description="Title for the second line of the contact section"
                >
                  we love to chat.
                </Translate>
              </div>
              <div className={common.subtitle}>
                <br />
                <Translate
                  id="contact.subtitle"
                  description="Subtitle for the contact section"
                >
                  Please contact your Cisco representative for further information
                </Translate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
