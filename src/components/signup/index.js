import React from 'react'
import AWSWrapper from '../shared/awswrapper/awswrapper'

import diamond from '../../images/suits/diamond.svg'
import { AiFillChrome } from 'react-icons/ai'
import './style.css'

const SignUp = () => (
    <AWSWrapper
        name="Sign Up"
        img={diamond}
        divid="signup"
        isBlack={true}
    >
        <div id="framediv">
            <a href="https://forms.gle/tUUewpXyPUCr9DVh7" target="_blank" id="framebutton"><AiFillChrome style={{fontSize:"20px", transform:"translateY(-2px)"}}/> Open Google Form</a>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfOP2iVVq5-W1MFUH7_rxiUSrvIHXqp-8tw-2noGZIuW7pOpA/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0" id="formframe">Loading…</iframe>
        </div>
    </AWSWrapper>
)

export default SignUp;