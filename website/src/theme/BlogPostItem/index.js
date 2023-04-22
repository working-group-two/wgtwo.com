import React from "react"
import clsx from "clsx"
import { useBlogPost } from "@docusaurus/theme-common/internal"
import BlogPostItemContainer from "@theme/BlogPostItem/Container"
import BlogPostItemImage from "@theme/BlogPostItem/FeaturedImage"
import BlogPostItemHeader from "@theme/BlogPostItem/Header"
import BlogPostItemContent from "@theme/BlogPostItem/Content"
import BlogPostItemFooter from "@theme/BlogPostItem/Footer"
// apply a bottom margin in list view
function useContainerClassName() {
  const { isBlogPostPage } = useBlogPost()
  return !isBlogPostPage ? "margin-bottom--xl" : undefined
}
export default function BlogPostItem({ children, className }) {
  const containerClassName = useContainerClassName()
  const { isBlogPostPage } = useBlogPost()
  return (
    <BlogPostItemContainer className={clsx(containerClassName, className)}>
      {!isBlogPostPage && <BlogPostItemImage />}
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  )
}
