import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"
import Link from "@docusaurus/Link"
import { useBlogPost } from "@docusaurus/theme-common/internal"
function MaybeLink(props) {
  if (props.href) {
    return <Link {...props} />
  }
  return <>{props.children}</>
}
export default function BlogPostItemHeaderAuthor({ author, className }) {
  const { name, title, url, imageURL, email } = author
  const link = url || (email && `mailto:${email}`) || undefined
  const { assets, metadata, isBlogPostPage } = useBlogPost()
  const { frontMatter } = metadata
  const hasImage = assets.image !== undefined || frontMatter.image !== undefined
  return (
    <div
      className={clsx(
        "avatar margin-bottom--sm",
        { [styles.avatarContainer]: !isBlogPostPage },
        className
      )}
    >
      {imageURL && (
        <MaybeLink href={link} className="avatar__photo-link">
          <img
            className={clsx("avatar__photo", {
              [styles.avatarPhoto]: !isBlogPostPage,
            })}
            src={imageURL}
            alt={name}
          />
        </MaybeLink>
      )}

      {name && (
        <div
          className="avatar__intro"
          itemProp="author"
          itemScope
          itemType="https://schema.org/Person"
        >
          <div
            className={clsx("avatar__name", {
              [styles.avatarName]: !isBlogPostPage,
              [styles.hasImageBackground]: hasImage,
            })}
          >
            <MaybeLink href={link} itemProp="url">
              <span itemProp="name">{name}</span>
            </MaybeLink>
          </div>

          {title && (
            <small
              className={clsx("avatar__subtitle", {
                [styles.avatarSubtitle]: !isBlogPostPage,
                [styles.hasImageBackground]: hasImage,
              })}
              itemProp="description"
              title={title}
            >
              {title}
            </small>
          )}
        </div>
      )}
    </div>
  )
}
