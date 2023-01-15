import React, { useContext } from 'react'
import labelDot from '../../assets/form-dot.png'
import NextButton from '../../reusables/FormButtons/NextButton'
import PreviousButton from '../../reusables/FormButtons/PreviousButton'
import { FormContext } from '../../pages/Hire'

function FormFour() {
    const { handleNext, handlePrevious, formData, setFormData} = useContext(FormContext)
    const data = [
        {
            text: "$1,000 - $3,000+",
            value: "1,000 - 3,000+"
        },
        {
            text: "$4,000 - $9,000+",
            value: "4,000 - 9,000+"
        },
        {
            text: "$10,000 and above",
            value: "10,000 and above"
        },
        {
            text: "Not decided",
            value: "not decided"
        }
    ]
    return (
    <form className='page-four' >
        <div className='question'>
            <img src={labelDot} alt="label-dot" />
            <p>What is the price estimate for the project?</p>
        </div>
        <div className="options">
            {data.map((service, index)=>{
                return (
                    <div className='form-options' key={index+1}>
                        <input 
                            type="radio" 
                            name="estimate" 
                            id={service.value} 
                            value={service.value} 
                            onChange={e=>setFormData({...formData, estimate: e.target.value})}
                        />
                        <label htmlFor={service.value}>{service.text}</label>
                    </div>
                )
            })}
        </div>
        <div className="buttons">
            <PreviousButton handlePrevious={handlePrevious} />
            <NextButton type={"button"} text={"Next"} handleClick={handleNext} />
        </div>
    </form>
    )
}

export default FormFour