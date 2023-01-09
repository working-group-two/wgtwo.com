import React from "react"
import Layout from "@theme/Layout"
import common from "../css/common.module.css"
import styles from "./newsletter-signup.module.css"
import NewsletterSignup from "../components/newsletter-signup/newsletter-signup"
import Translate, { translate } from "@docusaurus/Translate"

function Contact() {
  return (
    <Layout title="Newsletter Signup">
      <div className={common.page}>
        <div className={`${common.container} ${styles.section}`}>
          <NewsletterSignup className={styles.newsletterComponent} />
        </div>
      </div>
    </Layout>
  )
}

export default Contact
