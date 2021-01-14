import React, { useState, useEffect, useRef } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './navbar.styles.scss';
import { Link } from 'react-router-dom';
import MenuContents from '../menu-contents/menu-contents.component';
import { TimelineLite } from 'gsap';
import { Sling as Hamburger } from 'hamburger-react';

function Navbar() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	let menuBar = useRef(null);
	let logo = useRef(null);
	let firstLoad = false;

	let tl = new TimelineLite();
	let tl2 = new TimelineLite();

	useEffect(() => {
		if (sidebar) {
			tl.to(menuBar, 1, { css: { display: 'block', opacity: 1 } });
			tl2.to(logo, 1, { opacity: 0 });
		} else {
			tl2.to(logo, 0.2, { opacity: 1 });
			tl.to(menuBar, 1, { css: { display: 'none', opacity: 0 } });
		}
	}, [sidebar]);
	return (
		<div className="navbar-component-container">
			<div class="menu-bar" ref={(el) => (menuBar = el)}>
				<MenuContents
					setMenuState={(value) => setSidebar(value)}></MenuContents>
			</div>
			<img
				ref={(el) => (logo = el)}
				className="still-image"
				src={require(`../../assets/t15_logo.png`)}></img>
			<div className="navbar" onClick={() => setSidebar(!sidebar)}>
				<Hamburger
					toggled={sidebar}
					toggle={setSidebar}
					color="#FFFFFF"
					duration={0.8}
				/>
			</div>
		</div>
	);
}

export default Navbar;
