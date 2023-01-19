import React from 'react'
import { Link } from 'react-router-dom'
import done from '../../assets/done-icon.png'

function SubmitPage() {
  return (
    <div className='submit-page'>
      <img src={done} alt="done-icon" />
      <p>Thank you for reaching out to us with the important details of your project.  One of Management team will reach out to you within 24hours </p>
      <Link to="/">
        <button>Home page</button>
      </Link>
    </div>
  )
}

export default SubmitPage