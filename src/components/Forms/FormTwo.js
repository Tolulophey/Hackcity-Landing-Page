import React, { useContext } from 'react'
import labelDot from '../../assets/form-dot.png'
import NextButton from '../../reusables/FormButtons/NextButton'
import PreviousButton from '../../reusables/FormButtons/PreviousButton'
import { FormContext } from '../../pages/Hire'


function FormTwo() {
    const {step, setStep} = useContext(FormContext)
    const data = [
        {
            text: "Healthcare and Pharma",
            value: "health/pharma"
        },
        {
            text: "Fintech/Finance",
            value: "fintech"
        },
        {
            text: "Technology Company",
            value: "tech-comp"
        },
        {
            text: "Automotive",
            value: "automotive"
        },
        {
            text: "Logistics & Transport",
            value: "logistics"
        },
        {
            text: "Education",
            value: "education"
        },
        
        {
            text: "Insurance",
            value: "insurance"
        },
        {
            text: "Blockchain",
            value: "blockchain"
        }
    ]
    const handleNext = (e)=>{
        e.preventDefault()
        if(step < 5){
            setStep((prevStep)=> prevStep + 1)
        }
    }
    const handlePrevious = (e)=>{
        e.preventDefault()
        if(step > 0){
            setStep((prevStep)=> prevStep - 1)
        }
    }
    return (
    <form >
        <div className='question'>
            <img src={labelDot} alt="label-dot" />
            <p>What is the Application/Product Domain?</p>
        </div>
        <div className="options">
            {data.map((service, index)=>{
                return (
                    <div className='form-options' key={index+1}>
                        <input type="radio" name="service" id={service.value} value={service.value}/>
                        <label htmlFor={service.value}>{service.text}</label>
                    </div>
                )
            })}
        </div>
        <div className='question'>
            <img src={labelDot} alt="label-dot" />
            <p>Others</p>
        </div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <div className="buttons">
            <PreviousButton handlePrevious={handlePrevious} />
            <NextButton handleNext={handleNext} />
        </div>
    </form>
    )
}

export default FormTwo