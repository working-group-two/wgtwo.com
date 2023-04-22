import React from "react"
import Layout from "@theme/Layout"
import common from "../css/common.module.css"
import styles from "./careers.module.css"
import Link from "@docusaurus/Link"
import Image from "@theme/IdealImage"
import ExpandableText from "../components/expandable-text/expandable-text"
import EmployeeQuote from "../components/employee-quote/employee-quote"
import ContactCard from "../components/contact-card/contact-card"
import ImageGallery from "../components/image-gallery/image-gallery"
import galleryPhotos from "../util/image-gallery-images"
import Offices from "../components/offices/offices"

const Careers = () => {
  return (
    <Layout title="Careers">
      <div className={common.section}>
        <div className={common.container}>
          <div className={common.centeredText}>
            <h1 className={common.title}>
              Solving hard problems requires a lot of freedom. Join us and get
              ready to do the best work of your life.
            </h1>
            <Link
              to="/jobs"
              target="_self"
              className={`${common.button} ${common.buttonPrimary} ${styles.button}`}
            >
              Explore our open jobs
            </Link>
          </div>

          <Image
            className={styles.mainImage}
            img={require("../../static/img/careers/AE8A5301.jpg")}
          />

          <div className={common.text}>
            <h2 className={styles.subtitle}>
              What does it mean to have freedom to solve hard problems?
            </h2>
            <ExpandableText>
              <p>
                We are challenging the telecom industry to take a giant step
                into the future. Mobile connectivity has existed for decades,
                has billions of subscribers and &gt;1000 operators around the
                world. It is a well-financed and profitable industry that
                societies fundamentally depend on. But it is not growing. It is
                not innovating. And it leaves value on the table for other
                industries to leverage.
              </p>

              <p>
                The pace of innovation and investment from adjacent industries,
                be it hyperscalers, device manufacturers or content providers is
                different - and drives higher performance.
              </p>

              <p>
                Instead of being constantly challenged by the technology and
                operating model choices of these tech giants, we believe
                operators have an opportunity to leverage the same principles
                they employ. To do so, they need to be willing to change their
                approach. In return they will significantly lower cost and
                complexity, and be radically more innovative.
              </p>

              <p>
                This is the hard problem we want to solve: At Working Group Two,
                we're building a technology platform and a company culture
                capable of disrupting the telecom industry - by making
                connectivity programmable, accessible and affordable.
              </p>

              <p>
                Joining us, you will get a lot of freedom and responsibility to
                create a big impact in the telco industry. You will be
                surrounded by friendly colleagues with deep expertise. We have a
                culture of transparency and openness, and oftentimes we call
                ourselves a “start-up for grown-ups”. It's not about being young
                or old, it's about knowing where we are going, and trusting each
                other. We want to co-create the path to get there.
              </p>

              <p>
                You will be part of a distributed team with main offices in
                Oslo, Trondheim and Stockholm as well as many remote colleagues
                in other locations. We believe in doing things together and that
                is why we frequently host company wide activities like tech
                talks, demos, and Failure Fridays. We also make sure everyone
                can get together at an offsite multiple times a year to have
                fun, discuss important topics and hack on crazy projects.
              </p>
            </ExpandableText>
          </div>
        </div>
      </div>

      <div className={`${common.section} ${common.sectionDark}`}>
        <div className={common.container}>
          <div className={common.centeredText}>
            <h2 className={styles.subtitle}>
              The impossible just takes a bit more time. Meet our problem
              solvers.
            </h2>
          </div>
          <div className={styles.employeeQuotes}>
            <EmployeeQuote
              image={require("../../static/img/careers/MattLong.jpg")}
              quote="I am the engineering manager for teams that work with our edge sites and networking, security and AWS cloud infrastructure. I try to keep the team members happy, and help plan and organize the technical work that we do. I spend a lot of time dealing with blocking issues that are important but mostly just distract our engineers from their daily work."
              name="Matt"
              title="Engineering manager"
            />
            <div className={styles.spacer} />
            <EmployeeQuote
              image={require("../../static/img/careers/VictoriaAlsen.jpg")}
              quote="I work on the main subscriber state database - where we keep track of subscriptions in the mobile networks of operators on our platform. The applications we write, primarily in Kotlin and Java, towards this database make sure people get the services they signed up for."
              name="Victoria"
              title="Software developer"
            />
          </div>
        </div>
      </div>

      <div className={common.section}>
        <div className={common.container}>
          <div className={common.centeredText}>
            <h2 className={styles.subtitle}>
              Got a question? Talk to our friendly folks.
            </h2>
          </div>
          <div className={styles.contacts}>
            <ContactCard
              image={require("../../static/img/careers/VictoriaHicks.jpg")}
              name="Victoria Hicks"
              title="Head of People"
              email="hicks@wgtwo.com"
            />
            <ContactCard
              image={require("../../static/img/careers/TheresaGuanio.jpg")}
              name="Theresa Guanio"
              title="Talent Lead"
              email="theresa@wgtwo.com"
            />
          </div>
          <div className={common.centeredText}>
            <Link
              to="/contact"
              target="_self"
              className={`${common.button} ${common.buttonPrimary}`}
            >
              Or just send us a message
            </Link>
          </div>
        </div>
      </div>

      <div className={`${common.section} ${styles.gallerySection}`}>
        <div className={common.container}>
          <div className={common.centeredText}>
            <h2 className={styles.subtitle}>
              It takes a culture of friendly people and deep expertise to
              disrupt the telecom industry.
            </h2>
          </div>
          <ImageGallery photos={galleryPhotos} targetRowHeight={200} />
        </div>
      </div>

      <div className={common.section}>
        <div className={common.container}>
          <div className={common.centeredText}>
            <div className={common.subtitle}>
              <br />
              <b>75+</b> engineers, <b>25+</b> different nationalities make up
              the <b>wgtwo</b> team. We collectively have spent centuries at
              Telenor, Telia, Ice, Google, PWC, Ericsson, Cisco, and more.
            </div>
          </div>
        </div>
        <div className={`${common.container} ${styles.officesContainer}`}>
          <Offices />

          <div className={common.centeredText}>
            <Link
              to="/jobs"
              target="_self"
              className={`${common.button} ${common.buttonPrimary} ${styles.button}`}
            >
              Explore our open jobs
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Careers
