import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";
import Fade from "react-reveal/Fade";
import { FiMail, FiMenu } from "react-icons/fi";
import { EMAIL } from "../globals/variables";

const HeaderNav = (props) => {
	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<Navbar>
			<div className='logo'>
				<NavbarBrand href='/' className='logo-link'>
					<h1>Farkoweb</h1>
				</NavbarBrand>
			</div>
			<NavbarToggler onClick={toggleNavbar} className='navigation'>
				<FiMenu size={30} />
			</NavbarToggler>

			<Collapse isOpen={!collapsed} navbar>
				<Nav navbar>
					<Fade left duration={700}>
						<NavItem>
							<NavLink onClick={toggleNavbar} to='/' exact>
								Home
							</NavLink>
						</NavItem>
					</Fade>
					<Fade left duration={1000}>
						<NavItem>
							<NavLink onClick={toggleNavbar} to='/projects'>
								Projects
							</NavLink>
						</NavItem>
					</Fade>
					<Fade left duration={1200}>
						<NavItem>
							<NavLink onClick={toggleNavbar} to='/about'>
								About
							</NavLink>
						</NavItem>
					</Fade>
					<Fade left duration={1500}>
						<NavItem>
							<a href={EMAIL}>
								<FiMail size={25} />
							</a>
						</NavItem>
					</Fade>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default HeaderNav;
