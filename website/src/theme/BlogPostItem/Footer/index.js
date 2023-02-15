import React from "react"
import clsx from "clsx"
import { useBlogPost } from "@docusaurus/theme-common/internal"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import EditThisPage from "@theme/EditThisPage"
import TagsListInline from "@theme/TagsListInline"
import ReadMoreLink from "@theme/BlogPostItem/Footer/ReadMoreLink"
import styles from "./styles.module.css"

import { Share, Link } from "lucide-react"
import TwitterIcon from "@site/static/img/icons/twitter.svg"
import LinkedinIcon from "@site/static/img/icons/linkedin.svg"
import RedditIcon from "@site/static/img/icons/reddit.svg"

import {
  openTwitterPopup,
  openRedditPopup,
  openLinkedinPopup,
} from "../../../util/social-share-behavior"

import { Menu, MenuItem, MenuButton, MenuDivider } from "@szhsin/react-menu"
import "@szhsin/react-menu/dist/index.css"
import "@szhsin/react-menu/dist/transitions/slide.css"

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

export default function BlogPostItemFooter() {
  const { siteConfig } = useDocusaurusContext()
  const baseUrl = siteConfig.url

  const { metadata, isBlogPostPage } = useBlogPost()
  const { tags, title, editUrl, hasTruncateMarker } = metadata
  // A post is truncated if it's in the "list view" and it has a truncate marker
  const truncatedPost = !isBlogPostPage && hasTruncateMarker
  const tagsExists = tags.length > 0
  const renderFooter = tagsExists || truncatedPost || editUrl
  if (!renderFooter) {
    return null
  }
  return (
    <footer
      className={clsx({
        [styles.articleCardFooter]: !isBlogPostPage,
        "row docusaurus-mt-lg": isBlogPostPage,
      })}
    >
      {tagsExists && (
        <div
          className={clsx({
            [styles.tagsContainer]: !isBlogPostPage,
            "col col--9": isBlogPostPage,
          })}
        >
          <TagsListInline tags={tags} />
        </div>
      )}

      {isBlogPostPage && (
        <div
          className={clsx(`col ${styles.sharingSection}`, {
            "col--3": tagsExists,
          })}
        >
          <Menu
            menuButton={
              <MenuButton className={styles.sharingButton}>
                <Share size={20} className={styles.sharingIcon} />
              </MenuButton>
            }
            className={styles.menuContainer}
            align="center"
            arrow
            transition
          >
            <MenuItem onClick={() => onCopyLink(baseUrl, metadata)}>
              <Link
                size={20}
                className={styles.menuIcon}
                style={{ fill: "transparent" }}
              />{" "}
              Copy link
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={() => onLinkedinClick(baseUrl, metadata)}>
              <LinkedinIcon className={styles.menuIcon} /> Share on LinkedIn
            </MenuItem>
            <MenuItem onClick={() => onTwitterClick(baseUrl, metadata)}>
              <TwitterIcon className={styles.menuIcon} /> Share on Twitter
            </MenuItem>
            <MenuItem onClick={() => onRedditClick(baseUrl, metadata)}>
              <RedditIcon className={styles.menuIcon} /> Share on Reddit
            </MenuItem>
          </Menu>
        </div>
      )}

      {isBlogPostPage && editUrl && (
        <div className="col margin-top--sm">
          <EditThisPage editUrl={editUrl} />
        </div>
      )}

      {!isBlogPostPage && (
        <div className={`${styles.readMoreContainer}`}>
          <ReadMoreLink blogPostTitle={title} to={metadata.permalink} />
        </div>
      )}
    </footer>
  )
}

function removeTrailingSlash(string) {
  return string.replace(/\/+$/, "")
}
