import React from "react"
import clsx from "clsx"
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common"
import Layout from "@theme/Layout"
import MDXContent from "@theme/MDXContent"
import TOC from "@theme/TOC"
import common from "@site/src/css/common.module.css"
import styles from "./styles.module.css"

import CustomPageContainer from "./CustomPageContainer" // Location of CustomPageContainer

export default function MDXPage(props) {
  const { content: MDXPageContent } = props
  const {
    metadata: { title, description, frontMatter },
  } = MDXPageContent
  const { wrapperClassName, hide_table_of_contents: hideTableOfContents } =
    frontMatter

  if (MDXPageContent.metadata.frontMatter.advancedPage) {
    return (
      <HtmlClassNameProvider
        className={clsx(
          wrapperClassName ?? ThemeClassNames.wrapper.mdxPages,
          ThemeClassNames.page.mdxPage
        )}
      >
        <PageMetadata title={title} description={description} />
        <Layout>
          <main className={common.page}>
            <MDXContent>
              <MDXPageContent />
            </MDXContent>
          </main>
        </Layout>
      </HtmlClassNameProvider>
    )
  } else if (MDXPageContent.metadata.frontMatter.techFeaturePage) {
    const toc = MDXPageContent.toc
    const tags = MDXPageContent.metadata.frontMatter.tags
    return (
      <CustomPageContainer toc={toc} tags={tags}>
        <MDXPageContent />
      </CustomPageContainer>
    )
  } else {
    return (
      <HtmlClassNameProvider
        className={clsx(
          wrapperClassName ?? ThemeClassNames.wrapper.mdxPages,
          ThemeClassNames.page.mdxPage
        )}
      >
        <PageMetadata title={title} description={description} />
        <Layout>
          <main className="container container--fluid margin-vert--lg">
            <div className={clsx("row", styles.mdxPageWrapper)}>
              <div className={clsx("col", !hideTableOfContents && "col--8")}>
                <article>
                  <MDXContent>
                    <MDXPageContent />
                  </MDXContent>
                </article>
              </div>
              {!hideTableOfContents && MDXPageContent.toc.length > 0 && (
                <div className="col col--2">
                  <TOC
                    toc={MDXPageContent.toc}
                    minHeadingLevel={frontMatter.toc_min_heading_level}
                    maxHeadingLevel={frontMatter.toc_max_heading_level}
                  />
                </div>
              )}
            </div>
          </main>
        </Layout>
      </HtmlClassNameProvider>
    )
  }
}
