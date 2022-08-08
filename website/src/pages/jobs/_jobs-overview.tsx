import React from "react"
import Link from "@docusaurus/Link"
import Head from "@docusaurus/Head"
import Layout from "@theme/Layout"
import common from "../../css/common.module.css"
import styles from "./jobs.module.css"
import InterviewProcess from "../../components/interview-process/interview-process"
import { ArrowRight } from "lucide-react"

const JobPosting = ({ job }) => (
  <Link className={styles.job} to={`/careers/job/${job.id}`}>
    <div className="position-text">
      <div className={styles.jobName}>{job.title}</div>
      <div className={styles.jobLocation}>{job.subtitle}</div>
    </div>
    <div>
      <ArrowRight />
    </div>
  </Link>
)

export default ({ jobs }) => (
  <Layout title="Jobs">
    <Head>
      <link
        rel="preload"
        href="https://wgtwo.jobs.personio.de/xml"
        as="fetch"
        crossOrigin="anonymous"
      />
    </Head>
    <div className={common.section}>
      <div className={common.container}>
        <div className={common.container}>
          <div className={styles.jobs}>
            <div className={common.title}>Jobs</div>
            {jobs.map(j => (
              <JobPosting job={j} key={j.id} />
            ))}
            <div id="personio-ads"></div>
          </div>
        </div>
      </div>
    </div>
    <InterviewProcess />
  </Layout>
)
