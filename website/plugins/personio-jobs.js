require("isomorphic-fetch")
const { writeFileSync, readFileSync } = require("fs")
const { JSDOM } = require("jsdom")
const path = require("path")

module.exports = (
  { i18n },
  {
    jobsXMLPath = path.resolve(__dirname, "../personio-jobs.xml"),
    jobsXMLURL = "https://wgtwo.jobs.personio.de/xml",
    jobRoute,
    jobsOverviewRoute,
  }
) => ({
  name: "plugin-personio-jobs",
  async loadContent() {
    const res = await fetch(jobsXMLURL)
    const resBody = await res.text()
    writeFileSync(jobsXMLPath, resBody)
    return readFileSync(jobsXMLPath, { encoding: "utf-8" }).toString()
  },
  async contentLoaded({ content, actions: { addRoute, createData } }) {
    const dom = new JSDOM(
      content.replaceAll("<![CDATA[", "").replaceAll("]]>", "")
    )
    const jobsData = Array.from(
      dom.window.document.querySelectorAll("position")
    ).map(p => ({
      title: p.querySelector("name").innerHTML,
      subtitle: `Permanent employee, ${
        p.querySelector("schedule").innerHTML
      } - ${p.querySelector("office").innerHTML}`,
      id: p.querySelector("id").innerHTML,
      jobDescriptions: Array.from(p.querySelectorAll("jobdescription")).map(
        el => el.innerHTML
      ),
    }))

    const localePrefix =
      i18n?.currentLocale && i18n.currentLocale !== "en"
        ? `/${i18n.currentLocale}`
        : ""

    for (const job of jobsData) {
      addRoute({
        ...jobRoute,
        exact: true,
        path: localePrefix + jobRoute.basePath + job.id,
        modules: {
          job: await createData(`job-${job.id}.json`, JSON.stringify(job)),
        },
      })
    }

    addRoute({
      ...jobsOverviewRoute,
      exact: true,
      path: localePrefix + jobsOverviewRoute.path,
      modules: {
        jobs: await createData(`jobs.json`, JSON.stringify(jobsData)),
      },
    })
  },
})
