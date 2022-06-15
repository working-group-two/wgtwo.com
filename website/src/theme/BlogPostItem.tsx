import React from "react"
import BlogPostItem from "@theme-original/BlogPostItem"
import NewsletterSignup from "../components/newsletter-signup/newsletter-signup"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

const BlogPostItemWrapper = props => {
  const { i18n } = useDocusaurusContext()

  if (i18n.currentLocale !== "en") {
    return <BlogPostItem {...props} />
  }

  return (
    <>
      <BlogPostItem {...props} />
      {props.isBlogPostPage && <NewsletterSignup onBlogPost />}
    </>
  )
}

export default BlogPostItemWrapper
