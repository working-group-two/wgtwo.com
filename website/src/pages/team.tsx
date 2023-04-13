import React from "react"
import Layout from "@theme/Layout"
import common from "../css/common.module.css"
import styles from "./team.module.css"
import Image from "@theme/IdealImage"
import Link from "@docusaurus/Link"

const teamMembers = [
  {
    name: "Oslo",
    slogan: "Let's go skiing ⛷",
    letter: "O",
  },
  {
    name: "Trondheim",
    slogan: "Bartebyen 🥸",
    letter: "T",
  },
  {
    name: "Stockholm",
    slogan: "Time for a fika ☕️",
    letter: "S",
  },
  {
    name: "Berlin",
    slogan: "Dickes B steht für Bier 🍻",
    letter: "B",
  },
  {
    name: "Tokyo",
    slogan: "寿司を食べましょう 🍱",
    letter: "T",
  },
  {
    name: "Remote",
    slogan: "Working from the couch 🛋",
    letter: "R",
  },
]

const shuffle = arr =>
  arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

export default () => (
  <Layout title="Team">
    <div className={common.page}>
      <div className={common.section}>
        <div className={common.container}>
          <div className={common.centeredText}>
            <div className={common.title}>Scandinavian rooted startup.</div>
            <div className={common.title}>Innovating telco.</div>
            <div className={common.subtitle}>
              <br />
              <b>60+</b> engineers, <b>19+</b> different nationalities make up
              the <b>WG2</b> team. We collectively have spent centuries at
              Telenor, Telia, Ice, Google, PWC, Ericsson, Cisco, and more.
            </div>
          </div>
        </div>
      </div>
      <div className={common.container}>
        <div className={styles.team}>
          {shuffle(teamMembers).map(teamMember => (
            <div className={styles.teamMember} key={teamMember.name}>
              <h1>{teamMember.letter}</h1>
              <div className={styles.teamMemberName}>{teamMember.name}</div>
              <div className={styles.teamMemberslogan}>{teamMember.slogan}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${common.section} ${common.sectionGray}`}>
        <div className={common.container}>
          <div className={`${styles.text}`}>
            <h2 className={styles.title}>Our investors</h2>
            <div className={styles.investors}>
              <div>
                <a href="https://www.telenor.com" target="_blank">
                  <img alt="Telenor" src="/img/telenor.png" />
                </a>
              </div>
              <div>
                <a href="https://www.cisco.com" target="_blank">
                  <img alt="Cisco" src="/img/cisco.png" />
                </a>
              </div>
              <div>
                <a href="https://www.digitalalpha.net/" target="_blank">
                  <img alt="Digital Alpha" src="/img/digital-alpha-logo.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={common.section}>
        <div className={common.container}>
          <div className={`${common.centeredText}`}>
            <h2 className={common.title}>
              Interested in joining our growing team?
            </h2>
            <Link
              to="/jobs"
              target="_self"
              className={`${common.button} ${common.buttonPrimary} ${styles.button}`}
            >
              View open positions
            </Link>
          </div>
          <Image
            className={styles.groupImage}
            img={require("../../static/img/group-image.jpeg")}
          />
        </div>
      </div>
    </div>
  </Layout>
)
