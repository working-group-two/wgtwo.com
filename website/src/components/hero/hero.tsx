import React from "react"
import styles from "./hero.module.css"
import common from "../../css/common.module.css"
import Translate from "@docusaurus/Translate"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

function Component() {
  const { i18n } = useDocusaurusContext()
  return (
    <div className={`${common.section} ${styles.section}`}>
      <div className={`${common.container} `}>
        <h1 className={styles.titleHeader}>
          Plug into the world's mobile core network
        </h1>
        <div
          className={
            i18n.currentLocale === "en" ? common.subtitle : common.subtitleJp
          }
        >
          <Translate
            id="home.hero.subtitle"
            description="Subtitle for the hero section"
          >
            データセンターリソースや
            、ハードウェアなどシステム立ち上げに必要な先行投資の心配はいりません。またハードウェアやソフトウェアの保障切れによる追加投資も必要ありません。wgtwoのクラウドコアは、続的なコード追加、大幅なコスト削減、そして柔軟性を提供します。シンプルにお使いいただくためにサブスクリプションサービスとして提供され、お客様の成長に合わせて拡張することができます。
          </Translate>
        </div>
        <div className={styles.buttons}>
          <Link
            to="/technology"
            className={`${common.button} ${common.buttonPrimary} ${styles.heroButton}`}
          >
            <Translate
              id="home.hero.techButton"
              description="techButton for the hero section"
            >
              詳しく見る
            </Translate>
          </Link>
          <Link
            to="/request-demo"
            className={`${common.button} ${common.buttonPrimary} ${styles.heroButton}`}
          >
            <Translate
              id="home.hero.contactButton"
              description="contactButton for the hero section"
            >
              sXGPクラウドサービス
            </Translate>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Component
