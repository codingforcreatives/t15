import React, { useState, useEffect, useRef } from 'react';
import './menu-contents.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { TimelineLite, TweenMax } from 'gsap';

const MenuContents = ({ id, title, imageUrl, size }) => {
	const menuData = [
		{
			title: 'About',
			path: '/',
			videoName: 'T15-Film-Overlay.mp4',
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
			videoName: 'T15-Film-Overlay.mp4',
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
			videoName: 'T15-Film-Overlay.mp4',
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
	let menuBackgroundVideo = useRef(null);
	let menuBackgroundVideoTag = useRef(null);
	const [currentVideo, setVideo] = useState('Website-Hero-Compressed-v2.mp4');
	let tl = new TimelineLite();

	useEffect(() => {
		console.log(currentVideo);

		tl.to(menuBackgroundVideo, 0, {
			opacity: 0,
		})
			.set(menuBackgroundVideo, {
				attr: { src: require(`../../assets/${currentVideo}`) },
			})
			.to(menuBackgroundVideo, 2, {
				opacity: 1,
			});
		menuBackgroundVideo.src = require(`../../assets/${currentVideo}`);
	}, [currentVideo]);

	return (
		<div className="menu-items-container">
			<video
				ref={(el) => (menuBackgroundVideo = el)}
				autoPlay="autoPlay"
				muted
				loop="loop"
				className="menu-background-video">
				<source
					src={require(`../../assets/${currentVideo}`)}
					type="video/mp4"
				/>
			</video>
			<div className="menu-text-container">
				{menuData.map((item) => (
					<MenuItem
						key={item.id}
						title={item.title}
						videoName={item.videoName}
						onChange={(value) => setVideo(value)}
					/>
				))}
				<div className="test">{currentVideo} </div>
			</div>
		</div>
	);
};

export default MenuContents;
