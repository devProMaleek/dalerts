// Import the necessary libraries.
import React from 'react';
import { Link } from 'react-router-dom';


// Import the styled Component
import { Wrapper, AlertContent, Content, Line} from "./Navbar.styles";


// Create Navbar component.
const Navbar = () => (
    <Wrapper>
        <AlertContent>
            <Link to="/">
                <div className="container">
                    <img src="/img/Vector.png" alt=""/>
                    <p className="dalerts">dAlerts</p>
                </div>
            </Link>
            <p className="nav-text">My Alerts</p>
        </AlertContent>
        <Content>
            <span/>
            <p>0xFa34..51GF</p>
        </Content>
        <Line/>
    </Wrapper>
);

// Export Navbar Component
export default Navbar;