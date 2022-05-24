import React, { useState } from "react"
import style from "./contact-card.module.css"
import Image from "@theme/IdealImage"

const ContactCard = ({ image, name, title, email, phone = null }) => {
  return (
    <div className={style.contactCard}>
      <Image className={style.contactImage} img={image} />
      <h5 className={style.name}>{name}</h5>
      <h6 className={style.title}>{title}</h6>
      <a className={style.iconLink} href={`mailto:${email}`}>
        {email}
      </a>
      {phone && (
        <a className={style.iconLink} href={`tel:${phone}`}>
          {phone}
        </a>
      )}
    </div>
  )
}

export default ContactCard
