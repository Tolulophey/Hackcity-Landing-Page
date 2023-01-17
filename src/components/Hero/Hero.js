import React from 'react'
import Header from '../Header/Header'
import './hero.css'
import ButtonTwo from '../../reusables/ButtonTwo/ButtonTwo'
import heroImage from '../../assets/hero-image.png'
import { Link } from 'react-router-dom'


function Hero() {
  return (
    <div className='hero'>
      <Header />
      <div className="container">
        <div className="left">
          <h2 >HackCity Tech Inc.</h2>
          <p className='title'>Tech Innovation and Business Development Hub</p>
          <p>Equipped with the resources to jumpstart your idea. Experienced software and business developers for all your needs, simple or complex.</p>
          <div className="buttons">
            <Link to={"/hire-us"}>
              <ButtonTwo text={"Hire Developers"} className={'button-two'} />
            </Link>
            <Link to={"/"}>
              <ButtonTwo text={"Contact Us"} className={'button-three'} />
            </Link>
          </div>
        </div>
        <div className="right">
          <img src={heroImage} alt="hero-section" />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Hero)