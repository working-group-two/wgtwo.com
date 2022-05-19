import React from "react"
import styles from "./offices.module.css"

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
  <div className={styles.team}>
    {shuffle(teamMembers).map(teamMember => (
    <div className={styles.teamMember} key={teamMember.name}>
      <h1>{teamMember.letter}</h1>
      <div className={styles.teamMemberName}>{teamMember.name}</div>
      <div className={styles.teamMemberslogan}>{teamMember.slogan}</div>
    </div>
    ))}
  </div>
)
