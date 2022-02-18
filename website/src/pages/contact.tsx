import React from "react"
import Layout from "@theme/Layout"
import common from "../css/common.module.css"
import styles from "./contact.module.css"
import message from "../util/message"
import { Calendar, HelpCircle, Mail, Building } from "lucide-react"
import Link from "@docusaurus/Link"

let form = {
  company: React.createRef<HTMLInputElement>(),
  email: React.createRef<HTMLInputElement>(),
  name: React.createRef<HTMLInputElement>(),
  message: React.createRef<HTMLTextAreaElement>(),
  button: React.createRef<HTMLButtonElement>(),
}

function Contact() {
  return (
    <Layout title="Contact Us">
      <div className={common.page}>
        <div className={common.section}>
          <div className={common.container}>
            <div className={common.centeredText}>
              <div className={common.title}>
                Get in touch,
                <br />
                we love to chat.
              </div>
              <div className={common.subtitle}>
                <br />
                Questions, feature requests, and ideas welcome!
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
              <input ref={form.company} placeholder="Company" />
              <input ref={form.email} placeholder="Work email address" />
              <input
                ref={form.name}
                placeholder="Name"
                className={styles.span2}
              />
              <textarea
                ref={form.message}
                placeholder="Your message"
                className={styles.span2}
              />
              <button
                ref={form.button}
                onClick={() => sendMessage()}
                className={`${common.button} ${common.buttonPrimary} ${styles.span2}`}
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function sendMessage() {
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

export default Contact
