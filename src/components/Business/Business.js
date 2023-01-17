import React from 'react'
import "./business.css"
import startup1 from '../../assets/startup-1.png'
import startup2 from '../../assets/startup-2.png'
import startup3 from '../../assets/startup-3.png'
import startup4 from '../../assets/startup-4.png'
import startup5 from '../../assets/startup-5.png'
import startup6 from '../../assets/startup-6.png'
import startup7 from '../../assets/startup-7.png'

function Business() {
  const image = [startup1, startup2, startup3, startup4, startup5, startup6, startup7]
  return (
    <div className='business'>
      <h2>Successful  Businesses & Startups</h2>
      <div className="images">
        {image.map((image, index)=>{
          return <img 
                  key={index+1}
                  src={image} 
                  alt="successful-business" 
                  className={`business-image-${index+1}`} 
                />
        })}
      </div>
    </div>
  )
}

export default Business