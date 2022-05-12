import React from "react"
import BlogPostItem from "@theme-original/BlogPostItem"
import NewsletterSignup from "../components/newsletter-signup/newsletter-signup"

const BlogPostItemWrapper = props => (
  <>
    <BlogPostItem {...props} />
    {props.isBlogPostPage && <NewsletterSignup onBlogPost />}
  </>
)

export default BlogPostItemWrapper
