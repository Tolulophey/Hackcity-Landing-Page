import React from 'react'
import ButtonOne from '../../reusables/ButtonOne/ButtonOne'
import './achievement.css'
import achievementImage from '../../assets/achievement-image.png'


function Achievement() {
  return (
    <div className='achievement'>
      <div className="left">
        <h2>Why Hire Us</h2>
        <p className="title">Business Solutions that will Help You Grow</p>
        <p>Beyond providing tech. support and development, we also provide tech startups with marketing resources and the business operations support they need to get their project or company from an idea to a product/company.</p>
        <p className='last'>With Hack City Tech., we not only provide such startups with the right tech team to build their products efficiently, we also provide marketing and business operations support/resources. In addition, we provide them with investment and potential business partnership leads from our business network.</p>
        <ButtonOne text={"Learn More"}/>
      </div>
      <div className="right">
        <img src={achievementImage} alt="achievement-section" />
      </div>
    </div>
  )
}

export default Achievement