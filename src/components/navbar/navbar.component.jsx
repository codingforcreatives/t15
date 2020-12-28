import React, { useState, useEffect, useRef } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './navbar.styles.scss';
import { Link } from 'react-router-dom';
import MenuContents from '../menu-contents/menu-contents.component';
import { TimelineLite } from 'gsap';

function Navbar() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	let menuBar = useRef(null);
	let firstLoad = false;

	let tl = new TimelineLite();

	useEffect(() => {
		sidebar
			? tl.to(menuBar, 1, { css: { display: 'block', opacity: 1 } })
			: tl.to(menuBar, 1, { css: { display: 'none', opacity: 0 } });
	}, [sidebar]);
	return (
		<div className="navbar-component-container">
			<div class="menu-bar" ref={(el) => (menuBar = el)}>
				<MenuContents></MenuContents>
			</div>
			<div className="navbar" onClick={() => setSidebar(!sidebar)}>
				{sidebar ? (
					<Link to="#" className="close">
						<AiIcons.AiOutlineClose />
					</Link>
				) : (
					<Link to="#" className="hamburger">
						<FaIcons.FaBars />
					</Link>
				)}
			</div>
		</div>
	);
}

export default Navbar;
