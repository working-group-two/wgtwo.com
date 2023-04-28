import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"
import Layout from "@theme/Layout"
import BlogSidebar from "@theme/BlogSidebar"
export default function BlogLayout(props) {
  const { sidebar, toc, children, isListView, isTagsPostPage, ...layoutProps } =
    props
  const hasSidebar = sidebar && sidebar.items.length > 0
  const isBlogPostPage = !isListView && !isTagsPostPage
  return (
    <Layout {...layoutProps} wrapperClassName={styles.blogBackground}>
      <div className="container margin-vert--lg">
        <div className="row">
          {/* <BlogSidebar sidebar={sidebar} /> */}
          <main
            className={clsx("col", {
              [styles.col8]: isBlogPostPage,
              [styles.colOffset1]: toc && isBlogPostPage,
              [styles.colOffset2]: !toc && isBlogPostPage,
              [styles.cardListView]:
                isListView === true || isTagsPostPage === true,
              [styles.singleBlogPageView]: isBlogPostPage,
            })}
            itemScope
            itemType="http://schema.org/Blog"
          >
            {children}
          </main>
          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
    </Layout>
  )
}
