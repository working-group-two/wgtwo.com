import React from "react"
import Layout from "@theme/Layout"
import common from "../css/common.module.css"

import Hero from "../components/hero/hero"
import Brands from "../components/brands/brands"
import RBE from "../components/rbe/rbe"
import Logs from "../components/logs/logs"
import Enterprise from "../components/enterprise/enterprise"
import Quote from "../components/quote/quote"
import Integrations from "../components/integrations/integrations"
import NewsletterSignup from "../components/newsletter-signup/newsletter-signup"
import CaseStudies from "../components/casestudy/casestudy"
import CTA from "../components/cta/cta"
import CompanyProfile from "../components/company-profile/company-profile"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

function Index() {
  const { i18n } = useDocusaurusContext()

  return (
    <Layout title="WG2">
      <div className={common.page}>
        <Hero />
        <Brands />
        <RBE />
        <Logs />
        <Enterprise />
        <Quote />
        <Integrations />
        <NewsletterSignup hidden={i18n.currentLocale !== "en"} />
        <CaseStudies />
        <CTA />
        {i18n.currentLocale === "jp" && <CompanyProfile />}
      </div>
    </Layout>
  )
}

export default Index
