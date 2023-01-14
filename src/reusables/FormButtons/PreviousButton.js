import React from 'react'
import './formButtons.css'
import backArrow from '../../assets/arrow-left.png'

function PreviousButton({handlePrevious}) {
  return (
    <button type='buttton' className='form-button previous' onClick={handlePrevious}>
        <img src={backArrow} alt="back-arrow" />
        <span>Previous</span>
    </button>
  )
}

export default PreviousButton