import React from 'react'
import './style.css'

const AWSWrapper = ({ children, name, img, divid, isBlack }) => (
    <div>
        <div id="wrapperdiv" className={isBlack ? 'blackborder' : null}>
            <div id="titlediv">
                <div id={divid}>
                <img src={img} />
                <span id="titletext">
                    {name}
                </span>
                </div>
            </div>
            <div id="childrendiv">
                {children}
            </div>
        </div>
    </div>
);

export default AWSWrapper;