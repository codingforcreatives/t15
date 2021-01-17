import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Power4, TimelineLite } from 'gsap';
const styles = require('./button-regular.module.css');

const ButtonRegular = ({ buttonText, route }) => {
	let tlGlitch = new TimelineLite();

	let button = useRef(null);

	const handleMouseEnter = () => {
		tlGlitch
			.to(button, 0.1, {
				skewX: 70,
				ease: Power4.easeInOut,
			})
			.to(button, 0.04, { skewX: 0, ease: Power4.easeInOut })
			.to(button, 0.04, { opacity: 0 })
			.to(button, 0.04, { opacity: 1 })
			.to(button, 0.04, { x: -20 })
			.to(button, 0.04, { x: 0 })
			.add(button, 0)

			.to(button, 0, { scale: 1.1 }, 'split')
			.to(button, 0, { scale: 1 }, '+=0.02');
	};

	return (
		<div className={styles.buttonContainer}>
			<Link
				ref={(el) => (button = el)}
				className={styles.linkText}
				to={route}
				onMouseEnter={handleMouseEnter}>
				{buttonText}
			</Link>
		</div>
	);
};

export default ButtonRegular;
