import React, { useContext, useState } from 'react'
import labelDot from '../../assets/form-dot.png'
import NextButton from '../../reusables/FormButtons/NextButton'
import PreviousButton from '../../reusables/FormButtons/PreviousButton'
import { FormContext } from '../../pages/Hire'


function FormTwo() {
    const {handleNext, handlePrevious, formData, setFormData} = useContext(FormContext)
    const [applicationError, setApplicationError] = useState(false)
    const [otherProjectInfoError, setOtherProjectInfoError] = useState(false)
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
    return (
    <form method='post' className='page-two' >
        <div className='question'>
            <img src={labelDot} alt="label-dot" />
            <p>What is the Application/Product Domain?</p>
        </div>
        <div className="options">
            {data.map((service, index)=>{
                return (
                    <div className='form-options' key={index+1}>
                        <input 
                            type="radio" 
                            name="application" 
                            id={service.value} 
                            value={service.value}
                            onClick={()=> {if(applicationError) setApplicationError(false)}}
                            checked= {formData.application === service.value}
                            onChange={e=>setFormData({...formData, application: e.target.value})}
                        />
                        <label htmlFor={service.value}>{service.text}</label>
                    </div>
                )
            })}
        </div>
        {applicationError && <small>field cannot be empty</small>}
        <div className='question'>
            <img src={labelDot} alt="label-dot" />
            <p>Others</p>
        </div>
        <textarea 
            name="otherProjectInfo" 
            value={formData.otherProjectInfo}
            onClick={()=> {if(otherProjectInfoError) setOtherProjectInfoError(false)}}
            onChange={e=>setFormData({...formData, otherProjectInfo: e.target.value})}
        ></textarea>
        {otherProjectInfoError && <small>field cannot be empty</small>}
        <div className="buttons">
            <PreviousButton handlePrevious={handlePrevious} />
            <NextButton type={"button"} 
                text="Next"
                handleClick={()=>handleNext(formData.application, formData.otherProjectInfo, setApplicationError, setOtherProjectInfoError)} />
        </div>
    </form>
    )
}

export default FormTwo