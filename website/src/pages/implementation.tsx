import React from "react"
import Layout from "@theme/Layout"

import Image from "@theme/IdealImage"
import common from "../css/common.module.css"
import styles from "./implementation.module.css"
import { Check } from "lucide-react"
import Link from "@docusaurus/Link"
import CONTACTFORM from "../components/contact-form/contact-form"
import AnchorLink from "react-anchor-link-smooth-scroll"

import Translate from "@docusaurus/Translate"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

function Component() {
  const { i18n } = useDocusaurusContext()

  return (
    <Layout title="sXGP">
      <div className={common.page}>
        <div className={`${common.section} ${common.sectionDark}`}>
          <div className={`${common.container} ${common.splitContainer}`}>
            <div className={`${common.text} ${styles.herocontent}`}>
              <h1 className={styles.titleHeader}>sXGPクラウドサービス</h1>
              <div
                className={
                  i18n.currentLocale === "en"
                    ? common.subtitle
                    : common.subtitleJp
                }
              >
                <Translate
                  id="sxgp.subtitle"
                  description="Subtitle for the sXGP section"
                >
                  クラウドを活用し、低コストでsXGPを実現できる魅力的なサービス
                </Translate>
              </div>
              <div className={styles.buttons}>
                <AnchorLink
                  href="#contact"
                  className={`${common.button} ${common.buttonPrimary} ${styles.heroButton}`}
                >
                  <Translate
                    id="sxgpButton"
                    description="sXGP Button for the hero section"
                  >
                    お問い合わせ
                  </Translate>
                </AnchorLink>
              </div>
            </div>
            <Image
              alt="wgtwo console portal image"
              className={styles.image}
              img={require("../../static/img/sxgp/online presentation .png")}
            />
          </div>
        </div>

        <div className={common.section}>
          <div className={`${common.container} ${styles.container}`}>
            <h2 className={styles.featureheading}>クラウドsXGPとは？</h2>
          </div>
          <div className={`${common.container} ${common.splitContainer}`}>
            <Image
              alt="wgtwo console portal image"
              className={styles.image}
              img={require("../../static/img/sxgp/Smart phone data_Monochromatic 1.png")}
            />
            <div className={common.text}>
              <h3 className={styles.titleHeader}>
                PHS周波数帯（1.9GHz）を利用した免許不要のプライベートLTE日本標準規格のsXGPをクラウドに実装し、初期投資を抑えながら実現可能にします。
              </h3>
              <div
                className={
                  i18n.currentLocale === "en"
                    ? common.subtitle
                    : common.subtitleJp
                }
              >
                <Translate
                  id="sxgp.subtitle"
                  description="Subtitle for the sXGP section"
                >
                  sXGPは1.9
                  GHz帯の周波数を利用するアンライセンスドLTE方式で、主にスマートフォンを利用したコミュニケーションサービスに適した規格です。PHSの後継技術としても注目され、構内PHSの置き換えも進んでいます。また音声中心のPHSに比べて、データ通信やIoTなどを同一システムに取り込むことができ、オフィス、倉庫、工場、屋外農場や加工場のようなエリアへの展開も期待されています。
                  一方、現在展開中のsXGPはオンプレミス型が多い中、わたし達はクラウド型のsXGPをパートナーと提案することにより、当規格のさらなる成長を期待しています。
                </Translate>
              </div>
            </div>
          </div>
        </div>

        <div className={`${common.section} ${common.sectionGray}`}>
          <div className={common.container}>
            <div className={common.centeredText}>
              <h2 className={styles.featureheading}>クラウドsXGPの特徴</h2>
            </div>
          </div>
          <div className={common.container}>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Image
                    alt="wgtwo console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/Piggy bank_Monochromatic 1.png")}
                  />
                </div>
                <div className={styles.featureTitle}>
                  最大75%コスト削減
                  <br />
                  (当社比較)
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Image
                    alt="wgtwo console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/Creative Process_Monochromatic.png")}
                  />
                </div>
                <div className={styles.featureTitle}>
                  高品質音声の
                  <br />
                  VoLTE対応
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Image
                    alt="wgtwo console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/Notifications_Monochromatic.png")}
                  />
                </div>
                <div className={styles.featureTitle}>SMS対応</div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Image
                    alt="wgtwo console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/User interface_Monochromatic 1.png")}
                  />
                </div>
                <div className={styles.featureTitle}>
                  フルマネッジド
                  <br />
                  SaaSモデル
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Image
                    alt="wgtwo console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/Customer Service_Monochromatic.png")}
                  />
                </div>
                <div className={styles.featureTitle}>
                  sXGP BWA
                  <br />
                  L5G MVNO MNO同時サポート
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Image
                    alt="wgtwo console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/Brainstorming session _Two Color.png")}
                  />
                </div>
                <div className={styles.featureTitle}>
                  APIを公開
                  <br />
                  オープンコアネットワーク
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${common.section} ${common.sectionDark}`}>
          <div className={common.container}>
            <div className={common.centeredText}>
              <h2 className={styles.ourservice}>このような方におすすめです</h2>
              <div className={styles.ourServiceFeatures}>
                <li>
                  <Image
                    alt="User Icon"
                    className={styles.user_icon}
                    img={require("../../static/img/sxgp/Vector.png")}
                  />{" "}
                  事務所・店舗・工場などが日本各地に散在している
                </li>
                <li>
                  <Image
                    alt="User Icon"
                    className={styles.user_icon}
                    img={require("../../static/img/sxgp/Vector.png")}
                  />{" "}
                  利用しているPHSシステムをアップグレードしたい
                </li>
                <li>
                  <Image
                    alt="User Icon"
                    className={styles.user_icon}
                    img={require("../../static/img/sxgp/Vector.png")}
                  />{" "}
                  L5Gの前にsXGPや自営LTEのステップを踏みたい
                </li>
                <li>
                  <Image
                    alt="User Icon"
                    className={styles.user_icon}
                    img={require("../../static/img/sxgp/Vector.png")}
                  />{" "}
                  APIを活用して自分たちでいろいろ作り込みたい
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className={common.section}>
          <div className={common.container}>
            <h2 className={styles.ourservice}>料金プラン</h2>
            <div className={styles.priceTiers}>
              <div className={styles.priceTier}>
                <div className={styles.priceTier_heading}>
                  <div className={styles.priceTierTitle}>ご購入の目安</div>
                  <div className={styles.priceTierDescription}>
                    初期コスト（買取）<span>¥150,000</span>
                  </div>
                  <div className={styles.priceTierDescription}>
                    ランニングコスト（月額）<span>¥15,000</span>
                  </div>
                </div>

                <div className={styles.price}>
                  <div className={styles.priceTierFeatures}>
                    <li>
                      <Check /> sXGP AP 1機
                    </li>
                    <li>
                      <Check /> USIM 3枚
                    </li>
                    <li>
                      <Check /> Sharp AQUOS 3機
                    </li>
                    <li>
                      <Check /> 初期設定、梱包、発送のサポート
                    </li>
                  </div>
                  <p className={styles.inner_priceTierDescription}>
                    上記料金は目安になります。お客様のご要望に合わせたプランをご提示させていただきます。
                  </p>
                  <a
                    className={`${common.button} ${styles.altButton}`}
                    href="https://developer.wgtwo.com"
                    target="_self"
                  >
                    購入する
                  </a>
                </div>
              </div>

              <div className={styles.priceTier_right}>
                <div className={styles.priceTier_heading_right}>
                  <div className={styles.priceTierTitle}>1ヶ月トライアル</div>
                  <div className={styles.priceTierDescription}>
                    トライアル代<span>¥30,000</span>
                  </div>
                  <div className={styles.priceTierDescription}>
                    ※初期費用はかかりません
                  </div>
                </div>

                <div className={styles.price}>
                  <div className={styles.priceTierFeatures}>
                    <li>
                      <Check /> WGTwoクラウドコアβ版ライセンス 3個
                    </li>
                    <li>
                      <Check /> sXGP AP 3枚
                    </li>
                    <li>
                      <Check /> USIM 3枚
                    </li>
                    <li>
                      <Check /> Sharp AQUOS 3機
                    </li>
                    <li>
                      <Check /> 初期設定、梱包、発送のサポート
                    </li>
                  </div>
                  <a
                    className={`${common.button} ${styles.altButton}`}
                    href="https://developer.wgtwo.com"
                    target="_self"
                  >
                    レンタルする
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${common.section} ${common.sectionGray}`}>
          <div
            className={`${common.container} ${common.splitContainer} ${styles.securityDomainContainer}`}
          >
            <div className={common.text}>
              <h2 className={styles.Maintitle}>製品詳細</h2>
            </div>
          </div>
          <div className={common.container}>
            <div className={styles.securityDomains}>
              <div className={styles.securityDomain}>
                <div>
                  <div className={styles.securityDomainTitle}>sXGP AP</div>
                  <div className={styles.securityDomainDescription}>
                    ビー・ビー・バックボーン株式会社
                  </div>
                  <div className={styles.spacer}>
                    詳細は
                    <a href="#" className="">
                      こちら
                    </a>
                    をご確認ください
                  </div>
                  <Image
                    alt="User Icon"
                    img={require("../../static/img/sxgp/image 10.png")}
                  />
                </div>
              </div>

              <div className={styles.securityDomain}>
                <div>
                  <div className={styles.securityDomainTitle}>
                    スマートフォン
                  </div>
                  <div className={styles.securityDomainDescription}>
                    シャープ株式会社 Sharp AQUOS Wishシリーズ
                  </div>
                  <div className={styles.spacer}>
                    詳細は
                    <a href="#" className="">
                      こちら
                    </a>
                    をご確認ください
                  </div>
                  <Image
                    alt="User Icon"
                    img={require("../../static/img/sxgp/SIM_AQUOS_wish 1.png")}
                  />
                </div>
              </div>

              <div className={styles.securityDomain}>
                <div>
                  <div className={styles.securityDomainTitle}>
                    WGTwoクラウドコア
                  </div>
                  <div className={styles.securityDomainDescription}>
                    提供するサービス
                  </div>
                  <div className={styles.content_des}>音声サービス</div>
                  <ul>
                    <li>441-90</li>
                    <li>任意のMSISDN</li>
                    <li>外線接続なし</li>
                    <li>話したい放題</li>
                  </ul>
                  <div className={styles.content_des}>
                    データアクセスサービス
                  </div>
                  <ul>
                    <li>ギガ放題</li>
                    <li>インターネット接続サービス ※1</li>
                  </ul>
                  <div className={styles.content_des}>SMSサービス</div>
                  <div className={styles.content_des}>クラウドPBX機能 ※2</div>
                  <ul>
                    <li>準備中</li>
                  </ul>
                  <p>
                    ※1 クラウドPBX連携により会社・部署の代表番号設置が可能
                    (別途見積もり)
                  </p>
                  <p>
                    ※2
                    sXGP平均スループットをベストエフォートにて提供。著しいデータ利用のIDには月末に追加料金をお願いしています
                  </p>
                </div>
              </div>

              <div className={styles.securityDomain}>
                <div>
                  <div className={styles.securityDomainTitle}>UISM</div>
                  <div className={styles.securityDomainDescription}>
                    sysmoISIM-SJA2 SIM + USIM{" "}
                  </div>

                  <Image
                    alt="User Icon"
                    img={require("../../static/img/sxgp/image 21.png")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${common.section} ${common.sectionDark} ${styles.section_seven}`}
        >
          <div className={common.container}>
            <div className={common.centeredText}>
              <h2 className={styles.ourservice}>トライアル開始までの流れ</h2>
            </div>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Image
                    alt="wgtwo console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/Sending emails_Monochromatic 1.png")}
                  />
                </div>
                <div className={styles.featureTitle}>お問合せフォーム 送信</div>
              </div>

              <div className={styles.arrow}>
                <Image
                  alt="wgtwo console portal image"
                  className={styles.desktop_show}
                  img={require("../../static/img/sxgp/Vector 8.png")}
                />
                <Image
                  alt="wgtwo console portal image"
                  className={styles.mobile_show}
                  img={require("../../static/img/sxgp/Vector 8_mobile.png")}
                />
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Image
                    alt="wgtwo console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/online presentation .png")}
                  />
                </div>
                <div className={styles.featureTitle}>確認のご連絡</div>
              </div>

              <div className={styles.arrow}>
                <Image
                  alt="wgtwo console portal image"
                  className={styles.desktop_show}
                  img={require("../../static/img/sxgp/Vector 8.png")}
                />
                <Image
                  alt="wgtwo console portal image"
                  className={styles.mobile_show}
                  img={require("../../static/img/sxgp/Vector 8_mobile.png")}
                />
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Image
                    alt="wgtwo console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/Card Payment_Monochromatic 1.png")}
                  />
                </div>
                <div className={styles.featureTitle}>お支払い</div>
              </div>

              <div className={styles.arrow}>
                <Image
                  alt="wgtwo console portal image"
                  className={styles.mobile_show}
                  img={require("../../static/img/sxgp/Vector 8_mobile.png")}
                />
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Image
                    alt="wgtwo console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/Startup_Monochromatic 2.png")}
                  />
                </div>
                <div className={styles.featureTitle}>キット送付</div>
              </div>

              <div className={styles.arrow}>
                <Image
                  alt="wgtwo console portal image"
                  className={styles.desktop_show}
                  img={require("../../static/img/sxgp/Vector 8.png")}
                />
                <Image
                  alt="wgtwo console portal image"
                  className={styles.mobile_show}
                  img={require("../../static/img/sxgp/Vector 8_mobile.png")}
                />
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Image
                    alt="wgtwo console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/Team success _Isometric 1.png")}
                  />
                </div>
                <div className={styles.featureTitle}>サービス開始</div>
              </div>
            </div>
            <div className={common.centeredText}>
              <h2 className={styles.ourservice}>サービス導入動画</h2>
              <div className={styles.video_responsive}>
                <iframe
                  width="100%"
                  height="450px"
                  src={`https://www.youtube.com/embed/KOfughHvC_s`}
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className={`${common.section} ${common.sectionGray}`}>
          <div className={common.container}>
            <div className={common.centeredText}>
              <h2 className={styles.featureheading}>お問い合わせフォーム</h2>
              <p>
                フォームに必要な項目を入力し、利用規約に同意のうえ、送信するボタンをクリックしてください。
                本格導入をご検討の場合、詳細を伺った後、担当の方から概算をご連絡いたします。
              </p>
            </div>
          </div>
          <div className={common.container}>
            <CONTACTFORM />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Component
