import React from "react"
import common from "../../css/common.module.css"
import style from "./company-profile.module.css"

const CompanyProfile = () => {
  return (
    <div
      className={`${common.section} ${common.sectionGray} ${style.companyProfile}`}
    >
      <div className={common.container}>
        <div className={common.text}>
          <h2 className={style.title}>会社概要</h2>
          <table>
            <tr>
              <th>会社名</th>
              <td>WG2合同会社</td>
            </tr>
            <tr>
              <th>代表社員</th>
              <td>
                WORKING GROUP TWO AS
                <br />
                Sommerrogata 17, 0255, Oslo, Norway
              </td>
            </tr>
            <tr>
              <th>職務執行者</th>
              <td>小里 直哉</td>
            </tr>
            <tr>
              <th>設　立</th>
              <td>2021年9月10日</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>
                〒220-0012
                <br />
                神奈川県横浜市西区みなとみらい3-7-2
                <br />
                Ocean Gate Minatomirai 8階
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile
