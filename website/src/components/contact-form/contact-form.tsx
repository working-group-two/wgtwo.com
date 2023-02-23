import React, { useState } from "react"
import Layout from "@theme/Layout"
import common from "../../css/common.module.css"
import styles from "../../components/contact-form/contact-form.module.css"
import message from "../../util/message"
import { Calendar, HelpCircle, Mail, Building } from "lucide-react"
import Link from "@docusaurus/Link"
import NewsletterSignup from "../../components/newsletter-signup/newsletter-signup"
import Translate, { translate } from "@docusaurus/Translate"
import { validEmail } from "../../util/helpers"

let form = {
  company: React.createRef<HTMLInputElement>(),
  department: React.createRef<HTMLInputElement>(),
  familyname: React.createRef<HTMLInputElement>(),
  firstname: React.createRef<HTMLInputElement>(),
  email: React.createRef<HTMLInputElement>(),
  phone_number: React.createRef<HTMLInputElement>(),
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
    <div className={styles.form}>
      <input
        ref={form.company}
        placeholder={translate({
          message: "会社名",
          id: "contact.form.company",
          description: "Placeholder for the company field",
        })}
      />
      <input
        ref={form.department}
        placeholder={translate({
          message: "部署名",
          id: "contact.form.department",
          description: "Placeholder for the department field",
        })}
      />
      <input
        ref={form.familyname}
        placeholder={translate({
          message: "お名前 姓",
          id: "contact.form.familyname",
          description: "Placeholder for the familyname field",
        })}
        className={styles.span2}
      />
      <input
        ref={form.firstname}
        placeholder={translate({
          message: "お名前 名",
          id: "contact.form.firstname",
          description: "Placeholder for the firstname field",
        })}
        className={styles.span2}
      />
      <input
        className={formError && styles.hasError}
        ref={form.email}
        placeholder={translate({
          message: "メールアドレス ",
          id: "contact.form.email",
          description: "Placeholder for the email field",
        })}
      />
      <input
        ref={form.phone_number}
        placeholder={translate({
          message: "電話番号",
          id: "contact.form.phone_number",
          description: "Placeholder for the Phone Number field",
        })}
        className={styles.span2}
      />

      <textarea
        ref={form.message}
        placeholder={translate({
          message: "備考欄",
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
          送信する
        </Translate>
      </button>
      {formError && <div className={styles.formError}>{formError}</div>}
    </div>
  )
}

export default Contact
