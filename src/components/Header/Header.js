import React, {useState, useEffect} from 'react'
import "./header.css"
import logo from '../../assets/logo.png'
import arrowDown from '../../assets/arrow-down.png'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Header() {
  const [serviceNav, setServiceNav] = useState(false)
  const services = [
      {
        name: "Mobile App",
        link: "#mobile-app"
      }, 
      {
        name: "Web App",
        link: "#web-app"
      }, 
      {
        name: "Blockchain App",
        link: "#blockchain-app"
      }, 
      {
        name: "Game Development",
        link: "#game-development"
      }, 
      {
        name: "Bot Development",
        link: "#bot-development"
      }, 
      {
        name: "Pnp Microservices",
        link: "#pnp-microservices"
      }
    ]
  useEffect(() => {
    if(serviceNav){
      document.querySelector("body").style.overflow = "hidden"
    }
    return ()=> {
      document.querySelector("body").style.overflow = "auto"
    }
  }, [serviceNav])
  
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <div className="services" onClick={()=>{setServiceNav(!serviceNav)}}>
          <p>
            <span>Services</span>
            <img src={arrowDown} alt="arrow-down" />
          </p>
          {serviceNav &&
            <ul>
            {services.map((service, index)=>{
              return (
              <HashLink smooth to={service.link} key={index+1}>
                <li >{service.name}</li>
              </HashLink>
              )
            })}
          </ul>
          }
        </div>
        <Link to={'/'}>
        <span>Career</span>
        </Link>
        <Link to={'/'}>
        <span>Contact Us</span>
        </Link>
      </nav>
      <Link to={'/'}>
      <button>Hire Developers</button>
      </Link>
    </header>
  )
}

export default Header