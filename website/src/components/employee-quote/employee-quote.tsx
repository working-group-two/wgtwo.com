import React, { useState, useRef } from "react"
import style from "./employee-quote.module.css"
import Image from "@theme/IdealImage"

const EmployeeQuote = ({
	image,
	name = null,
	title = null,
	quote,
}) => {

	return (
    <blockquote className={style.employeeQuote}>
      <Image img={image} />
      <p>{quote}</p>
      { name && (
        <cite>
          <div className={style.name}>{name}</div>
          { title && <div className={style.title}>{title}</div> }
        </cite>
      ) }
    </blockquote>
	)
}

export default EmployeeQuote;
