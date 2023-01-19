import React, {useState} from 'react'
import Business from '../components/Business/Business'
import Footer from '../components/Footer/Footer'
import HireUs from '../components/Hire Us/HireUs'

export const FormContext = React.createContext()
function Hire() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    service: "",
    serviceDesc: "",
    application: "",
    otherProjectInfo: "",
    timeline: "",
    startTime: "",
    estimate: "",
    fullName: "",
    workEmail: "",
    companyName: "",
    position: "",
    otherCompanyInfo: ""
  })
  const handleNext2 = (field1, setField1) => {
    if(field1=== "" ){
      return setField1(true)
    } else if(step < 5){
        setStep((prevStep)=> prevStep + 1)
    }
  }
  const handleNext = (field1, field2, setField1, setField2) => {
    if(field1=== "" && field2 !== ""){
      return setField1(true)
    } else if(field1 !== "" && field2 === ""){
        return setField2(true)
    } else if(field1 === "" && field2 === ""){
        setField1(true)
        setField2(true)
        return 0
    } else if(step < 5){
        setStep((prevStep)=> prevStep + 1)
    }
  }
  const handlePrevious = ()=>{
    if(step > 0){
        setStep((prevStep)=> prevStep - 1)
    }
  }
  const handleSubmit = (e)=>{
      e.preventDefault()
      if(step < 5){
          setStep((prevStep)=> prevStep + 1)
      }
      console.log(formData)
  }
  return (
    <>
    <FormContext.Provider value={{
        step: step,
        setStep: setStep,
        formData: formData,
        setFormData: setFormData,
        handleNext: handleNext,
        handleNext2: handleNext2,
        handlePrevious: handlePrevious,
        handleSubmit: handleSubmit
    }}>
      <HireUs />
    </FormContext.Provider>
    <Business />
    <Footer />
    </>
  )
}

export default Hire