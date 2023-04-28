import React from "react"
import clsx from "clsx"
import { translate } from "@docusaurus/Translate"
import { usePluralForm } from "@docusaurus/theme-common"
import { useBlogPost } from "@docusaurus/theme-common/internal"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./styles.module.css"

import TwitterIcon from "@site/static/img/icons/twitter.svg"
import LinkedinIcon from "@site/static/img/icons/linkedin.svg"
import RedditIcon from "@site/static/img/icons/reddit.svg"
import { Link } from "lucide-react"

import {
  openTwitterPopup,
  openRedditPopup,
  openLinkedinPopup,
} from "../../../../util/social-share-behavior"

// Social Media Button Handlers
function onTwitterClick(baseUrl, metadata) {
  const title = metadata.title
  const url = removeTrailingSlash(baseUrl) + metadata.permalink
  const text = title + " " + url
  openTwitterPopup(text)
}
function onRedditClick(baseUrl, metadata) {
  const title = metadata.title
  const url = removeTrailingSlash(baseUrl) + metadata.permalink
  const text = title
  openRedditPopup(url, text)
}
function onLinkedinClick(baseUrl, metadata) {
  const title = metadata.title
  const url = removeTrailingSlash(baseUrl) + metadata.permalink
  const text = title
  openLinkedinPopup(url, text)
}
function onCopyLink(baseUrl, metadata) {
  const url = removeTrailingSlash(baseUrl) + metadata.permalink
  navigator.clipboard.writeText(url)
}

// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
  const { selectMessage } = usePluralForm()
  return readingTimeFloat => {
    const readingTime = Math.ceil(readingTimeFloat)
    return selectMessage(
      readingTime,
      translate(
        {
          id: "theme.blog.post.readingTime.plurals",
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: "One min read|{readingTime} min read",
        },
        { readingTime }
      )
    )
  }
}
function ReadingTime({ readingTime }) {
  const readingTimePlural = useReadingTimePlural()
  return <>{readingTimePlural(readingTime)}</>
}
function Date({ date, formattedDate }) {
  return (
    <time dateTime={date} itemProp="datePublished">
      {formattedDate}
    </time>
  )
}
function Spacer() {
  return <>{" · "}</>
}
export default function BlogPostItemHeaderInfo({ className }) {
  const { siteConfig } = useDocusaurusContext()
  const baseUrl = siteConfig.url

  const { metadata, isBlogPostPage } = useBlogPost()
  const { date, formattedDate, readingTime } = metadata
  return (
    <div
      className={clsx(
        { [styles.container]: isBlogPostPage },
        { [styles.containerCardView]: !isBlogPostPage },
        "margin-vert--md",
        className
      )}
    >
      <div className={styles.dateContainer}>
        <Date date={date} formattedDate={formattedDate} />
        {typeof readingTime !== "undefined" && (
          <>
            <Spacer />
            <ReadingTime readingTime={readingTime} />
          </>
        )}
      </div>
      <div
        className={clsx({
          [styles.iconsContainer]: isBlogPostPage,
          [styles.noIcons]: !isBlogPostPage,
        })}
      >
        <button
          className={styles.button}
          onClick={() => onLinkedinClick(baseUrl, metadata)}
        >
          <LinkedinIcon className={styles.icon} />
        </button>
        <button
          className={styles.button}
          onClick={() => onTwitterClick(baseUrl, metadata)}
        >
          <TwitterIcon className={styles.icon} />
        </button>
        <button
          className={styles.button}
          onClick={() => onRedditClick(baseUrl, metadata)}
        >
          <RedditIcon className={styles.icon} />
        </button>
        <span className={styles.spacer}>|</span>
        <button
          className={styles.button}
          onClick={() => onCopyLink(baseUrl, metadata)}
        >
          <Link
            className={`${styles.icon} ${styles.iconLink}`}
            strokeWidth={2.5}
          />
        </button>
      </div>
    </div>
  )
}

function removeTrailingSlash(string) {
  return string.replace(/\/+$/, "")
}
