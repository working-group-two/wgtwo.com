import React from "react"
import common from "../../css/common.module.css"
import styles from "./showcase-list.module.css"
import Translate from "@docusaurus/Translate"
import Link from "@docusaurus/Link"

//import { frontMatter as Vimla } from "./vimla.md"
import { frontMatter as CKH_IOD } from "./ckh-iod.md"
//import { frontMatter as MKI } from "./mki.md"

const showcases = [
  /*{
    name: "Vimla",
    description: (
      <Translate
        id="home.casestudy.adjacentcores.description"
        description="Description for the adjacent cores for operators case study"
      >
        {Vimla.description}
      </Translate>
    ),
    slug: Vimla.slug,
  },*/
  {
    name: "CKH-IOD",
    description: (
      <Translate
        id="home.casestudy.mvnx.description"
        description="Description for the MVNx case study"
      >
        {CKH_IOD.description}
      </Translate>
    ),
    slug: CKH_IOD.slug,
  },
  /*{
    name: "MKI",
    description: (
      <Translate
        id="home.casestudy.smalloperators.description"
        description="Description for the small operators case study"
      >
        {MKI.description}
      </Translate>
    ),
    slug: MKI.slug,
  },*/
]

function Component(props) {
  return (
    <div className={styles.showcases}>
      {showcases.slice(0, props.length).map(showcase => (
        <div className={styles.showcase} key={showcase.name}>
          <div className={styles.showcaseTitle}>{showcase.name}</div>
          <div className={styles.showcaseDescription}>
            {showcase.description}
          </div>
          <Link to={`/showcase/${showcase.slug}`} className={styles.link}>
            <Translate
              id="home.casestudy.learnmore"
              description="Learn more about the showcase"
            >
              Learn more
            </Translate>
          </Link>
          <div className={common.spacer}></div>
        </div>
      ))}
    </div>
  )
}

export default Component
