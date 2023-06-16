import React from "react"
import { useLocation } from "react-router-dom"
import clsx from "clsx"
import Layout from "@theme/Layout"
import DocSidebar from "@theme/DocSidebar"
import { ThemeClassNames } from "@docusaurus/theme-common"
import Link from "@docusaurus/Link"
import useBaseUrl from "@docusaurus/useBaseUrl"
import PaginatorNavLink from "@theme/PaginatorNavLink"
import Tag from "@theme/Tag"
import Translate from "@docusaurus/Translate"

import MainStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/styles.module.css"
import DocPageStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/styles.module.css"
import SidebarStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css"
import DocItemColStyles from "@docusaurus/theme-classic/lib/theme/DocItem/Layout/styles.module.css"
import DocItemStyles from "@docusaurus/theme-classic/lib/theme/TOC/styles.module.css"
import DocBreadcrumbs from "@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/styles.module.css"

import IconHome from "@theme/Icon/Home"

import tagsStyles from "./tagsStyle.module.css"

import MDXContent from "@theme/MDXContent"
import TOC from "@theme/TOC"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

import FeaturesSidebar from "../../features.sidebar"

/**
 * CREDIT: https://github.com/facebook/docusaurus/discussions/8267
 */

function TagsRow({ tags }) {
  return (
    <div
      className={clsx(
        ThemeClassNames.docs.docFooterTagsRow,
        "row margin-bottom--sm"
      )}
    >
      <div className="col">
        <b>
          <Translate
            id="theme.tags.tagsListLabel"
            description="The label alongside a tag list"
          >
            Tags:
          </Translate>
        </b>
        <ul
          className={clsx(tagsStyles.tags, "padding--none", "margin-left--sm")}
        >
          {tags.map(
            /*({label, permalink: tagPermalink}) => (*/
            tag => (
              <li key={tag} className={tagsStyles.tag}>
                <Tag label={tag} /> {/* permalink={tagPermalink} */}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  )
}

const basePathToFeatures = "/technology/features/"

export default function CustomPageContainer(props) {
  const { siteConfig } = useDocusaurusContext()
  const location = useLocation()

  let title = null
  let breadcrumbs = [{ type: "link", href: "/technology", label: "Technology" }]

  const fixSidebar = (sidebarItems, category = null) => {
    sidebarItems = JSON.parse(JSON.stringify(sidebarItems))

    // for each sidebar item from "features.sidebar.js" file, transform the data appropriately
    sidebarItems.map((sidebarItem, idx) => {
      if (sidebarItem.type === "category") {
        // if Category, parse URL and fix Category items

        const categoryName = sidebarItem.label.toLowerCase()
        sidebarItem.collapsed = true
        sidebarItem.collapsible = true

        // extract second last part of URL (/cat/endpoint/ => cat)
        const urlParts = location.pathname.split("/")
        const urlEndpoint = urlParts[urlParts.length - 1]
        const categoryInUrl =
          urlEndpoint === ""
            ? urlParts[urlParts.length - 3]
            : urlParts[urlParts.length - 2]

        if (categoryInUrl == categoryName) {
          sidebarItem.collapsed = false
          breadcrumbs.push(sidebarItem)
        }
        sidebarItem.items = fixSidebar(sidebarItem.items, categoryName)
      } else {
        // if Feature item, parse URL, set active link, calculate next/prev items, set label

        // skip non-links
        if (!sidebarItem.href) {
          sidebarItem.label = sidebarItem.name
          return
        }

        // extract last part of URL (/endpoint/ => endpoint)
        const urlParts = location.pathname.split("/")
        let urlEndpoint = urlParts[urlParts.length - 1]
        urlEndpoint =
          urlEndpoint === "" ? urlParts[urlParts.length - 2] : urlEndpoint
        console.log(sidebarItem)

        const itemHref = sidebarItem.href.split("/")[1] // error-prone!

        if (urlEndpoint == itemHref) {
          pageHit = true
          title = sidebarItem.name
          sidebarItem.className = "menu__link--active"
        } else {
          // handle Paginator (next/prev items at bottom)
          if (!pageHit) prevItem = sidebarItem
          else if (!nextItem) nextItem = sidebarItem
        }
        // convert relative path to full path to link:
        sidebarItem.href = `${basePathToFeatures}${category}${sidebarItem.href}`
        // duplicate .name to .label for extended compatibility with internal Docusaurus:
        sidebarItem.label = sidebarItem.name
      }
    })
    return sidebarItems
  }

  let prevItem = null
  let pageHit = false
  let nextItem = null
  const sidebarItems = fixSidebar(FeaturesSidebar)

  return (
    <Layout title={`${title}`}>
      <div className={`${DocPageStyles.docPage} container margin-vert--lg`}>
        <aside
          className={clsx(
            ThemeClassNames.docs.docSidebarContainer,
            SidebarStyles.docSidebarContainer
          )}
        >
          <DocSidebar
            sidebar={sidebarItems}
            path="/technology/features"
          ></DocSidebar>
        </aside>
        <main className={clsx(MainStyles.docMainContainer)}>
          <div
            className={clsx(
              "container",
              "padding-top--md",
              "padding-bottom--lg"
            )}
          >
            <div className="row">
              <div
                className={clsx("col", DocItemColStyles.docItemCol)}
                style={{ padding: "0 25px" }}
              >
                <div className={DocItemStyles.docItemContainer}>
                  <article>
                    {/* MODIFIED <DocBreadcrumbs> */}
                    <nav className={DocBreadcrumbs.breadcrumbsContainer}>
                      <ul className="breadcrumbs">
                        <li className="breadcrumbs__item">
                          <Link
                            aria-label="Home page"
                            className="breadcrumbs__link"
                            href={useBaseUrl("/")}
                          >
                            <IconHome
                              className={DocBreadcrumbs.breadcrumbHomeIcon}
                            />
                          </Link>
                        </li>
                        {breadcrumbs.map((breadcrumb, idx) => {
                          return (
                            <li className="breadcrumbs__item" key={idx}>
                              <Link
                                className="breadcrumbs__link"
                                href={breadcrumb.href}
                                itemProp="item"
                              >
                                <span itemProp="name">{breadcrumb.label}</span>
                              </Link>
                            </li>
                          )
                        })}
                        <li
                          itemScope
                          itemProp="itemListElement"
                          itemType="https://schema.org/ListItem"
                          className="breadcrumbs__item breadcrumbs__item--active"
                        >
                          <span className="breadcrumbs__link" itemProp="name">
                            {title}
                          </span>
                          <meta itemProp="position" content="2" />
                        </li>
                      </ul>
                    </nav>

                    <div
                      className={clsx(
                        ThemeClassNames.docs.docMarkdown,
                        "markdown"
                      )}
                    >
                      <MDXContent>{props.children}</MDXContent>
                    </div>

                    <footer
                      className={clsx(
                        ThemeClassNames.docs.docFooter,
                        "docusaurus-mt-lg"
                      )}
                    >
                      <TagsRow tags={props.tags} />
                    </footer>
                  </article>
                  <nav className="pagination-nav docusaurus-mt-lg">
                    {prevItem && (
                      <PaginatorNavLink
                        subLabel="Prev Feature"
                        title={prevItem.name}
                        permalink={prevItem.href}
                      />
                    )}
                    {nextItem && (
                      <PaginatorNavLink
                        subLabel="Next Feature"
                        title={nextItem.name}
                        permalink={nextItem.href}
                        isNext
                      />
                    )}
                  </nav>
                </div>
              </div>
              <div className="col col--3">
                <TOC toc={props.toc} minHeadingLevel={1} maxHeadingLevel={6} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
