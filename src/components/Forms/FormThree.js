import React, { useContext } from 'react'
import labelDot from '../../assets/form-dot.png'
import NextButton from '../../reusables/FormButtons/NextButton'
import PreviousButton from '../../reusables/FormButtons/PreviousButton'
import { FormContext } from '../../pages/Hire'


function FormThree() {
    const {handleNext, handlePrevious,formData, setFormData} = useContext(FormContext)
    const data1 = [
        {
            text: "Short term (Up to 3 months)",
            value: "short-term"
        },
        {
            text: "Medium Term ( 3 to 6 Months)",
            value: "medium-term"
        },
        {
            text: "Long Term (More than 6 months)",
            value: "long-term"
        }
    ]
    const data2 = [
        {
            text: "Immediately",
            value: "immediately"
        },
        {
            text: "Within 2 weeks",
            value: "within 2 weeks"
        },
        {
            text: "Within a month",
            value: "within a month"
        },
        
        {
            text: "Not decided",
            value: "not decided"
        }
    ]
    return (
    <form className='page-three' >
        <div className='question'>
            <img src={labelDot} alt="label-dot" />
            <p>What is the Application/Product Domain?</p>
        </div>
        <div className="options">
            {data1.map((service, index)=>{
                return (
                    <div className='form-options' key={index+1}>
                        <input 
                            type="radio" 
                            name="timeline" 
                            id={service.value} 
                            value={service.value} 
                            onChange={e=>setFormData({...formData, timeline: e.target.value})}
                        />
                        <label htmlFor={service.value}>{service.text}</label>
                    </div>
                )
            })}
        </div>
        <div className='question'>
            <img src={labelDot} alt="label-dot" />
            <p>When are you likely to start this project ?</p>
        </div>
        <div className="options">
            {data2.map((service, index)=>{
                return (
                    <div className='form-options' key={index+1}>
                        <input 
                            type="radio" 
                            name="startTime" 
                            id={service.value} 
                            value={service.value} 
                            onChange={e=>setFormData({...formData, startTime: e.target.value})}
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

export default FormThree