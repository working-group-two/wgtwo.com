import React from "react";
import common from "../../css/common.module.css";
import styles from "./casestudy.module.css";

const caseStudies = [
  {
    name: "Adjacent Cores for Operators",
    description: "Mobile Network Operators face the challenge of scalability on a daily basis. Highly complex networks that limit the number of use-cases and additional complexity they can take on is the norm.",
  },
  { name: "MVNx", description: "Mobile virtual operators of every kind face similar challenges. It is hard and expensive to build and operate your own core, and even harder to get a competitive advantage from it. A better way is now possible." },
  { name: "Small Operators", description: "Especially smaller operators are often overwhelmed by the complexity of getting even the basic services to work at an affordable cost. Getting VoLTE to work, having a call forked to a watch and a smartphone, home-routing of SMS, integrating with a lawful intercept solution, handling CS fallback, restricting the speed of a data connection, handling roaming, and integrating a PBX are examples of basic functionality that is complex to produce in a traditional network." },
  {
    name: "Hybrid Networks",
    description: "Regional operators that want national coverage, out-of-coverage factories that want their employees to be able to use their normal devices, and greenfield MNOs that want a bridge to a national network – these are all use-cases for hybrid networks.",
  },
  { name: "Private Network Core", description: "Private networks are a booming part of telecom. Use cases related to latency, security, and stability drive demand for smaller mobile networks. However, mobile networks are complex to manage. According to a study made by Omdia 9 out of 10 enterprises are looking for someone to partner with in managing these networks." },
  { name: "Greenfield Operators", description: "Mobile network operators, especially greenfield operators with limited scale and lack of internal technology teams, are often overwhelmed by the complexity of getting even the basic services to work at an affordable cost." },
];

function Component(props) {
  return (
    <div className={styles.caseStudies}>
      {caseStudies.slice(0, props.length).map((caseStudy) => (
        <div className={styles.caseStudy} key={caseStudy.name}>
          <div className={styles.caseStudyTitle}>{caseStudy.name}</div>
          <div className={styles.caseStudyDescription}>{caseStudy.description}</div>
          <a href={`/docs/case%20studies/${caseStudy.name.replace(/ /g, "-")}`} className={styles.link}>
            Learn more
          </a>
          <div className={common.spacer}></div>
        </div>
      ))}
    </div>
  );
}

export default Component;
