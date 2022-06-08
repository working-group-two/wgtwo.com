import React from "react"
import common from "../../css/common.module.css"
import styles from "./rbe.module.css"
import { Cloud, LayoutTemplate, Globe2 } from "lucide-react"

function Component() {
  return (
    <div className={`${common.section} ${common.sectionDark}`}>
      <div className={`${common.container} ${common.splitContainer}`}>
        <div className={common.text}>
          <div className={common.pillTitle}>vision</div>
          <h2 className={common.title}>wgtwo</h2>
          <div className={common.subtitle}>
            Operators and their end users deserve mobile networks that allow for
            a rich ecosystem of valuable products to be built for their end
            users. To make this a reality we create programmable mobile core
            networks, built as a platform, API’ed and delivered as-a-service.
            Finally, we create the marketplaces where operators, developers and
            end-users can meet and interact.
          </div>
        </div>
        <div className={styles.deploymentModels}>
          <div className={styles.deploymentModel}>
            <div className={styles.deploymentModelTitle}>
              <Cloud className={styles.deploymentModelIcon} /> Cloud
            </div>
            <div className={styles.deploymentModelDescription}>
              Mobile core in the cloud. We bring innovation back to the core.
            </div>
          </div>
          <div className={styles.deploymentModel}>
            <div className={styles.deploymentModelTitle}>
              <LayoutTemplate className={styles.deploymentModelIcon} /> APIs
            </div>
            <div className={styles.deploymentModelDescription}>
              Configure your mobile core network with <b>wgtwo</b> APIs for
              provisioning and configuring an adaptable mobile subscription.
            </div>
          </div>
          <div className={styles.deploymentModel}>
            <div className={styles.deploymentModelTitle}>
              <Globe2 className={styles.deploymentModelIcon} /> Telco SaaS
            </div>
            <div className={styles.deploymentModelDescription}>
              Secure, developer friendly, next generation, and service-rich
              telecommunication platform that enables your business to succeed.
              End of life is a thing of the past.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component
