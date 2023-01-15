import React, {useContext} from 'react'
import './form.css'
import FormOne from './FormOne'
import FormTwo from './FormTwo'
import FormThree from './FormThree'
import FormFour from './FormFour'
import FormFive from './FormFive'
import SubmitPage from './SubmitPage'
import { FormContext } from '../../pages/Hire'

function Forms() {
    const {step} = useContext(FormContext)
    return (
    <div className='form'>
        {
            step === 5 ? <SubmitPage />
                    : step === 4 ? <FormFive />
                        : step === 3 ? <FormFour />
                            : step === 2 ? <FormThree />
                                : step === 1 ? <FormTwo /> : <FormOne />
        }
    </div>
    )
}

export default React.memo(Forms)