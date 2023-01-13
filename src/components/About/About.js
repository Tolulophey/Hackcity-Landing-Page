import React from 'react'
import './about.css'
import Business from '../Business/Business'
import AboutCard from './AboutCard'
import aboutImage from '../../assets/about-image.png'

function About() {
  return (
    <div className='about'>
      <div className="top">
        <div className="left">
          <img src={aboutImage} alt ="about" />
        </div>
        <div className="right">
          <h2>Who we are</h2>
          <p className="title">Experienced Tech Solutions Provider</p>
          <p>HackCity is a one-stop tech company where ideas are transformed into products and businesses. Our product/business development teams have vast experiences and are equipped with the right tools to help you bring your idea to life, no matter how complex or incomplete it is. </p>
        </div>
      </div>
      <div className="bottom">
        <AboutCard />
        <Business />
      </div>
    </div>
  )
}

export default About