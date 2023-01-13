import React from 'react'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'

function Contact() {
  const contacts = [
    {
      name: "mail",
      logo: mail,
      text: "info@waylight.me",
      link: "mailto:info@waylight.me"
    },
    {
      name: "phone",
      logo: phone,
      text: "+1-302-467-2761",
      link: "tel:13024672761",
    },
    {
      name: "location",
      logo: location,
      text: "7209 Lancaster Pike, Suite 4-1282",
      link: "https://map.google.com/"
    },
  ]
  return (
    <div className="contact-us">
        <h3>contact us</h3>
        <ul className="links">
            {contacts.map((contact, index)=>{
            return (
                <a href={contact.link} key={index+1}>
                    <img src={contact.logo} alt={contact.name} />
                    <li>{contact.text}</li>
                </a>
            )
            })}
        </ul>
        </div>
  )
}

export default Contact