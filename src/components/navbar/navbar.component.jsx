import React, { useState, useEffect, useRef } from 'react';
import './navbar.styles.scss';
import MenuContents from '../menu-contents/menu-contents.component';
import { TimelineLite, TweenLite } from 'gsap';
import { withRouter, Link } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';

import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Navbar() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	let menuBar = useRef(null);
	let logo = useRef(null);
	let socialIcons = useRef(null);
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
			TweenLite.to(socialIcons, 0.5, { opacity: 0 });
		} else {
			tl2.to(logo, 0.2, { opacity: 1 });
			tl.to(menuBar, 1, { css: { display: 'none', opacity: 0 } });
			TweenLite.to(socialIcons, 0.5, { opacity: 1 });
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
			<div className="navbar">
				<IconContext.Provider
					value={{
						color: 'white',
						className: 'social-icons',
						size: '24px',
					}}>
					<div className="icons-container" ref={(el) => (socialIcons = el)}>
						<a href="https://www.instagram.com/t15_media/" target="_blank">
							<FaInstagram />
						</a>
						<a
							href="https://www.youtube.com/channel/UCiSd79_k_E8nyE6PcUBmqSw"
							target="_blank">
							s
							<FaYoutube />
						</a>
						<a href="https://www.facebook.com/T15Media" target="_blank">
							<FaFacebook />
						</a>
					</div>
				</IconContext.Provider>
				<div className="burger-container" onClick={() => setSidebar(!sidebar)}>
					<Hamburger
						toggled={sidebar}
						toggle={setSidebar}
						color="#FFFFFF"
						duration={0.8}
					/>
				</div>
			</div>
		</div>
	);
}

export default withRouter(Navbar);
