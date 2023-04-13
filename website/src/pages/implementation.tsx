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
              alt="WG2 console portal image"
              className={styles.image}
              img={require("../../static/img/sxgp/online_presentation.png")}
            />
          </div>
        </div>

        <div className={common.section}>
          <div className={`${common.container} ${styles.container}`}>
            <h2 className={styles.featureheading}>クラウドsXGPとは？</h2>
          </div>
          <div className={`${common.container} ${common.splitContainer}`}>
            <Image
              alt="WG2 console portal image"
              className={styles.image}
              img={require("../../static/img/sxgp/Smart_phone_data_Monochromatic_1.png")}
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
                <p>
                  <Translate
                    id="sxgp.paragraph1"
                    description="Paragraph for the sXGP section"
                  >
                    sXGPは1.9
                    GHz帯の周波数を利用する免許不要のLTE方式で、主にスマートフォンを利用したコミュニケーションサービスに適した規格です。PHSの後継技術としても注目され、構内PHSの置き換えも進んでいます。また音声中心のPHSに比べて、データ通信やIoTなどを同一ネットワークに取り込むことができ、オフィス、倉庫、工場、屋外農場や加工場のようなエリアへの展開も期待されています。
                  </Translate>
                </p>
                <p>
                  <Translate
                    id="sxgp.paragraph2"
                    description="Paragraph 2 for the sXGP section"
                  >
                    一方、現在展開中の構内設置型sXGPは初期投資などの課題もあります。わたしたちはクラウド型のsXGPを提案することにより、当規格をより気軽にご利用いただけるようにサービス化を進めております。
                  </Translate>
                </p>
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
                    alt="WG2 console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/Piggy_bank_Monochromatic_1.png")}
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
                    alt="WG2 console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/Creative_Process_Monochromatic.png")}
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
                    alt="WG2 console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/Notifications_Monochromatic.png")}
                  />
                </div>
                <div className={styles.featureTitle}>SMS対応</div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Image
                    alt="WG2 console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/User_interface_Monochromatic_1.png")}
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
                    alt="WG2 console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/Customer_Service_Monochromatic.png")}
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
                    alt="WG2 console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/Brainstorming_session_Two_Color.png")}
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
                <li>
                  <Image
                    alt="User Icon"
                    className={styles.user_icon}
                    img={require("../../static/img/sxgp/Vector.png")}
                  />{" "}
                  WiFiが使いにくい場所で困っている
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
                  <div className={styles.priceTierTitle}>ご購入の際の目安</div>
                  <div className={styles.priceTierDescription}>
                    初期コスト（買取）<span>準備中</span>
                  </div>
                  <div className={styles.priceTierDescription}>
                    ランニングコスト（月額）<span>準備中</span>
                  </div>
                </div>

                <div className={styles.price}>
                  <div className={styles.priceTierFeatures}>
                    <li>
                      <Check /> WG2クラウドコアβ版ライセンス x3
                    </li>
                    <li>
                      <Check /> sXGP AP 1基
                    </li>
                    <li>
                      <Check /> USIM 3枚
                    </li>
                    <li>
                      <Check /> Sharp Aquos 3機
                    </li>
                    <li>
                      <Check /> 初期設定、梱包、発送サポート
                    </li>
                  </div>
                  <p className={styles.inner_priceTierDescription}>
                    上記料金は目安になります。お客様のご要望に合わせたプランをご提示させていただきます。
                  </p>
                  <a
                    className={`${common.button} ${styles.altButton}`}
                    href="#contact"
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
                    トライアル代<span>¥45,000</span>
                  </div>
                  <div className={styles.priceTierDescription}>
                    ※初期費用はかかりません
                  </div>
                </div>

                <div className={styles.price}>
                  <div className={styles.priceTierFeatures}>
                    <li>
                      <Check /> WG2クラウドコアβ版ライセンス x3
                    </li>
                    <li>
                      <Check /> USIM 3枚
                    </li>
                    <li>
                      <Check /> sXGP AP 1基
                    </li>
                    <li>
                      <Check /> Sharp Aquos 3機
                    </li>
                    <li>
                      <Check /> 初期設定、梱包、発送サポート
                    </li>
                  </div>
                  <a
                    className={`${common.button} ${styles.altButton}`}
                    href="#contact"
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
                    <a
                      href="http://accuver.jp/products/sxgp-smallcell/"
                      className=""
                    >
                      こちら
                    </a>
                    をご確認ください
                  </div>
                  <Image
                    alt="User Icon"
                    img={require("../../static/img/sxgp/image_10.png")}
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
                    <a
                      href="https://jp.sharp/products/aquos-wish/simfree/"
                      className=""
                    >
                      こちら
                    </a>
                    をご確認ください
                  </div>
                  <Image
                    alt="User Icon"
                    img={require("../../static/img/sxgp/SIM_AQUOS_wish_1.png")}
                  />
                </div>
              </div>

              <div className={styles.securityDomain}>
                <div>
                  <div className={styles.securityDomainTitle}>
                    WG2クラウドコア
                  </div>
                  <div className={styles.securityDomainDescription}>
                    提供するサービス
                  </div>
                  <div className={styles.content_des}>音声・SMSサービス</div>
                  <ul>
                    <li>拠点内・拠点間でのVPN音声サービス (内線)</li>
                    <li>話したい放題・SMSし放題</li>
                    <li>外線電話オプション (050番号) *1</li>
                  </ul>
                  <div className={styles.content_des}>
                    データアクセスサービス
                  </div>
                  <ul>
                    <li>SXGP内でのインターネット接続・ギガ放題 *2</li>
                    <li>IoT回線</li>
                    <li>インカムによるグループ通話 (オプション)</li>
                    <li>クラウドカメラ(オプション)</li>
                    <li>オプションは別契約</li>
                  </ul>
                  <div className={styles.content_des}>クラウドPBX機能 ※3</div>
                  <ul>
                    <li>準備中</li>
                  </ul>
                  <p>
                    ※1 PBXなしでの1ユーザー1外線番号による外線サービス。準備中。
                  </p>
                  <p>
                    ※2
                    sXGP平均スループットをベストエフォートにて提供。著しいデータ利用のIDには月末に追加料金をお願いしています。
                  </p>
                  <p>※3 クラウドPBX連携により会社・部署の代表番号設置が可能</p>
                </div>
              </div>

              <div className={styles.securityDomain}>
                <div>
                  <div className={styles.securityDomainTitle}>USIM</div>
                  <div className={styles.securityDomainDescription}>
                    sysmoISIM-SJA2 SIM + USIM{" "}
                  </div>

                  <Image
                    alt="User Icon"
                    img={require("../../static/img/sxgp/image_21.png")}
                  />

                  <ul>
                    <li>
                      GSM Authentication: COMP128v1, COMP128v2 and COMP128v3,
                      MILENAGE (default)
                    </li>
                    <li>UMTS Authentication: MILENAGE (default)</li>
                    <li>Fixed ICCID (not programmable/writable!)</li>
                    <li>Programmable IMSI</li>
                    <li>Programmable MSISDN</li>
                    <li>Programmable Ki / K / OP or OPC (OPC default)</li>
                    <li>GSM TS 11.11 compatibility</li>
                    <li>64kByte flash size</li>
                    <li>Java enabled (Card Manager, OTA, STK/SAT)</li>
                    <li>Card-individual ADM key</li>
                    <li>Card-individual OTA keys (3DES)</li>
                  </ul>
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
                    alt="WG2 console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/Sending_emails_Monochromatic_1.png")}
                  />
                </div>
                <div className={styles.featureTitle}>お問合せフォーム 送信</div>
              </div>

              <div className={styles.arrow}>
                <Image
                  alt="WG2 console portal image"
                  className={styles.desktop_show}
                  img={require("../../static/img/sxgp/Vector_8.png")}
                />
                <Image
                  alt="WG2 console portal image"
                  className={styles.mobile_show}
                  img={require("../../static/img/sxgp/Vector_8_mobile.png")}
                />
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Image
                    alt="WG2 console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/online_presentation.png")}
                  />
                </div>
                <div className={styles.featureTitle}>確認のご連絡</div>
              </div>

              <div className={styles.arrow}>
                <Image
                  alt="WG2 console portal image"
                  className={styles.desktop_show}
                  img={require("../../static/img/sxgp/Vector_8.png")}
                />
                <Image
                  alt="WG2 console portal image"
                  className={styles.mobile_show}
                  img={require("../../static/img/sxgp/Vector_8_mobile.png")}
                />
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Image
                    alt="WG2 console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/Card_Payment_Monochromatic_1.png")}
                  />
                </div>
                <div className={styles.featureTitle}>お支払い</div>
              </div>

              <div className={styles.arrow}>
                <Image
                  alt="WG2 console portal image"
                  className={styles.mobile_show}
                  img={require("../../static/img/sxgp/Vector_8_mobile.png")}
                />
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Image
                    alt="WG2 console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/Startup_Monochromatic_2.png")}
                  />
                </div>
                <div className={styles.featureTitle}>キット送付</div>
              </div>

              <div className={styles.arrow}>
                <Image
                  alt="WG2 console portal image"
                  className={styles.desktop_show}
                  img={require("../../static/img/sxgp/Vector_8.png")}
                />
                <Image
                  alt="WG2 console portal image"
                  className={styles.mobile_show}
                  img={require("../../static/img/sxgp/Vector_8_mobile.png")}
                />
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Image
                    alt="WG2 console portal image"
                    className={styles.image}
                    img={require("../../static/img/sxgp/Team_success_Isometric_1.png")}
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
