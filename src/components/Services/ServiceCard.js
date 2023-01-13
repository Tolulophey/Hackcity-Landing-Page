import React from 'react'
import data from './data'
import forwardArrow from '../../assets/forward-arrow.png'

function ServiceCard() {
  return (
    <div className='service-cards'>
    {
      data.map((service)=>{
        return (
          <div id={service.idname} className="service-card" key={service.index}>
            <img src={service.image} alt={service.heading} />
            <p className="title">{service.heading}</p>
            <p>{service.text}</p>
            <p className='learn-more'>
              <img src={forwardArrow} alt="arrow" />
              <span>learn more</span>
            </p>
          </div>
        )
      })
    }
    </div>
  )
}

export default ServiceCard