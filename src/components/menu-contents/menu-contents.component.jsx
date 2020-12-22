import React from 'react';
import './menu-contents.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

const MenuContents = ({ id, title, imageUrl, size }) => {
	const menuData = [
		{
			title: 'About',
			path: '/',
			videoName: 'Website-Hero-Compressed-v2.mp4',
			cName: 'nav-text',
			key: 1,
		},
		{
			title: 'All Services',
			path: '/',
			videoName: 'Website-Hero-Compressed-v2.mp4',
			cName: 'nav-text',
			key: 2,
		},
		{
			title: 'Broadcast TV',
			path: '/',
			videoName: 'Website-Hero-Compressed-v2.mp4',
			cName: 'nav-text',
			key: 3,
		},
		{
			title: 'Content Creation',
			path: '/',
			videoName: 'Website-Hero-Compressed-v2.mp4',
			cName: 'nav-text',
			key: 4,
		},
		{
			title: 'Branding',
			path: '/',
			videoName: 'Website-Hero-Compressed-v2.mp4',
			cName: 'nav-text',
			key: 5,
		},
		{
			title: 'Websites',
			path: '/',
			videoName: 'Website-Hero-Compressed-v2.mp4',
			cName: 'nav-text',
			key: 6,
		},
	];

	// switchBackgroundVideo = (videoName) => {};

	const onMenuTextHover = () => {};

	return (
		<div className="menu-items-container">
			<video
				// ref={(el) => (backgroundVideo = el)}
				autoPlay="autoPlay"
				muted
				loop="loop"
				className="menu-background-video">
				Your browser does not support the video tag. I suggest you upgrade your
				browser
				<source
					src={require('../../assets/Website-Hero-Compressed-v2.mp4')}
					type="video/mp4"
				/>
			</video>
			<div className="menu-text-container">
				{menuData.map((item) => (
					<div className="menu-text"> {item.title} </div>
				))}
			</div>
		</div>
	);
};

export default MenuContents;
