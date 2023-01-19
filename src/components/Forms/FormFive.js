import React, { useContext, useState } from 'react'
import labelDot from '../../assets/form-dot.png'
import PreviousButton from '../../reusables/FormButtons/PreviousButton'
import NextButton from '../../reusables/FormButtons/NextButton'
import { FormContext } from '../../pages/Hire'


function FormFive() {
    const {handlePrevious, handleSubmit, formData, setFormData} = useContext(FormContext)
    const [error, setError] = useState({
        fullName: false,
        workEmail: false,
        companyName: false,
        position: false,
    })
    const data = [
        {
            text: "Full Name",
            name: "fullName",
            placeholder: "eg. John Doe",
            error: error.fullName,
            type: "text"
        },
        {
            text: "Work Email",
            name: "workEmail",
            placeholder: "eg. johndoe@example.com",
            error: error.workEmail,
            type: "email"
        },
        {
            text: "Company Name",
            name: "companyName",
            placeholder: "eg. HackCity Tech Inc.",
            error: error.companyName,
            type: "text"
        },
        {
            text: "Position",
            name: "position",
            placeholder: "eg. Program Director",
            error: error.position,
            type: "text"
        },
        
    ]
    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({...formData, [name]: value})
    }
    return (
    <form className='page-five'>
        <div className='question'>
            <img src={labelDot} alt="label-dot" />
            <p>Please fill your credentials</p>
        </div>
        <div className="details">
            {data.map((field, index)=>{
                return (
                    <div className='form-details' key={index+1}>
                        <label htmlFor={field.name}>{field.text}</label>
                        <input 
                            type={field.type} 
                            name={field.name} 
                            id={field.name} 
                            placeholder={field.placeholder}
                            value={formData[field.name]}
                            onChange={e => handleChange(e)}
                        />
                    {field.error && <small>field cannot be empty</small>}
                    </div>
                )
            })}
        </div>

        <div className='question'>
            <img src={labelDot} alt="label-dot" />
            <p>Other Information</p>
        </div>
        <textarea 
            name="otherProjectInfo" 
            value={formData.otherCompanyInfo} 
            onChange={e=>setFormData({...formData, otherCompanyInfo: e.target.value})}
        ></textarea>
        {error.otherCompanyInfo && <small>field cannot be empty</small>}
        <div className="buttons">
            <PreviousButton handlePrevious={handlePrevious} />
            <NextButton type={"submit"} text={"Submit"} handleClick={handleSubmit} />

        </div>
    </form>
    )
}

export default FormFive