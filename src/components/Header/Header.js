import React, {useState, useEffect} from 'react'
import logo from '../../assets/logo.png'
import hamburger from '../../assets/hamburger-menu.png'
import closeIcon from '../../assets/close-menu.png'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import "./header.css"


function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)

  const changeBackground =() =>{
    if(window.scrollY > 0){
        setScrolled(true)
    } else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    }
  }, [scrolled])
  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Navbar />
      <Link to={'/hire-us'}>
      <button>Hire Developers</button>
      </Link>
      {/* <div className="menu" onClick={()=> setShowNavbar(!showNavbar)}>
        <img src={showNavbar ? hamburger : closeIcon} alt="" />
      </div> */}
    </header>
  )
}

export default Header