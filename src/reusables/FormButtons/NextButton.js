import React from 'react'
import './formButtons.css'
import frontArrow from '../../assets/arrow-right.png'



function NextButton({handleNext}) {
  return (
    <button type='button' className='form-button next' onClick={handleNext}>
        <span>Next </span>
        <img src={frontArrow} alt="front-arrow" />
    </button>
  )
}

export default NextButton