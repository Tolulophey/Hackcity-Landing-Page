import React from 'react'
import ButtonOne from '../../reusables/ButtonOne/ButtonOne'
import './team.css'

function Team() {
  return (
    <div className='team'>
      <h2>Join our Team</h2>
      <p className="title">Great Community for Experienced Developers</p>
      <p>With Hack City Tech., we not only provide startups with the right tech team to build their products efficiently, we also provide marketing and business operations support/resources.</p>
      <ButtonOne text={"Join us"}/>
    </div>
  )
}

export default Team