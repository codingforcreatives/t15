import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './navbar.styles.scss';
import { Link } from 'react-router-dom';
import MenuContents from '../menu-contents/menu-contents.component';

function Navbar() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);
	return (
		<div className="navbar-component-container">
			<MenuContents></MenuContents>
			<div className="navbar">
				<Link to="#" className="hamburger">
					{' '}
					<FaIcons.FaBars />
				</Link>
			</div>
			<nav className={sidebar ? 'hamburger active' : 'nav-menu'}>
				<ul className="nav-menu-items">
					<li className="navbar-toggle">
						<Link to="#" className="menu-bars">
							<AiIcons.AiOutlineClose />
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
