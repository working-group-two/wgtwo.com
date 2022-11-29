import React from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import DocSidebar from '@theme/DocSidebar';
import { ThemeClassNames } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import MainStyles from '@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/styles.module.css';
import DocPageStyles from '@docusaurus/theme-classic/lib/theme/DocPage/Layout/styles.module.css';
import SidebarStyles from '@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css';
import DocItemColStyles from '@docusaurus/theme-classic/lib/theme/DocItem/Layout/styles.module.css';
import DocItemStyles from '@docusaurus/theme-classic/lib/theme/TOC/styles.module.css';
import DocBreadcrumbs from '@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/styles.module.css';

import IconHome from '@theme/Icon/Home';

import TagsListInline, {
  type Props as TagsListInlineProps,
} from '@theme/TagsListInline';

import MDXContent from '@theme/MDXContent';
import TOC from "@theme/TOC"
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Sidebars from '../../sidebars'

/**
 * CREDIT: https://github.com/facebook/docusaurus/discussions/8267
*/

function TagsRow(props: TagsListInlineProps) {
  return (
    <div
      className={clsx(
        ThemeClassNames.docs.docFooterTagsRow,
        'row margin-bottom--sm',
      )}>
      <div className="col">
        <TagsListInline {...props} />
      </div>
    </div>
  );
}

export default function CustomPageContainer(props) {
  const {siteConfig} = useDocusaurusContext();
  const location = useLocation();

  let title = null
  let breadcrumbs = [
    {type: 'link', href: '/technology', label: 'Technology'}
  ]
  let tags = []

  const fixSidebar = (sidebarItems) => {
    sidebarItems = JSON.parse(JSON.stringify(sidebarItems))
    sidebarItems.map((sidebarItem, idx) => {
      if (sidebarItem.type === 'category') {
        sidebarItem.collapsed = true
        sidebarItem.collapsible = true
        if (sidebarItem.link?.slug)
          sidebarItem.href = `/docs${sidebarItem.link?.slug}`
        if (location.pathname.includes(sidebarItem.href)) {
          sidebarItem.collapsed = false
          breadcrumbs.push(sidebarItem)
        }
        sidebarItem.items = fixSidebar(sidebarItem.items)
      }
      if (sidebarItem.type === 'doc') {
        sidebarItem.href = `/docs/${sidebarItem.id}`
        if (location.pathname.includes(sidebarItem.href))
          sidebarItem.className = 'menu__link--active'
      }
      if (sidebarItem.type === 'link') {
        if (location.pathname.includes(sidebarItem.href)) {
          title = sidebarItem.label
          sidebarItem.className = 'menu__link--active'
        }
      }
    })
    return sidebarItems
  }

  const sidebarItems = fixSidebar(Sidebars.docs)

  tags = [
    {label: '4G', permalink: '4G'}
  ]

  return (

    <Layout
      title={`${title} | ${siteConfig.title}`}
    >
      <div className={`${DocPageStyles.docPage} container margin-vert--lg`}>
        <aside className={clsx(
          ThemeClassNames.docs.docSidebarContainer,
          SidebarStyles.docSidebarContainer
        )}>
          <DocSidebar sidebar={sidebarItems} path="/myCustomPage">
          </DocSidebar>
        </aside>
        <main className={clsx(MainStyles.docMainContainer)}>
          <div className={clsx('container', 'padding-top--md', 'padding-bottom--lg')}>
            <div className="row">
              <div className={clsx('col', DocItemColStyles.docItemCol)}>
                <div className={DocItemStyles.docItemContainer}>
                  <article>

                    {/* MODIFIED <DocBreadcrumbs> */}
                    <nav className={DocBreadcrumbs.breadcrumbsContainer}>
                      <ul className="breadcrumbs">
                        <li className="breadcrumbs__item">
                          <Link aria-label="Home page" className="breadcrumbs__link" href={useBaseUrl('/')}>
                            <IconHome className={DocBreadcrumbs.breadcrumbHomeIcon} />
                          </Link>
                        </li>
                        {breadcrumbs.map((breadcrumb, idx) => {
                          return (
                            <li className="breadcrumbs__item" key={idx}>
                              <Link className="breadcrumbs__link" href={breadcrumb.href} itemProp="item">
                                <span itemProp="name">{breadcrumb.label}</span>
                              </Link>
                            </li>
                          )
                        })}
                        <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem" className="breadcrumbs__item breadcrumbs__item--active">
                          <span className="breadcrumbs__link" itemProp="name">
                            {title}
                          </span>
                          <meta itemProp="position" content="2" />
                        </li>
                      </ul>
                    </nav>

                    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
                      <MDXContent>
                        {props.children}
                      </MDXContent>
                    </div>

                    <footer className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
                      <TagsRow tags={tags} />
                    </footer>
                  </article>
                </div>
              </div>
              <div className="col col--3">
                <TOC
                  toc={props.toc}
                  minHeadingLevel={1}
                  maxHeadingLevel={6}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}