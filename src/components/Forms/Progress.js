import React from 'react'

function Progress({step, percent}) {

  return (
    <div className='progress-step'>
        <label htmlFor="form">{percent}% completed</label>
        <progress name="form" value={step} max="5"></progress>
    </div>
  )
}

export default React.memo(Progress)