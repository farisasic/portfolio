import React from "react";
import { FiLinkedin, FiMail, FiGithub } from "react-icons/fi";
import { EMAIL, LINKEDIN, GITHUBLINK } from "../globals/variables";

const Footer = () => {
	return (
		<footer>
			<div className='contact'>
				<a href={LINKEDIN} rel='noopener noreferrer' target='_blank'>
					<FiLinkedin color='white' size={30} />
				</a>
				<a href={EMAIL}>
					<FiMail color='white' size={30} />
				</a>
				<a href={GITHUBLINK} rel='noopener noreferrer' target='_blank'>
					<FiGithub color='white' size={30} />
				</a>

				<p>Faris Asic &copy; 2020</p>
			</div>
		</footer>
	);
};

export default Footer;
