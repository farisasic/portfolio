import React from 'react';
import { NavLink } from 'react-router-dom';


const HeaderNav = () => {



    return (
        
        <nav className="home-navbar">          
            <NavLink to="/" exact>Home</NavLink>               
            <NavLink to="/projects">Projects</NavLink>               
            <NavLink to="/about">About</NavLink>     
        </nav>
        
        )
    };

export default HeaderNav;