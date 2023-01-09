import common from "../../css/common.module.css"
import styles from "./newsletter-signup.module.css"
import Link from "@docusaurus/Link"
import Head from "@docusaurus/Head"
import React from "react"

const NewsletterSignup = ({
  onBlogPost = false,
  hidden = false,
  className = "",
}) => {
  if (hidden) {
    if (onBlogPost) return null

    return <div className={`${styles.newsletterSignup} ${styles.hidden}`} />
  }

  return (
    <div
      className={`${!onBlogPost && common.section} ${styles.newsletterSignup} ${
        onBlogPost && styles.onBlog
      } ${className}`}
    >
      <div
        className={`${common.container} ${
          onBlogPost && styles.onBlogContainer
        }`}
      >
        <Head>
          <script
            type="text/javascript"
            src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"
          ></script>
        </Head>

        <div className={common.centeredText}>
          <h2>Stay updated</h2>
          <p>
            Get the latest from Working Group Two. We'll send you news and
            updates from time to time.{" "}
          </p>

          <form
            className={`js-cm-form ${styles.formContainer}`}
            id="subForm"
            action="https://www.createsend.com/t/subscribeerror?description="
            method="post"
            data-id="191722FC90141D02184CB1B62AB3DC26955E76E0D27B7A1AB8E959FCE242FF63E7D5C217A62680441C6357AC1AAA7146FDBB1C4EB96CCAB4391278030E63DF48"
          >
            <input
              type="email"
              className="js-cm-email-input qa-input-email"
              id="fieldEmail"
              name="cm-jrduthd-jrduthd"
              autoComplete="Email"
              aria-label="Email"
              placeholder="Email"
              maxLength={200}
              required
            />
            <button
              className={`${common.button} ${common.buttonPrimary}`}
              type="submit"
            >
              Subscribe
            </button>
          </form>
          <p>
            <Link to="/privacy" className={styles.privacyPolicyLink}>
              Privacy notice
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewsletterSignup
