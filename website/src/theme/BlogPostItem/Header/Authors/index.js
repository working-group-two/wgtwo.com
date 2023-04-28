import React from "react"
import clsx from "clsx"
import { useBlogPost } from "@docusaurus/theme-common/internal"
import BlogPostItemHeaderAuthor from "@theme/BlogPostItem/Header/Author"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"
function MaybeLink(props) {
  if (props.href) {
    return <Link {...props} />
  }
  return <>{props.children}</>
}
// Component responsible for the authors layout
export default function BlogPostItemHeaderAuthors({ className }) {
  const {
    metadata: { authors },
    assets,
    isBlogPostPage,
  } = useBlogPost()
  const authorsCount = authors.length
  if (authorsCount === 0) {
    return null
  }
  const imageOnly = authors.every(({ name }) => !name)
  return (
    <div
      className={clsx(
        "margin-top--md margin-bottom--sm",
        imageOnly ? styles.imageOnlyAuthorRow : "row",
        { [styles.authorsContainerCardView]: !isBlogPostPage },
        className
      )}
    >
      {(isBlogPostPage || authors.length <= 2) &&
        authors.map((author, idx) => (
          <div
            className={clsx(
              !imageOnly && "col col--6",
              imageOnly ? styles.imageOnlyAuthorCol : styles.authorCol,
              { [styles.authorItem]: !isBlogPostPage }
            )}
            key={idx}
          >
            <BlogPostItemHeaderAuthor
              author={{
                ...author,
                // Handle author images using relative paths
                imageURL: assets.authorsImageUrls[idx] ?? author.imageURL,
              }}
            />
          </div>
        ))}
      {authors.length > 2 && !isBlogPostPage && (
        <>
          <div
            className={clsx(
              !imageOnly && "col col--6",
              imageOnly ? styles.imageOnlyAuthorCol : styles.authorCol,
              { [styles.authorItem]: !isBlogPostPage }
            )}
          >
            {authors.slice(1).map((author, idx) => (
              <MaybeLink
                href={author.url}
                className="avatar__photo-link"
                key={idx}
              >
                <img
                  className={clsx("avatar__photo", {
                    [styles.avatarPhoto]: !isBlogPostPage,
                  })}
                  src={author.imageURL}
                  alt={author.name}
                  title={author.name}
                />
              </MaybeLink>
            ))}
          </div>
          <div
            className={clsx(
              !imageOnly && "col col--6",
              imageOnly ? styles.imageOnlyAuthorCol : styles.authorCol,
              { [styles.authorItem]: !isBlogPostPage }
            )}
          >
            <BlogPostItemHeaderAuthor
              author={{
                ...authors[0],
                // Handle author images using relative paths
                imageURL: assets.authorsImageUrls[0] ?? authors[0].imageURL,
              }}
            />
          </div>
        </>
      )}
    </div>
  )
}
