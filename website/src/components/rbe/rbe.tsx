import React from "react"
import common from "../../css/common.module.css"
import styles from "./rbe.module.css"
import { Cloud, LayoutTemplate, Globe2 } from "lucide-react"
import Translate from "@docusaurus/Translate"

function Component() {
  return (
    <div className={`${common.section} ${common.sectionDark}`}>
      <div className={`${common.container} ${common.splitContainer}`}>
        <div className={common.text}>
          <div className={common.pillTitle}>vision</div>
          <h2 className={common.title}>wgtwo</h2>
          <div className={common.subtitle}>
            <Translate
              id="home.rbe.subtitle"
              description="Subtitle for the RBE section"
            >
              Operators and their end users deserve mobile networks that allow
              for a rich ecosystem of valuable products to be built for their
              end users. To make this a reality we create programmable mobile
              core networks, built as a platform, API’ed and delivered
              as-a-service. Finally, we create the marketplaces where operators,
              developers and end-users can meet and interact.
            </Translate>
          </div>
        </div>
        <div className={styles.deploymentModels}>
          <div className={styles.deploymentModel}>
            <div className={styles.deploymentModelTitle}>
              <Cloud className={styles.deploymentModelIcon} /> Cloud
            </div>
            <div className={styles.deploymentModelDescription}>
              <Translate
                id="home.rbe.cloud.description"
                description="Description for the cloud deployment model"
              >
                Mobile core in the cloud. We bring innovation back to the core.
              </Translate>
            </div>
          </div>
          <div className={styles.deploymentModel}>
            <div className={styles.deploymentModelTitle}>
              <LayoutTemplate className={styles.deploymentModelIcon} /> APIs
            </div>
            <div className={styles.deploymentModelDescription}>
              <Translate
                id="home.rbe.api.description"
                description="Description for the API deployment model"
              >
                Configure your mobile core network with wgtwo APIs for
                provisioning and configuring an adaptable mobile subscription.
              </Translate>
            </div>
          </div>
          <div className={styles.deploymentModel}>
            <div className={styles.deploymentModelTitle}>
              <Globe2 className={styles.deploymentModelIcon} /> Telco SaaS
            </div>
            <div className={styles.deploymentModelDescription}>
              <Translate
                id="home.rbe.telco.description"
                description="Description for the telco deployment model"
              >
                Secure, developer friendly, next generation, and service-rich
                telecommunication platform that enables your business to
                succeed. End of life is the thing of the past.
              </Translate>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component
