import React, { useState, useEffect, useRef } from 'react';
import './menu-contents.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { TimelineLite, TweenMax } from 'gsap';
import { useLocation } from 'react-router-dom';

const MenuContents = ({ id, title, imageUrl, size, setMenuState }) => {
	const menuData = [
		{
			title: 'About',
			path: '/about',
			videoName: 'T15-Film-Overlay.mp4',
			cName: 'nav-text',
			key: 1,
			delay: 0.5,
		},
		{
			title: 'All Services',
			path: '/services',
			videoName: 'Website-Hero-Compressed-v2.mp4',
			cName: 'nav-text',
			key: 2,
			delay: 1,
		},
		{
			title: 'Broadcast TV',
			path: '/broadcast-tv',
			videoName: 'T15-Film-Overlay.mp4',
			cName: 'nav-text',
			key: 3,
			delay: 1.5,
		},
		{
			title: 'Content Creation',
			path: '/video-content',
			videoName: 'home-assets/video-content.mp4',
			cName: 'nav-text',
			key: 4,
			delay: 2,
		},
		{
			title: 'Branding',
			path: '/branding',
			videoName: 'T15-Film-Overlay.mp4',
			cName: 'nav-text',
			key: 5,
			delay: 2.5,
		},
		{
			title: 'Websites',
			path: '/websites',
			videoName: 'home-assets/Build7.mp4',
			cName: 'nav-text',
			key: 6,
			delay: 3,
		},
		{
			title: 'Contact',
			path: '/contact',
			videoName: 'home-assets/Build7.mp4',
			cName: 'nav-text',
			key: 6,
			delay: 3,
		},
	];

	const location = useLocation();

	const indexOfCurrentPage = menuData.findIndex(
		(x) => x.path === location.pathname
	);

	const onMenuTextHover = () => {};
	const defaultVideo = 'Website-Hero-Compressed-v2.mp4';
	let menuBackgroundVideo = useRef(null);
	let singleElement = useRef(null);

	//plan : change this to a default video. then on currentRouteVideo prop, make sure its not empty and if it is, use default video

	// const [currentVideo, setVideo] = useState(
	// 	menuData[indexOfCurrentPage].videoName
	// );

	const [currentVideo, setVideo] = useState(defaultVideo);

	let tl = new TimelineLite();
	let tlEntrance = new TimelineLite();

	useEffect(() => {
		tl.to(menuBackgroundVideo, 0, {
			opacity: 0,
		})
			.set(menuBackgroundVideo, {
				attr: { src: require(`../../assets/${currentVideo}`) },
			})
			.to(menuBackgroundVideo, 2, {
				opacity: 0.4,
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
			<div className="menu-text-container" ref={(el) => (singleElement = el)}>
				{menuData.map((item) => (
					<MenuItem
						key={item.id}
						title={item.title}
						videoName={item.videoName}
						path={item.path}
						delay={item.delay}
						onChange={(value) => setVideo(value)}
						setMenuState={setMenuState}
						allMenuData={menuData}
						defaultVideo={defaultVideo}
					/>
				))}
				{/* <div className="test">{currentVideo} </div> */}
			</div>
		</div>
	);
};

export default MenuContents;
