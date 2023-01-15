import React, {useContext} from 'react'
import background1 from '../../assets/hireus-left-1.png'
import background2 from '../../assets/hireus-left-2.png'
import background3 from '../../assets/hireus-left-3.png'
import background4 from '../../assets/hireus-left-4-6.png'
import Forms from '../Forms/Forms'
import Progress from '../Forms/Progress'
import './hireUs.css'
import { FormContext } from '../../pages/Hire'

function HireUs() {
    const {step} = useContext(FormContext)
    let background, text, percent
    switch (step) {
        case 5:
            background = background4
            percent = 100
            text = "Six"
            break;
        case 4:
            background = background4
            percent = 80
            text = "Five"
            break;
        case 3:
            background = background4
            percent = 60
            text = "Four"
            break;
        case 2:
            background = background3
            percent = 40
            text = "Three"
            break;
        case 1:
            background = background2
            percent = 20
            text = "Two"
            break;
        default:
            background = background1
            percent = 0
            text = "One"
            break;
    }
    return (
    <div className='hire-us'>
        <div className="left">
            <div>
                <h2>Hire Us</h2>
                <p>Step {text}</p>
            </div>
            <img src={background} alt={`step-${text.toLowerCase()}-background`} className={`step-${text.toLowerCase()}-background-image`} />
        </div>
        <div className="right">
            <p className='heading'>We boast of highly skilled and experienced tech personnel. We handle every projects with experience</p>
            <Progress step={step} percent={percent} />
            <Forms  />
        </div>
    </div>
    )
}

export default HireUs