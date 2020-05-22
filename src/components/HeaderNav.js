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

 

const HeaderNav = (props) => {

    const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        
        <Navbar>
            <div className="logo">
                    <NavbarBrand href="/" className="logo-link"><h1>Farkoweb</h1></NavbarBrand>
                </div>
            <NavbarToggler onClick={toggleNavbar} className="navigation" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                   
                        <NavItem>    
                            <NavLink onClick={toggleNavbar} to="/" exact>Home</NavLink>
                        </NavItem>

                        <NavItem>              
                            <NavLink onClick={toggleNavbar} to="/projects">Projects</NavLink>
                        </NavItem>

                        <NavItem>               
                            <NavLink onClick={toggleNavbar} to="/about">About</NavLink>
                        </NavItem>
                          
                </Nav>
            </Collapse>
        </Navbar>
        
        )
    };

export default HeaderNav;