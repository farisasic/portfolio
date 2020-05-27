import React from "react";
import { Linkedin, Mail } from "react-feather";
import { EMAIL, LINKEDIN } from "../globals/variables";

const Footer = () => {
	return (
		<footer>
			<div className='contact'>
				<a href={LINKEDIN} rel='noopener noreferrer' target='_blank'>
					<Linkedin color='white' size={30} />
				</a>
				<a href={EMAIL}>
					<Mail color='white' size={30} />
				</a>

				<p>Faris Asic &copy; 2020</p>
			</div>
		</footer>
	);
};

export default Footer;
