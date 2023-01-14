import React, { useContext } from 'react'
import labelDot from '../../assets/form-dot.png'
import NextButton from '../../reusables/FormButtons/NextButton'
import { FormContext } from '../../pages/Hire'


function FormOne() {
    const {step, setStep} = useContext(FormContext)
    const data = [
        {
            text: "SaaS (Software as a Service) Development",
            value: "saas"
        },
        {
            text: "Web Application Development",
            value: "web-app"
        },
        {
            text: "Mobile App Development",
            value: "mobile-app"
        },
        {
            text: "API Development",
            value: "api"
        },
        {
            text: "MVP Development",
            value: "mvp"
        },
        {
            text: "UI/UX Design",
            value: "ui/ux"
        },
        {
            text: "Blockchain Application",
            value: "blockchain-app"
        },
        {
            text: "Smart Contract",
            value: "smart-contract"
        },
        {
            text: "Training",
            value: "training"
        },
        {
            text: "Consultation",
            value: "consultation"
        },
    ]
    const handleNext = (e)=>{
        e.preventDefault()
        if(step < 5){
            setStep((prevStep)=> prevStep + 1)
        }
    }
    return (
    <form >
        <div className='question'>
            <img src={labelDot} alt="label-dot" />
            <p>What can <span>Hack City Tech</span> do for you?</p>
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
            <p>What can <span>Hack City Tech</span> do for you?</p>
        </div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <div className="button">
            <NextButton handleNext={handleNext} />
        </div>
    </form>
    )
}

export default FormOne