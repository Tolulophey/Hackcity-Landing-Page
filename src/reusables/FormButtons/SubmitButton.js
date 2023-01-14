import React from 'react'
import './formButtons.css'
import frontArrow from '../../assets/arrow-right.png'


function SubmitButton({handleSubmit}) {
  return (
    <button type='submit' className='form-button submit' onClick={handleSubmit}>
        <span>Submit</span>
        <img src={frontArrow} alt="front-arrow" />
    </button>
  )
}

export default SubmitButton