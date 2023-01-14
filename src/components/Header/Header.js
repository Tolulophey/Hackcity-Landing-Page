import React, {useState, useEffect} from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import "./header.css"
import logoIcon from '../../assets/logo-icon.png'


function Header() {
  const [scrolled, setScrolled] = useState(false)

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
        {!scrolled ? <img src={logo} alt="logo" /> :
        <div className='logo-text'>
        <img src={logoIcon} alt="logo-icon" />
        <p>HackCity</p>
        </div>
        }
      </div>
      <Navbar />
      <Link to={'/hire'}>
      <button>Hire Developers</button>
      </Link>
    </header>
  )
}

export default Header