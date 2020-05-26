import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';
  import Fade from 'react-reveal/Fade';

 

const HeaderNav = (props) => {

    const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        
        <Navbar>
            <div className="logo">
                    <NavbarBrand href="/" className="logo-link"><h1>Farkoweb</h1></NavbarBrand>
                </div>
            <NavbarToggler onClick={toggleNavbar} className="navigation">
                <p>Menu</p>
            </NavbarToggler>
             
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                <Fade left>
                    <NavItem>    
                        <NavLink onClick={toggleNavbar} to="/" exact>Home</NavLink>
                    </NavItem>
                    </Fade>
                    <Fade left>
                    <NavItem>              
                        <NavLink onClick={toggleNavbar} to="/projects">Projects</NavLink>
                    </NavItem>
                    </Fade>
                    <Fade left>
                    <NavItem>               
                        <NavLink onClick={toggleNavbar} to="/about">About</NavLink>
                    </NavItem>
                    </Fade>     
                </Nav>
            </Collapse>
        </Navbar>
        
        )
    };

export default HeaderNav;