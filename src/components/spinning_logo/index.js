import React, { Component } from "react"
import bottomCard from '../../images/spinning_logo/bottomcard.svg'
import middleCard from '../../images/spinning_logo/middlecard.svg'
import topCard from '../../images/spinning_logo/topcard.svg'
import logoBase from '../../images/spinning_logo/awsbase.png'
import './style.scss'

class SpinningLogo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            topCardRotate: 0,
            middleCardRotate: 0,
            bottomCardRotate:0
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ 
                topCardRotate: 28,
                middleCardRotate: -19,
                bottomCardRotate: -40
             });
        }, 0)
    }

    render() {
        const { bottomCardRotate, middleCardRotate, topCardRotate } = this.state
        const bottomStyle = { 
            transform: `rotate(${bottomCardRotate}deg)`,
            left: '15px'
        };
        const middleStyle = {
            transform: `rotate(${middleCardRotate}deg)` 
        };
        const topStyle = {
            transform: `rotate(${topCardRotate}deg)` 
        };

        return (
            <div class="cardholder">
                <img class="awscard bottomcard" src={bottomCard} alt="" style={bottomStyle}/>
                <img class="awscard" src={middleCard} alt="" style={middleStyle} />
                <img class="awscard" src={topCard} alt="" style={topStyle} />
                <img class="logobase" src={logoBase} alt="" />
            </div>
        )
    }
}

export default SpinningLogo;