import React, { useContext, useState, useRef, useEffect } from 'react'
import labelDot from '../../assets/form-dot.png'
import PreviousButton from '../../reusables/FormButtons/PreviousButton'
import NextButton from '../../reusables/FormButtons/NextButton'
import { FormContext } from '../../pages/Hire'


function FormFive() {
    const formRef = useRef()
    const submitRef = useRef()
    const {handlePrevious, handleSubmit, formData, setFormData} = useContext(FormContext)
    const [error, setError] = useState({
        fullName: false,
        workEmail: false,
        companyName: false,
        position: false,
        otherCompanyInfo: false
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
    const checkInput = (e)=>{
        e.preventDefault()
        const fields = ["fullName", "workEmail", "companyName", "position", "otherCompanyInfo"]
        const newError = error
        for(let i=0; i < fields.length; i++){
            if(formData[fields[i]] === "") {
                newError[fields[i]] = true
            }
        }
        console.log(newError)
        return setError(newError)
    }
    useEffect(() => {
        const form = formRef.current
        const submit = submitRef.current
        const fields = ["fullName", "workEmail", "companyName", "position", "otherCompanyInfo"]
        submit.addEventListener('click', (e)=>{
            e.preventDefault()
            const newError = error
            for(let i=0; i < fields.length; i++){
                if(formData[fields[i]] === "") {
                    newError[fields[i]] = true
                }
            }
            setError(newError)
            console.log(error)
        });
        return () => {
        submit.removeEventListener('click', (e)=>{
            e.preventDefault()
            const newError = error
            for(let i=0; i < fields.length; i++){
                let field = fields[i]
                let errorField = error[fields[i]]
                if(formData[field] === "") {
                    newError[field] = true
                    setError((prev)=> ({...prev,  errorField: true}))
                }
            }
            setError(newError)
            console.log(error)
        });
        }
    },[error,formData])
    const resetError = async ()=> {
        setError({
            fullName: false,
            workEmail: false,
            companyName: false,
            position: false,
            otherCompanyInfo: false
        })
        console.log(error)
    }
    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({...formData, [name]: value})
        if(error[`${name}`]){
            setError({...error, [name]: false})
        }
        console.log(formData)
        console.log(error)
    }
    // const handleError = (e) => {
    //     const { value, name } = e.target;
    //     if(error[`${name}`]){
    //         setError({...error, [name]: false})
    //     }
    //     console.log(error)
    // }
    return (
    <form 
    ref={formRef} 
    method='post'  className='page-five'>
        <div className='question'>
            <img src={labelDot} alt="label-dot" />
            <p>Please fill your credentials</p>
        </div>
        {/* <div className="details">
            <div className={error["fullName"] ? 'form-details error' : 'form-details'}>
                <label htmlFor={"fullName"}>full Name</label>
                <input 
                    type="text" 
                    name="fullName"
                    id="fullName"
                    onClick={resetError}
                    placeholder="fullName"
                    value={formData["fullName"]}
                    onChange={e => handleChange(e)}
                />
                <p className='1'>{error["fullName"]}</p>
                <p className='4'>{error["fullName"] === "true"}</p>
                {error["fullName"] && <small>field cannot be empty</small>}
            </div>
        </div> */}

        <div className="details">
            {data.map((field, index)=>{
                return (
                    // <div className='form-details' key={index+1}>
                    <div className={error[`${field.name}`] ? 'form-details error' : 'form-details'} key={index+1}>
                        <label htmlFor={field.name}>{field.text}</label>
                        <input 
                            type={field.type} 
                            name={field.name} 
                            id={field.name}
                            // onClick={resetError}
                            // onClick={}
                            placeholder={field.placeholder}
                            value={formData[field.name]}
                            onChange={e => handleChange(e)}
                        />
                        {error[`${field.name}`] && <small>field cannot be empty</small>}
                    </div>
                )
            })}
        </div>

        <div className='question'>
            <img src={labelDot} alt="label-dot" />
            <p>Other Information</p>
        </div>
        <textarea 
            name="otherCompanyInfo" 
            value={formData['otherCompanyInfo']} 
            onClick={resetError}
            onChange={e=>setFormData({...formData, otherCompanyInfo: e.target.value})}
        ></textarea>
        {error['otherCompanyInfo'] && <small>field cannot be empty</small>}
        <div  className="buttons">
            <PreviousButton handlePrevious={handlePrevious} />
            <div ref={submitRef}>
                <NextButton type={"submit"} text={"Submit"}
                // handleClick={null}
                // handleClick={(e)=>checkInput(e)}
                
                />
            </div>
        </div>
    </form>
    )
}

export default FormFive