import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"
import Link from "@docusaurus/Link"
import BlogPostItemHeaderAuthors from "@theme/BlogPostItem/Header/Authors"
import { blogPostContainerID } from "@docusaurus/utils-common"
import { useBlogPost } from "@docusaurus/theme-common/internal"
import MDXContent from "@theme/MDXContent"
export default function BlogPostItemContent({ children, className }) {
  const { assets, metadata, isBlogPostPage } = useBlogPost()
  const { frontMatter } = metadata
  const image = assets.image ?? frontMatter.image
  const linearGradient = "linear-gradient(transparent 62%, #242c37cc 85%)"
  return (
    <div
      className={clsx(styles.featuredImage, {
        [styles.dottedBorderBottom]: image === undefined,
      })}
      style={{
        backgroundImage: image
          ? `${linearGradient}, url('${image}')`
          : `url('/img/image-placeholder-wgtwo.png')`,
      }}
    >
      <Link to={metadata.permalink} className={styles.linkClickArea}></Link>
      <BlogPostItemHeaderAuthors />
    </div>
  )
}
