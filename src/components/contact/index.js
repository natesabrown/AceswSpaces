import React from 'react';
import AWSWrapper from '../shared/awswrapper/awswrapper';

import spades from '../../images/suits/spades.svg';
import { GrMail } from 'react-icons/gr'
import { GrInstagram } from 'react-icons/gr'
import './style.css'

const Contact = () => (
    <AWSWrapper
        name="Contact"
        img={spades}
        divid="contact"
    >
        <div id="contactdiv">
            <p>
                <a href="mailto:acewspace@gmail.com" className="email"><GrMail className="contacticon"/> acewspace@gmail.com</a>
            </p>
            <p>
                <a href="https://www.instagram.com/aceswspaces/" className="instahandle"><GrInstagram className="contacticon"/> <span>@aceswspaces</span></a>
            </p>
            <p style={{marginTop: "30px"}}>
            Feel free to reach out to us if you have any questions about our service! 
            </p>
        </div>
    </AWSWrapper>
)

export default Contact
