import React from 'react'
import styles from './imgWithCaption.module.css'
import useBaseUrl from "@docusaurus/useBaseUrl";

// credit: https://github.com/facebook/docusaurus/discussions/4633#discussioncomment-2616313
function Component({ src, caption, ...attributes }) {
  return (
    <figure className={styles.figure} {...attributes}>
      <img src={useBaseUrl(src)} alt={caption} className={styles.image} />
      <figcaption className={styles.caption}>{ caption }</figcaption>
    </figure>
  )
}

export default Component
