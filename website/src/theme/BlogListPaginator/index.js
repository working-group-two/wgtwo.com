import React from "react"
import styles from "./styles.module.css"
import Translate, { translate } from "@docusaurus/Translate"
import PaginatorNavLink from "@theme/PaginatorNavLink"
export default function BlogListPaginator(props) {
  const { metadata } = props
  const { previousPage, nextPage } = metadata
  return (
    <nav
      className={`pagination-nav ${styles.blogNavigationButtons}`}
      aria-label={translate({
        id: "theme.blog.paginator.navAriaLabel",
        message: "Blog list page navigation",
        description: "The ARIA label for the blog pagination",
      })}
    >
      {previousPage && (
        <PaginatorNavLink
          permalink={previousPage}
          title={
            <Translate
              id="theme.blog.paginator.newerEntries"
              description="The label used to navigate to the newer blog posts page (previous page)"
            >
              Newer Entries
            </Translate>
          }
        />
      )}
      {nextPage && (
        <PaginatorNavLink
          permalink={nextPage}
          title={
            <Translate
              id="theme.blog.paginator.olderEntries"
              description="The label used to navigate to the older blog posts page (next page)"
            >
              Older Entries
            </Translate>
          }
          isNext
        />
      )}
    </nav>
  )
}
