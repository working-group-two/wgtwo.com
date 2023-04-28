import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl"
import { useBlogPost } from "@docusaurus/theme-common/internal"
export default function BlogPostItemContainer({ children, className }) {
  const { frontMatter, assets, metadata, isBlogPostPage } = useBlogPost()
  const { hasTruncateMarker } = metadata
  // A post is truncated if it's in the "list view" and it has a truncate marker
  const truncatedPost = !isBlogPostPage && hasTruncateMarker
  const { withBaseUrl } = useBaseUrlUtils()
  const image = assets.image ?? frontMatter.image
  return (
    <article
      className={clsx({
        [styles.articleCard]: !isBlogPostPage,
        [styles.articleContainer]: isBlogPostPage,
      })}
      itemProp="blogPost"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      {image && (
        <meta
          itemProp="image"
          content={withBaseUrl(image, { absolute: true })}
        />
      )}
      {children}
    </article>
  )
}
