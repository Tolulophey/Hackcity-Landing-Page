import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import "./header.css"


function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Navbar />
      <Link to={'/'}>
      <button>Hire Developers</button>
      </Link>
    </header>
  )
}

export default Header