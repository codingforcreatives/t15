import React, { useState, useEffect, useRef } from 'react';
import './navbar.styles.scss';
import MenuContents from '../menu-contents/menu-contents.component';
import { TimelineLite } from 'gsap';
import { withRouter, Link } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';

function Navbar() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	let menuBar = useRef(null);
	let logo = useRef(null);
	let firstLoad = false;

	let tl = new TimelineLite();
	let tl2 = new TimelineLite();

	const goHome = () => {
		// history.push(linkURL);
	};

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
			<Link to="/services">
				<img
					ref={(el) => (logo = el)}
					className="still-image"
					src={require(`../../assets/t15_logo.png`)}></img>
			</Link>
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

export default withRouter(Navbar);
