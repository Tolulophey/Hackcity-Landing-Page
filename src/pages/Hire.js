import React, {useState} from 'react'
import Business from '../components/Business/Business'
import Footer from '../components/Footer/Footer'
import HireUs from '../components/Hire Us/HireUs'

export const FormContext = React.createContext()
function Hire() {
  const [step, setStep] = useState(0)
  return (
    <>
    <FormContext.Provider value={{
        step: step,
        setStep: setStep
    }}>
      <HireUs />
    </FormContext.Provider>
    <Business />
    <Footer />
    </>
  )
}

export default Hire