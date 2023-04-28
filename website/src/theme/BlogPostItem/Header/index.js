import React from "react"
import styles from "./styles.module.css"
import { useBlogPost } from "@docusaurus/theme-common/internal"
import BlogPostItemHeaderTitle from "@theme/BlogPostItem/Header/Title"
import BlogPostItemHeaderInfo from "@theme/BlogPostItem/Header/Info"
import BlogPostItemHeaderAuthors from "@theme/BlogPostItem/Header/Authors"
export default function BlogPostItemHeader() {
  const { isBlogPostPage } = useBlogPost()
  return (
    <header className={styles.articleCardHeader}>
      {isBlogPostPage && (
        <>
          <BlogPostItemHeaderTitle />
          <BlogPostItemHeaderInfo />
          <BlogPostItemHeaderAuthors />
        </>
      )}
      {!isBlogPostPage && (
        <>
          <BlogPostItemHeaderTitle />
          <BlogPostItemHeaderInfo />
        </>
      )}
    </header>
  )
}
