import React, { useState } from "react";
import Layout from "@theme/Layout";
import common from "../css/common.module.css";
import styles from "./careers.module.css";
import InterviewProcess from "../components/interview-process/interview-process";
import { ArrowRight } from "lucide-react";
import axios from "axios";

const JobPosting = (props) => {
  return (
    <a
      className={styles.job}
      href={`https://wgtwo-jobs.personio.de/job/${props.position.id}`}
    >
      <div className="position-text">
        <div className={styles.jobName}>{props.position.name}</div>
        <div className={styles.jobLocation}>
          Permanent employee, {props.position.schedule} -{" "}
          {props.position.location}
        </div>
      </div>
      <ArrowRight />
    </a>
  );
};

function Careers() {
  const [positionsState, setPositions] = useState([]);
  axios
    .get("https://wgtwo-jobs.personio.de/xml")
    .then(function (res) {
      const parser = new DOMParser();
      const xml = parser.parseFromString(res.data, "text/xml");
      let positionsList = Array.from(xml.querySelectorAll("position")).map(
        (p) => ({
          name: p.querySelector("name").innerHTML,
          schedule: p.querySelector("schedule").innerHTML,
          location: p.querySelector("office").innerHTML,
          id: p.querySelector("id").innerHTML,
        })
      );
      setPositions(positionsList);
    })
    .catch((err) => console.error(err)); // or console.error()

  const positionItems = positionsState.map((position) => (
    <JobPosting position={position} />
  ));
  return (
    <Layout title="Careers">
      <div className={common.page}>
        <div className={common.section}>
          <div className={common.container}>
            <div className={styles.jobs}>
              <div className={common.title}>Careers</div>
              {positionsState.length ? (
                positionItems
              ) : (
                <div>Loading Job Postings</div>
              )}
              <div id="personio-ads"></div>
            </div>
          </div>
        </div>
        <InterviewProcess />
      </div>
    </Layout>
  );
}

export default Careers;