import React from 'react'
import "./business.css"
import businessImage from '../../assets/successful-business-image.png'

function Business() {
  return (
    <div className='business'>
      <h2>Successful  Businesses & Startups</h2>
      <img src={businessImage} alt="successful-business" />
    </div>
  )
}

export default Business