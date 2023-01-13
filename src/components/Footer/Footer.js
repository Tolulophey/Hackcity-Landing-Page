import React from 'react'
import './footer.css'
import logoIcon from '../../assets/logo-icon.png'
import facebook from '../../assets/facebook-icon.png'
import twitter from '../../assets/twitter-icon.png'
import github from '../../assets/github-icon.png'
import instagram from '../../assets/instagram-icon.png'
import socialIcon from '../../assets/instagram-icon.png'
import Solution from './Solution'
import Contact from './Contact'



function Footer() {
  const socialMedia = [
    {
      media : "facebook",
      logo: facebook,
      link: "https:facebook.com"
    },
    {
      media : "instagram",
      logo: instagram,
      link: "https:instagram.com"
    },
    {
      media : "twitter",
      logo: twitter,
      link: "https:twitter.com"
    },
    {
      media : "github",
      logo: github,
      link: "https:github.com"
    },
    {
      media : "socialIcon",
      logo: socialIcon,
      link: "https:socialIcon.com"
    }
  ]


  return (
    <footer>
      <div className="top">
        <div className="left">
          <img src={logoIcon} alt="logo-icon" />
          <p>Making the world a better place through constructing elegant hierarchies.</p>
          <div className="social-media">
            {socialMedia.map((media, index)=>{
              return (
                <a href={media.link} key={index+1}>
                  <img src={media.logo} alt={media.media} />
                </a>
              )
            })}
          </div>
        </div>
        <div className="right">
          <Solution />
          <Solution />
          <Contact />
        </div>
      </div>
      <div className="bottom">
        <p>© 2023 HackCity, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer