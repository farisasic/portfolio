import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from './HeaderNav';


const Header = () => {
        return(
            <header>
                <div className="logo">
                    <h1><Link className="logo-link" to="/">Farkoweb</Link></h1>
                </div>
                <HeaderNav />
            </header>
        )
    }

export default Header;