import React from "react"
import Link from "@docusaurus/Link"
import Layout from "@theme/Layout"
import common from "../../css/common.module.css"
import InterviewProcess from "../../components/interview-process/interview-process"
import { ArrowLeft } from "lucide-react"

export default ({ job }) => (
  <Layout title="Careers">
    <div className={common.section}>
      <div className={common.container}>
        <div className={common.container}>
          <Link to="/jobs">
            <ArrowLeft />
          </Link>
          <div>
            <h2>{job.title}</h2>
            <h6>{job.subtitle}</h6>
            <div
              dangerouslySetInnerHTML={{ __html: job.jobDescriptions.join("") }}
            />
          </div>
          <a
            href={`https://wgtwo.jobs.personio.de/job/${job.id}#apply`}
            className={`${common.button} ${common.buttonPrimary}`}
            target="_blank"
          >
            Apply now
          </a>
        </div>
      </div>
    </div>
    <InterviewProcess />
  </Layout>
)
