import React from 'react'
import './style.css'

const AWSWrapper = ({ children, name, img, divid, isBlack }) => (
    <div id={divid}>
        <div id="wrapperdiv" className={isBlack ? 'blackborder' : null}>
            <div id="titlediv">
                <img src={img} />
                <span id="titletext">
                    {name}
                </span>
            </div>
            <div id="childrendiv">
                {children}
            </div>
        </div>
    </div>
);

export default AWSWrapper;