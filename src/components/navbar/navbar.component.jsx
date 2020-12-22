import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './navbar.styles.scss';
import { Link } from 'react-router-dom';
import MenuItem from '../../components/menu-item/menu-item.component';

function Navbar() {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	return (
		<div>
			<div className="navbar">
				<Link to="#" className="menu-bars">
					{' '}
					<FaIcons.FaBars />
				</Link>
			</div>
			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className="nav-menu-items">
					<li className="navbar-toggle">
						<Link to="#" className="menu-bars">
							<AiIcons.AiOutlineClose />
						</Link>
					</li>
				</ul>
				<MenuItem></MenuItem>
			</nav>
		</div>
	);
}

export default Navbar;
