import React, { useState, useEffect } from "react"
import { Switch, Route, useRouteMatch } from '@docusaurus/router'
import Link from '@docusaurus/Link'
import Head from '@docusaurus/Head'

import Layout from "@theme/Layout"
import common from "../../css/common.module.css"
import styles from "./careers.module.css"
import InterviewProcess from "../../components/interview-process/interview-process"
import { ArrowRight, ArrowLeft, Loader2 } from "lucide-react"

type Job = {
  id: string,
  title: string,
  subtitle: string,
  jobDescriptions: string[],
}

const fetchAllPositions = async (): Promise<Job[]> => {
  const res = await fetch('https://wgtwo-jobs.personio.de/xml')
  const resBody = await res.text()
  const parser = new DOMParser()
  const xml = parser.parseFromString(resBody, "text/xml")

  return Array.from(xml.querySelectorAll("position")).map((p, i) => ({
    title: p.querySelector("name").innerHTML,
    subtitle: `Permanent employee, ${p.querySelector("schedule").innerHTML} - ${p.querySelector("office").innerHTML}`,
    id: p.querySelector("id").innerHTML,
    jobDescriptions: Array.from(p.querySelectorAll("jobDescription")).map(el => el.innerHTML),
  }))
}

const JobPosting = ({ job }: { job: Job }) => <Link
  className={styles.job}
  to={`/careers/job/${job.id}`}
>
  <div className="position-text">
    <div className={styles.jobName}>{job.title}</div>
    <div className={styles.jobLocation}>
      {job.subtitle}
    </div>
  </div>
  <div>
    <ArrowRight />
  </div>
</Link>

const Careers = ({ jobs }: { jobs: Job[] }) => <div className={styles.jobs}>
  <div className={common.title}>Careers</div>
  {jobs.map((j) => <JobPosting job={j} key={j.id} />)}
  <div id="personio-ads"></div>
</div>

const Job = ({ match, allJobs }: { match: any, allJobs: Job[] }) => {
  const jobPosting = allJobs.find((j) => j.id == match.params.id)
  const cleanCDATA = text => text.replace("<![CDATA[", "").replace("]]>", "")
  return jobPosting
    ? <>
      <Link to="/careers"><ArrowLeft /></Link>
      <div>
        <h2>{jobPosting.title}</h2>
        <h6>{jobPosting.subtitle}</h6>
        <div dangerouslySetInnerHTML={{ __html: jobPosting.jobDescriptions.map(cleanCDATA).join("") }} />
      </div>
      <a
          href={`https://wgtwo.jobs.personio.de/job/${jobPosting.id}#apply`}
          className={`${common.button} ${common.buttonPrimary}`} target="_blank">
          Apply now
        </a>
    </>
    : <h1>404 - Not found</h1>
}

export default () => {
  const [jobs, setJobs] = useState<Job[]>([])
  useEffect(() => {
    (async () => {
      const jobPostings = await fetchAllPositions()
      setJobs(jobPostings)
    })()
  }, [])
  const match = useRouteMatch()

  return <Layout title="Careers">
    <Head>
      <link rel="preload" href="https://wgtwo-jobs.personio.de/xml" as="fetch" crossOrigin="anonymous" />
    </Head>
    <div className={common.section}>
      <div className={common.container}>
        <div className={common.container}>
          {
            jobs.length
              ? <Switch>
                <Route exact path={match.path} component={() => <Careers jobs={jobs} />} />
                <Route path={`${match.path}job/:id`} component={({ match }) => <Job allJobs={jobs} match={match} />} />
              </Switch>
              : <Loader2 className={styles.loader} />
          }
        </div>
      </div>
    </div>
    <InterviewProcess />
  </Layout>
}
