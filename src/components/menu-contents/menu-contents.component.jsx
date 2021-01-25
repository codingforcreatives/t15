import React, { useState, useEffect, useRef } from 'react';
import './menu-contents.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { TimelineLite } from 'gsap';
import { useLocation } from 'react-router-dom';
import {
	S3_BASE_URL,
	DEFAULT_MENU_VIDEO,
	MENU_DATA,
} from '../../components/globals';

const MenuContents = ({ setMenuState }) => {
	const location = useLocation();

	let menuBackgroundVideo = useRef(null);
	let singleElement = useRef(null);
	let tl = new TimelineLite();
	const [currentVideo, setVideo] = useState(DEFAULT_MENU_VIDEO);

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
				<source src={S3_BASE_URL + currentVideo} type="video/mp4" />
			</video>
			<div className="menu-text-container" ref={(el) => (singleElement = el)}>
				{MENU_DATA.map((item) => (
					<MenuItem
						key={item.id}
						title={item.title}
						videoName={item.videoName}
						path={item.path}
						delay={item.delay}
						onChange={(value) => setVideo(value)}
						setMenuState={setMenuState}
						allMenuData={MENU_DATA}
						defaultVideo={DEFAULT_MENU_VIDEO}
					/>
				))}
				{/* <div className="test">{currentVideo} </div> */}
			</div>
		</div>
	);
};

export default MenuContents;
