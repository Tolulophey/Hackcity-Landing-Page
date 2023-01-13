import React from 'react'
import data from './data'

function AboutCard() {
  return (
    <div className='about-cards'>
            {
                data.map((about)=>{
                  return(  
                    <div className="about-card" key={about.id}>
                        <div className="top">
                            <img src={about.image} alt={about.heading} />
                            <p>{about.heading}</p>
                        </div>
                        <div className="bottom">
                            {about.text}
                        </div>
                    </div>
                    )
                })
            }
    </div>
  )
}

export default AboutCard