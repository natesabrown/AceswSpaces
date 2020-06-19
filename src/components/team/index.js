import React from 'react';
import AWSWrapper from '../shared/awswrapper/awswrapper'

import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import clubs from '../../images/suits/clubs.svg'
import nate from '../../images/profile_pics/nate.jpg'
import puranjay from '../../images/profile_pics/puranjay.jpg'
import './style.css'

const Team = () => (
    <div>
        <div id="overflowdiv">
            <div id="cardbgdiv">

            </div>
        </div>
        <AWSWrapper
            name="Our Team"
            img={clubs}
            divid="team"
        >
            <div id="maingrid">
                <PuranjayCard />
                <NateCard />
            </div>
        </AWSWrapper>
    </div>
);

export default Team;

const PersonCard = ({ name, role, img, bio }) => (
    <div class="personcard">
        <div style={{ display: "inline-block", width: "100%" }}>
            <img src={img} />
            <div id="name">{name}</div>
            <div id="role">{role}</div>
        </div>
        <div id="bio">
            <span id="quoteimgleft"><FaQuoteLeft /></span>
            {bio}
            {/* <span id="quoteimgright"><FaQuoteRight /></span> */}
        </div>
    </div>
);

const EmptyCard = () => (
    <div class="emptydiv"></div>
)

const NateCard = () => (
    <PersonCard
        name="Nate Brown"
        role="Technology Director"
        img={nate}
        bio="Hey, my name is Nathaniel, or Nate for short! I joined this project to help students struggling to find academic resources during these hard times, and to use my design skills for the good of the community! I go to TAMS at UNT."
    />
)

const PuranjayCard = () => (
    <PersonCard
        name="Puranjay Shori"
        role="Co-President"
        img={puranjay}
        bio="Puranjay Shori is a student at the Texas Academy of Mathematics and Science. He enjoys studying Physics and Biology, as well as playing music. He has a passion for teaching and loves to help whenever he can."
    />
)