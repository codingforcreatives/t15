import React, { useState, useRef, useEffect } from 'react';
import './menu-item.styles.scss';
import { useLocation, NavLink } from 'react-router-dom';

import { Power4, TimelineLite } from 'gsap';

const MenuItem = ({
	key,
	title,
	videoName,
	onChange,
	path,
	delay,
	defaultVideo,
	allMenuData,
	setMenuState,
}) => {
	let tlGlitch = new TimelineLite();
	let tlEntrance = new TimelineLite();
	let singleElement = useRef(null);
	const location = useLocation();

	const handleMouseEnter = () => {
		tlGlitch
			.to(singleElement, 0.1, {
				skewX: 70,
				ease: Power4.easeInOut,
			})
			.to(singleElement, 0.04, { skewX: 0, ease: Power4.easeInOut })
			.to(singleElement, 0.04, { opacity: 0 })
			.to(singleElement, 0.04, { opacity: 1 })
			.to(singleElement, 0.04, { x: -20 })
			.to(singleElement, 0.04, { x: 0 })
			.add(singleElement, 0)

			.to(singleElement, 0, { scale: 1.1 }, 'split')
			.to(singleElement, 0, { scale: 1 }, '+=0.02');
		onChange(videoName);
	};

	const indexOfCurrentPage = allMenuData.findIndex(
		(x) => x.path === location.pathname
	);

	console.log(indexOfCurrentPage);

	const handleMouseLeave = () => {
		if (indexOfCurrentPage != -1) {
			onChange(allMenuData[indexOfCurrentPage].videoName);
		} else {
			onChange(defaultVideo);
		}
	};

	const handleMouseClick = () => {
		setMenuState(false);
	};
	const myObj = {
		delay: delay,
	};

	return (
		<NavLink
			ref={(el) => (singleElement = el)}
			className="menu-text"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleMouseClick}
			activeStyle={{ textDecoration: 'line-through' }}
			to={path}>
			{title}
		</NavLink>
	);
};

export default MenuItem;
