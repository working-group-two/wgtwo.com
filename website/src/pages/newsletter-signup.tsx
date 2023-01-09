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
          <div className={`${common.container} ${styles.container}`}>
            <div className={`${common.title} ${styles.title}`}>
              <Translate
                id="newsletter.title"
                description="Title for the newsletter signup page"
              >
                Newsletter
              </Translate>
            </div>
          </div>

          <NewsletterSignup className={styles.newsletterComponent} />
        </div>
      </div>
    </Layout>
  )
}

export default Contact
