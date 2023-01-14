import React from 'react'
import './buttonTwo.css'

function ButtonTwo({text, className}) {
    return (
    <button className={`button2 ${className}`}>
        <span>{text}</span>
    </button>
    )
}

export default ButtonTwo