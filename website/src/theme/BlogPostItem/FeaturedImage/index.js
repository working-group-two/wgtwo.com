import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import {blogPostContainerID} from '@docusaurus/utils-common';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import MDXContent from '@theme/MDXContent';
export default function BlogPostItemContent({children, className}) {
  const {isBlogPostPage} = useBlogPost();
  const image = useBlogPost().assets.image;
  return (
    <div
      className={styles.featuredImage}
      style={{
        backgroundImage: `url('${image}')`
      }}>
      <BlogPostItemHeaderAuthors />
    </div>
  );
}
