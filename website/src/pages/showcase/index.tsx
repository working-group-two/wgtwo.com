import React from "react"
import Layout from "@theme/Layout"
import common from "../../css/common.module.css"
import styles from "./index.module.css"
import contact from "../contact.module.css"
import ShowcaseList from "./showcase-list"
import message from "../../util/message"

let form = {
  name: React.createRef<HTMLInputElement>(),
  email: React.createRef<HTMLInputElement>(),
  message: React.createRef<HTMLInputElement>(),
  button: React.createRef<HTMLButtonElement>(),
}

function CaseStudies() {
  return (
    <Layout title="wgtwo">
      <div className={common.page} style={{display: 'none'}}>
        <div className={common.section}>
          <div className={common.container}>
            <div className={common.centeredText}>
              <div className={common.title}>Industry showcase</div>
              <div className={common.subtitle}>
                <br />
                <b>wgtwo</b>'s goal is to drive innovation and growth for your
                business.
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${common.section} ${common.sectionDark} ${common.sectionLessBottom} ${styles.caseStudySection}`}
        >
          <div className={common.container}>
            <ShowcaseList />
          </div>
        </div>
        <div
          className={`${common.section} ${common.sectionDark} ${styles.caseStudySection}`}
        >
          <div className={`${common.container} ${common.splitContainer}`}>
            <div className={common.text}>
              <div className={common.title}>
                Don't see your business case study in the list?
              </div>
              <div className={common.subtitle}>
                We love to solve your business problems of all sizes!{" "}
              </div>
            </div>
            <div className={contact.form}>
              <input ref={form.name} placeholder="Name" />
              <input ref={form.email} placeholder="Email address" />
              <input
                ref={form.message}
                placeholder="Message"
                className={contact.span2}
              />
              <button
                ref={form.button}
                onClick={() => sendMessage()}
                className={`${common.button} ${common.buttonPrimary} ${contact.span2}`}
              >
                Submit your message
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
    `Message from wgtwo.com/case-studies\nName: ${form.name.current.value}\nEmail: ${form.email.current.value}\nMessage: ${form.message.current.value}`
  )

  form.name.current.disabled = true
  form.email.current.disabled = true
  form.message.current.disabled = true

  form.button.current.innerText = "Your message was sent!"
  form.button.current.disabled = true
}

export default CaseStudies
