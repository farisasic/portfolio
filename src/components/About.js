import React from "react";
import { FARIS, LINKEDIN } from "../globals/variables";
import { FiLinkedin } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import FaArrowCircleUp from "../components/ScrollToTop";

const About = () => {
	return (
		<main className='main-about'>
			<div className='about-me'>
				<Fade left >
					<h1>My name is Faris Asic and I'm a June 2020 graduate from BCIT TWD(Technical Web Designer) Program, based out of Vancouver, BC.</h1>
				</Fade>
				<Fade right >
					<p>For the last 15 years, I've worked in various roles within the telecom industry; I was a Business Analyst for 3 years, and most recently moved on to a more customer-facing role at TELUS as a Digital Home Technician. While I enjoyed my time at TELUS, I realized that I wanted to explore a new path: Front-End Development. I've always had an interest in but never had the chance to explore.</p>
				</Fade>
				<Fade left >
					<p>I finally took the leap in January 2020 when I enrolled at BCIT and since then, I've been invigorated by all I've learned and am very excited to start my new career path as a Front-End Developer. </p>
				</Fade>
				<Fade right >
					<p>Outside of my career, I am passionate about soccer and hockey. My Saturday mornings usually consist of watching EPL and Bundesliga matches; cheering on VfB Stuttgart or Wuerzburger Kickers. As for hockey, go Canucks!</p>
				</Fade>
				<Fade left >
					<p>I am fluent in English, German and Bosnian and have called Vancouver, BC my home since 1998. Thanks for visiting!</p>
				</Fade>
				<div className='linkedin-contact'>
					<Fade left >
						<p>Connect with me on <a href={LINKEDIN} rel='noopener noreferrer' target='_blank'><FiLinkedin color='#222629' size={30} /></a></p>
					</Fade>
				</div>
				<div className='my-picture'>
					<Fade up duration={2000}>
						<img src={`${FARIS}`} alt="Faris Asic Front-End Developer" />
					</Fade>
				</div>
			</div>
			<FaArrowCircleUp />
		</main>
	);
};

export default About;
