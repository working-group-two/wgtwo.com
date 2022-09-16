import React from "react"
import common from "../../css/common.module.css"
import styles from "./casestudy.module.css"
import Translate from "@docusaurus/Translate"

const caseStudies = [
  {
    name: "Adjacent Cores for Operators",
    description: (
      <Translate
        id="home.casestudy.adjacentcores.description"
        description="Description for the adjacent cores for operators case study"
      >
        Mobile Network Operators face the challenge of scalability on a daily
        basis. Highly complex networks that limit the number of use-cases and
        additional complexity they can take on is the norm.
      </Translate>
    ),
  },
  {
    name: "MVNx",
    description: (
      <Translate
        id="home.casestudy.mvnx.description"
        description="Description for the MVNx case study"
      >
        Mobile virtual operators of every kind face similar challenges. It is
        hard and expensive to build and operate your own core, and even harder
        to get a competitive advantage from it. A better way is now possible.
      </Translate>
    ),
  },
  {
    name: "Small Operators",
    description: (
      <Translate
        id="home.casestudy.smalloperators.description"
        description="Description for the small operators case study"
      >
        Especially smaller operators are often overwhelmed by the complexity of
        getting even the basic services to work at an affordable cost. Getting
        VoLTE to work, having a call forked to a watch and a smartphone,
        home-routing of SMS, integrating with a lawful intercept solution,
        handling CS fallback, restricting the speed of a data connection,
        handling roaming, and integrating a PBX are examples of basic
        functionality that is complex to produce in a traditional network.
      </Translate>
    ),
  },
  {
    name: "Hybrid Networks",
    description: (
      <Translate
        id="home.casestudy.hybridnetworks.description"
        description="Description for the hybrid networks case study"
      >
        Regional operators that want national coverage, out-of-coverage
        factories that want their employees to be able to use their normal
        devices, and greenfield MNOs that want a bridge to a national network –
        these are all use-cases for hybrid networks.
      </Translate>
    ),
  },
  {
    name: "Private Network Core",
    description: (
      <Translate
        id="home.casestudy.privatenetworkcore.description"
        description="Description for the private network core case study"
      >
        Private networks are a booming part of telecom. Use cases related to
        latency, security, and stability drive demand for smaller mobile
        networks. However, mobile networks are complex to manage. According to a
        study made by Omdia 9 out of 10 enterprises are looking for someone to
        partner with in managing these networks.
      </Translate>
    ),
  },
  {
    name: "Greenfield Operators",
    description: (
      <Translate
        id="home.casestudy.greenfieldoperators.description"
        description="Description for the greenfield operators case study"
      >
        Mobile network operators, especially greenfield operators with limited
        scale and lack of internal technology teams, are often overwhelmed by
        the complexity of getting even the basic services to work at an
        affordable cost.
      </Translate>
    ),
  },
]

function Component(props) {
  return (
    <div className={styles.caseStudies}>
      {caseStudies.slice(0, props.length).map(caseStudy => (
        <div className={styles.caseStudy} key={caseStudy.name}>
          <div className={styles.caseStudyTitle}>{caseStudy.name}</div>
          <div className={styles.caseStudyDescription}>
            {caseStudy.description}
          </div>
          <a
            href={`/docs/case-studies/${caseStudy.name
              .toLowerCase()
              .replace(/ /g, "-")}`}
            className={styles.link}
          >
            <Translate
              id="home.casestudy.learnmore"
              description="Learn more about the case study"
            >
              Learn more
            </Translate>
          </a>
          <div className={common.spacer}></div>
        </div>
      ))}
    </div>
  )
}

export default Component
