import React from "react"
import Translate, { translate } from "@docusaurus/Translate"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"
function ReadMoreLabel() {
  return (
    <b>
      <Translate
        id="theme.blog.post.readMore"
        description="The label used in blog post item excerpts to link to full blog posts"
      >
        Read More
      </Translate>
    </b>
  )
}
export default function BlogPostItemFooterReadMoreLink(props) {
  const { blogPostTitle, ...linkProps } = props
  return (
    <Link
      className={styles.readMoreButton}
      aria-label={translate(
        {
          message: "Read more about {title}",
          id: "theme.blog.post.readMoreLabel",
          description:
            "The ARIA label for the link to full blog posts from excerpts",
        },
        { title: blogPostTitle }
      )}
      {...linkProps}
    >
      <ReadMoreLabel />
    </Link>
  )
}
