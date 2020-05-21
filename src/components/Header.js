import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
        return(
            <header>
                <div className="logo">
                    <h1><Link className="logo-link" to="/">Faris Asic Portfolio</Link></h1>
                </div>
            </header>
        )
    }

export default Header;