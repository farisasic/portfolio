import React from "react";
import { FARIS, LINKEDIN } from "../globals/variables";
import { FiLinkedin } from "react-icons/fi";

const About = () => {
	return (
		<main className='main-about'>
			<div className='about-me'>
				<h1>My name is Faris Asic and I'm a June 2020 graduate from BCIT TWD(Technical Web Designer) Program, based out of Vancouver, BC.</h1>
				<p>After being involved in the telecom industry for many years in tech support, service delivery, and business analyst roles, I've decided it's time to make a change and take a leap into Front-End Development. Coding was always something that I've thought about in the past but never dared or had the chance to explore. There is great excitement in me that I'm able to present myself this way finally.</p>
				<p>Soccer and hockey are my other passions. Saturday mornings usually involve watching every match I can of the EPL and Bundesliga live. Some of the teams I support are VfB Stuttgart, Wuerzburger Kickers, Vancouver Whitecaps and the Vancouver Canucks.</p>
				<p>I've lived in Vancouver, BC since 1998 and proud to call this place my home. No other city can match the beauty of the mountains, ocean, and blue skies on a sunny day, maybe because it's quite rare to have blue skies above Vancouver. I'm also fluent in three languages including English, German and Bosnian. Thanks for visiting.</p>
				<div className='linkedin-contact'>
					<p>Add me on <a href={LINKEDIN} rel='noopener noreferrer' target='_blank'><FiLinkedin color='#222629' size={30} /></a></p>
				</div>
				<div className='my-picture'>
					<img src={`${FARIS}`} alt="faris-webdev" />
				</div>
			</div>
		</main>
	);
};

export default About;
