import React, { useState } from "react"
import style from "./contact-card.module.css"
import Image from "@theme/IdealImage"

const emailIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.3 14.5"><path d="m1 13.4 6.9-6m13.3 6-6.9-6M2 .5h18.3c.8 0 1.5.7 1.5 1.5v10.5c0 .8-.7 1.5-1.5 1.5H2c-.8 0-1.5-.7-1.5-1.5V2C.5 1.2 1.2.5 2 .5zM.9 1l9.4 8.1c.5.4 1.2.4 1.7 0L21.3 1" fill="none" stroke="#141414" stroke-linecap="round" stroke-miterlimit="10"/></svg>
const phoneIcon = <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 20.4 23.6"><path d="M4.1 16c4.8 6.8 12.3 9.3 14.8 4.7.2-.4.2-.9 0-1.3-1.5-1.9-3.7-3.1-6-3.3-.3 0-.6.2-.7.5-.2.4-.3.9-.4 1.4-.1.3-.3.4-.6.4h-.1c-1.8-1-3.3-2.4-4.4-4.1-1.2-1.6-2-3.5-2.4-5.5 0-.3.2-.5.4-.5h.1c.5.1.9.1 1.4.1.3 0 .6-.2.7-.5C7.4 5.4 7 3 5.7 1 5.3.6 4.9.4 4.4.5-.7 1.3-.8 9.3 4.1 16zm7.2-14.4c5.9 1.3 9.7 7.1 8.4 13h0m-9-10.4c4.5 1 7.4 5.4 6.4 9.9m-6.9-7.3c3.1.7 5 3.7 4.4 6.7" fill="none" stroke="#141414" stroke-linecap="round" stroke-miterlimit="10"/></svg>

const ContactCard = ({
	image,
	name,
	title,
	email,
	phone = null,
}) => {

	return (
    <div className={style.contactCard}>
      <Image img={image} />
      <h5 className={style.name}>{name}</h5>
	  <h6 className={style.title}>{title}</h6>
	  <a className={style.iconLink} href={`mailto:${email}`}>
      {emailIcon}
		  {email}
		</a>
	  {phone &&
      <a className={style.iconLink} href={`tel:${phone}`}>
        {phoneIcon}
        {phone}
      </a>
    }
    </div>
	)
}

export default ContactCard;
