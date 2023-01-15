import React, {useState} from 'react'
import Business from '../components/Business/Business'
import Footer from '../components/Footer/Footer'
import HireUs from '../components/Hire Us/HireUs'

export const FormContext = React.createContext()
function Hire() {
  const [step, setStep] = useState(4)
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
  const handleSubmit = (e)=>{
      e.preventDefault()
      if(step > 0){
          setStep((prevStep)=> prevStep - 1)
      }
  }
  return (
    <>
    <FormContext.Provider value={{
        step: step,
        setStep: setStep,
        formData: formData,
        setFormData: setFormData,
        handleNext: handleNext,
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