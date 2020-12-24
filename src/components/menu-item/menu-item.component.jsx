import React, { useState } from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ key, title, videoName, onChange }) => {
	console.log(onChange);
	const handleMouseEnter = () => {
		console.log('MOUSE ENTER DETECTED');
		onChange(videoName);
	};
	return (
		<div className="menu-text" onMouseEnter={handleMouseEnter}>
			{title}
		</div>
	);
};

export default MenuItem;
