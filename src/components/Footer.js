import React from 'react';
import { Linkedin, Mail } from 'react-feather';
import {EMAIL} from '../globals/variables';


const Footer = () => {

    

        return(
            <footer>
                
                <div className="contact">
                        <a href="https://www.linkedin.com/in/faris-asic-44b15989" rel="noopener noreferrer" target="_blank">
                            <Linkedin color="white" size={30}/>
                        </a>
                        <a href={EMAIL}>
                            <Mail color="white" size={30}/>
                        </a>
                    
                <p>Faris Asic &copy; 2020</p>
                </div>     
            </footer>
        )
    }

export default Footer;