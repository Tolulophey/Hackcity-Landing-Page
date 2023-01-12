import React from 'react'
import './buttonOne.css'
import forwardArrow from '../../assets/arrow-right.png'

function ButtonOne({text}) {
  return (
    <button className='button-one'>
      {/* <span>{text}</span> */}
      <span>Learn more</span>
      <img src={forwardArrow} alt="arrow" />
    </button>
  )
}

export default ButtonOne