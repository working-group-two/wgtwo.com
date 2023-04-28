import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common"
import BlogLayout from "@theme/BlogLayout"
import BlogListPaginator from "@theme/BlogListPaginator"
import SearchMetadata from "@theme/SearchMetadata"
import BlogPostItems from "@theme/BlogPostItems"
function BlogListPageMetadata(props) {
  const { metadata } = props
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext()
  const { blogDescription, blogTitle, permalink } = metadata
  const isBlogOnlyMode = permalink === "/"
  const title = isBlogOnlyMode ? siteTitle : blogTitle
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  )
}
function BlogListPageContent(props) {
  const { metadata, items, sidebar } = props
  const pageNumberText = metadata.page > 1 ? ` - Page ${metadata.page}` : ""
  return (
    <BlogLayout isListView={true}>
      <h2 className={styles.blogHeader}>Blog {pageNumberText}</h2>
      <BlogPostItems items={items} /> {/* ONLY ITEM OF INTEREST HERE */}
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  )
}
export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage
      )}
    >
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  )
}
