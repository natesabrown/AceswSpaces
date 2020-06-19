import React from 'react'

import AWSWrapper from '../shared/awswrapper/awswrapper'
import heart from '../../images/suits/heart.svg'
import signature from '../../images/signature.svg'
import { GrMail } from 'react-icons/gr'
import { GrInstagram } from 'react-icons/gr'

import './style.css'

const Mission = () => (
    <AWSWrapper
        name="Our Mission"
        img={heart}
        divid="mission"
        isBlack={true}
    >
        <p>
            Welcome to <span id="title">Aces&nbsp;with&nbsp;Spaces!</span>
        </p>
        <p>
            Our mission is to provide Texas students with a greater education, regardless of income
            or circumstance. With volunteers from <strong>UT Austin</strong>, the <strong>University of
            Texas at Dallas</strong>, and the <strong>University of North Texas</strong>, we offer free
            tutoring in many subjects, including:
            <ul>
                <div id="list">
                    <li>SAT</li>
                    <li>History</li>
                    <li>Math</li>
                    <li>Writing</li>
                </div>
            </ul>
            <div style={{ width: "100%", textAlign: "right", paddingRight: "20%" }}>
                ...and <u>many more!</u>
            </div>
        </p>
        <p>
            Whether you got left behind educationally because of COVID-19 or just feel insecure about
            your educational future, we're here to help. If you're interested, fill out the tutoring form
            below!
        </p>
        <p>
            For any questions or concerns, email us at <a href="mailto:acewspace@gmail.com"><GrMail /> acewspace@gmail.com</a> or
            visit our <a href="https://www.instagram.com/aceswspaces/"><GrInstagram /> insta</a>. We look forward to talking with you!
        </p>
        <div id="funnewdiv">
            <div id="signaturediv" style={{ float: "right" }}>
                <img src={signature} id="signature" />
            </div>
        </div>

    </AWSWrapper>

)

export default Mission;