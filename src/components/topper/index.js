import React from 'react'

import SpinningLogo from '../spinning_logo'
import visitInstagram from '../../images/visitinstagram.png'
import './style.css'

const Topper = () => (
    <div id="topperdiv">
        <div id="spinner">
            <SpinningLogo />
        </div>
        <a href="https://www.instagram.com/aceswspaces/" target="_blank">
            <img src={visitInstagram} id="instagram" />
        </a>
    </div>
)

export default Topper;