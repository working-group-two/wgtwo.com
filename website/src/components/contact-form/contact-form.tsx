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
  terms_agreed: React.createRef<HTMLInputElement>(),
  message: React.createRef<HTMLTextAreaElement>(),
  button: React.createRef<HTMLButtonElement>(),
}

function Contact() {
  const [emailError, setEmailError] = useState("")
  const [termsError, setTermsError] = useState("")

  function sendMessage() {
    setEmailError("")
    setTermsError("")

    if (!validEmail(form.email.current.value)) {
      setEmailError(
        translate({
          message: "Email address is invalid",
          id: "contact.form.invalidEmail",
          description: "Error message when the email address is invalid",
        })
      )
      return
    }

    if (form.terms_agreed.current.checked === false) {
      setTermsError(
        translate({
          message: "You have to agree to the Terms of Use!",
          id: "contact.form.notAgreedToTerms",
          description:
            "Error message when terms of use agreed checkbox is not checked",
        })
      )
      return
    }

    message(
      `Message from wgtwo.com/implementation\n
      Name: ${form.familyname.current.value} ${form.firstname.current.value}\n
      Email: ${form.email.current.value}\n
      Phone: ${form.phone_number.current.value}\n
      Company: ${form.company.current.value}\n
      Department: ${form.department.current.value}\n
      Message: ${form.message.current.value}`
    )

    form.familyname.current.disabled = true
    form.firstname.current.disabled = true
    form.email.current.disabled = true
    form.phone_number.current.disabled = true
    form.company.current.disabled = true
    form.department.current.disabled = true
    form.terms_agreed.current.disabled = true
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
        className={emailError && styles.hasError}
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

      <label>
        <Link to="/terms-of-use" target="_blank" className={styles.termsLink}>
          利用規約
        </Link>
        に同意する
        <input ref={form.terms_agreed} type="checkbox" />
      </label>

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
      {(emailError || termsError) && (
        <div className={styles.formError}>
          {emailError} {termsError}
        </div>
      )}
    </div>
  )
}

export default Contact
