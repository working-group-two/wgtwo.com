import React, { useState, useEffect } from "react"
import Layout from "@theme/Layout"
import common from "../css/common.module.css"
import styles from "./careers.module.css"
import InterviewProcess from "../components/interview-process/interview-process"
import { ArrowRight } from "lucide-react"

type JobPosistion = {
  id: string,
  name: string,
  location: string,
  schedule: string,
}

const JobPosting = ({ position }: { position: JobPosistion }) => <a
  className={styles.job}
  href={`https://wgtwo-jobs.personio.de/job/${position.id}`}
>
  <div className="position-text">
    <div className={styles.jobName}>{position.name}</div>
    <div className={styles.jobLocation}>
      {
        `Permanent employee, ${position.schedule} - ${position.location}`
      }
    </div>
  </div>
  <ArrowRight />
</a>

const fetchPositions = async (): Promise<JobPosistion[]> => {
  const res = await fetch('https://wgtwo-jobs.personio.de/xml')
  const resBody = await res.text()
  const parser = new DOMParser()
  const xml = parser.parseFromString(resBody, "text/xml")
  return Array.from(xml.querySelectorAll("position")).map((p) => ({
    name: p.querySelector("name").innerHTML,
    schedule: p.querySelector("schedule").innerHTML,
    location: p.querySelector("office").innerHTML,
    id: p.querySelector("id").innerHTML,
  }))
}

export default () => {
  const [positions, setPositions] = useState<JobPosistion[]>([])
  useEffect(() => {
    (async () => {
      const positionsList = await fetchPositions()
      setPositions(positionsList)
    })()
  }, [positions])

  return <Layout title="Careers">
    <div className={common.page}>
      <div className={common.section}>
        <div className={common.container}>
          <div className={styles.jobs}>
            <div className={common.title}>Careers</div>
            {positions.length
              ? positions.map((position) => <JobPosting position={position} />)
              : <div>Loading...</div>
            }
            <div id="personio-ads"></div>
          </div>
        </div>
      </div>
      <InterviewProcess />
    </div>
  </Layout>
}