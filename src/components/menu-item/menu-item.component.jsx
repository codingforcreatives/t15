import React, { useState, useRef } from 'react';
import './menu-item.styles.scss';

import { Power4, TimelineLite } from 'gsap';

const MenuItem = ({ key, title, videoName, onChange }) => {
	console.log(onChange);
	let tlGlitch = new TimelineLite();
	let singleElement = useRef(null);

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
	return (
		<div
			ref={(el) => (singleElement = el)}
			className="menu-text"
			onMouseEnter={handleMouseEnter}>
			{title}
		</div>
	);
};

export default MenuItem;
