import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"
import { blogPostContainerID } from "@docusaurus/utils-common"
import { useBlogPost } from "@docusaurus/theme-common/internal"
import MDXContent from "@theme/MDXContent"
export default function BlogPostItemContent({ children, className }) {
  const { isBlogPostPage } = useBlogPost()
  return (
    <div
      // This ID is used for the feed generation to locate the main content
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={clsx("markdown", className, {
        [styles.articleCardContent]: !isBlogPostPage,
        [styles.articleContent]: isBlogPostPage,
      })}
      itemProp="articleBody"
    >
      <MDXContent>{children}</MDXContent>
    </div>
  )
}
