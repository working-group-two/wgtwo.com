import React, { useState } from "react"
import Layout from "@theme/Layout"
import common from "../css/common.module.css"
import styles from "./contact.module.css"
import message from "../util/message"
import { Calendar, HelpCircle, Mail, Building } from "lucide-react"
import Link from "@docusaurus/Link"
import NewsletterSignup from "../components/newsletter-signup/newsletter-signup"
import Translate, { translate } from "@docusaurus/Translate"
import { validEmail } from "../util/helpers"

let form = {
  company: React.createRef<HTMLInputElement>(),
  email: React.createRef<HTMLInputElement>(),
  name: React.createRef<HTMLInputElement>(),
  message: React.createRef<HTMLTextAreaElement>(),
  button: React.createRef<HTMLButtonElement>(),
}

function Contact() {
  const [formError, setFormError] = useState("")

  function sendMessage() {
    setFormError("")

    if (!validEmail(form.email.current.value)) {
      setFormError(
        translate({
          message: "Email address is invalid",
          id: "contact.form.invalidEmail",
          description: "Error message when the email address is invalid",
        })
      )
      return
    }

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
                  Questions, feature requests, and ideas welcome!
                </Translate>
              </div>
            </div>
          </div>
          <div className={common.container}>
            <div className={styles.contactMethods}>
              <a href="mailto:contact@wgtwo.com">
                <Mail /> Email us at contact@wgtwo.com
              </a>
              <Link to="/request-demo">
                <Calendar /> Schedule a demo
              </Link>
              <a href="https://support.wgtwo.com" target="_blank">
                <HelpCircle /> Open a support ticket
              </a>
              <Link to="/docs/about/offices">
                <Building /> Meet us in person
              </Link>
            </div>
          </div>

          <div className={common.container}>
            <div className={styles.form}>
              <input
                ref={form.company}
                placeholder={translate({
                  message: "Company",
                  id: "contact.form.company",
                  description: "Placeholder for the company field",
                })}
              />
              <input
                className={formError && styles.hasError}
                ref={form.email}
                placeholder={translate({
                  message: "Work email address",
                  id: "contact.form.email",
                  description: "Placeholder for the email field",
                })}
              />
              <input
                ref={form.name}
                placeholder={translate({
                  message: "Name",
                  id: "contact.form.name",
                  description: "Placeholder for the name field",
                })}
                className={styles.span2}
              />
              <textarea
                ref={form.message}
                placeholder={translate({
                  message: "Your message",
                  id: "contact.form.message",
                  description: "Placeholder for the message field",
                })}
                className={styles.span2}
              />
              <button
                ref={form.button}
                onClick={() => sendMessage()}
                className={`${common.button} ${common.buttonPrimary} ${styles.span2}`}
              >
                <Translate
                  id="contact.form.button"
                  description="Button for the contact form"
                >
                  Send message
                </Translate>
              </button>
              {formError && <div className={styles.formError}>{formError}</div>}
            </div>
          </div>
        </div>

        <NewsletterSignup />
      </div>
    </Layout>
  )
}

export default Contact
