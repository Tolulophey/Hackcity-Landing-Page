import React from 'react'
import './formButtons.css'
import frontArrow from '../../assets/arrow-right.png'



function NextButton({handleClick, text, type}) {
  return (
    <button type={type} className='form-button next' onClick={handleClick}>
        <span>{text}</span>
        <img src={frontArrow} alt="front-arrow" />
    </button>
  )
}

export default NextButton