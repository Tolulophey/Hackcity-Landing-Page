import React, { useContext, useState } from 'react'
import labelDot from '../../assets/form-dot.png'
import NextButton from '../../reusables/FormButtons/NextButton'
import { FormContext } from '../../pages/Hire'


function FormOne() {
    const {handleNext, setFormData, formData} = useContext(FormContext)
    const [serviceError, setServiceError] = useState(false)
    const [serviceDescError, setServiceDescError] = useState(false)
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
    return (
    <form className='page-one'>
        <div className='question'>
            <img src={labelDot} alt="label-dot" />
            <p>What can <span>Hack City Tech</span> do for you?</p>
        </div>
        <div className="options">
            {data.map((service, index)=>{
                return (
                    <div className='form-options' key={index+1}>
                        <input 
                            type="radio" 
                            name="service" 
                            id={service.value}      
                            onClick={()=> {if(serviceError) setServiceError(false)}}
                            checked= {formData.service === service.value}
                            value={service.value} 
                            onChange={e=>setFormData({...formData, service: e.target.value})}
                        />
                        <label htmlFor={service.value}>{service.text}</label>
                    </div>
                )
            })}
        </div>
        {serviceError && <small>field cannot be empty</small>}
        <div className='question'>
            <img src={labelDot} alt="label-dot" />
            <p>What can <span>Hack City Tech</span> do for you?</p>
        </div>
        <textarea 
            name="serviceDesc" 
            value={formData.serviceDesc}
            onClick={()=> {if(serviceDescError) setServiceDescError(false)}}
            onChange={e=>setFormData({...formData, serviceDesc: e.target.value})} 
        ></textarea>
        {serviceDescError && <small>field cannot be empty</small>}
        
        <div className="button">
            <NextButton 
            type={"button"} 
            text="Next" 
            handleClick={()=>handleNext(formData.service, formData.serviceDesc, setServiceError, setServiceDescError)} 
            />
        </div>
    </form>
    )
}

export default FormOne