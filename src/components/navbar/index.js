import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logoCircle from '../../images/logocircle.png';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import clubs from '../../images/suits/clubs.svg'
import diamond from '../../images/suits/diamond.svg'
import heart from '../../images/suits/heart.svg'
import spades from '../../images/suits/spades.svg'
import AWSWrapper from "../shared/awswrapper/awswrapper";

class MainNavbar extends Component {

    render() {
        return (
            <Navbar bg="light" expand="md" className="nav">
                <Navbar.Brand href="/">
                    <img src={logoCircle} style={{ width: "3em" }} />
                    <span style={{marginLeft: "6px"}}>
                        Volunteer Tutoring
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" id="hello">
                    <Nav className="ml-auto">
                        <AWSNavItem
                            name="Mission"
                            img={heart}
                            divlink="mission"
                        />
                        <AWSNavItem
                            name="Team"
                            img={clubs}
                            divlink="team"
                        />
                        <AWSNavItem
                            name="Sign Up"
                            img={diamond}
                            divlink="signup"
                        />
                        <AWSNavItem
                            name="Contact"
                            img={spades}
                            divlink="contact"
                        />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const AWSNavItem = ({ name, img, divlink }) => (
    <a href={`#${divlink}`} class="navitem">
        <span>
            <img src={img} className="navimage" />
            {name}
        </span>
    </a>
)

export default MainNavbar;