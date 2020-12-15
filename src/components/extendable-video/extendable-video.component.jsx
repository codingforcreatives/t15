import React, { useRef, useState, useEffect } from 'react';
import './extendable-video.styles.scss';
import { TimelineLite, TweenMax } from 'gsap';
import { Timeline } from 'gsap/gsap-core';

const ExtendableVideo = ({
	key,
	panelType,
	logoName,
	title,
	overlayImageName,
	videoName,
	position,
	minPanelWidth,
	maxPanelWidth,
	from_X,
	from_Y,
	delay,
	prevTimelineDelay,
}) => {
	const [expanded, setExpanded] = useState(false);

	const logo = 'tepari.png';
	var marginTop = 0;
	var marginBottom = 0;

	position === 'up' ? (marginTop = 50) : (marginTop = 0);
	position === 'down' ? (marginBottom = 50) : (marginBottom = 0);

	//entrance animations
	let extendableBox = useRef(null);
	let tl = new TimelineLite();
	let total = delay + 4;

	const myObj = {
		X: from_X,
		Y: from_Y,
		delay: total,
		maxPanelWidth: maxPanelWidth,
		minPanelWidth: minPanelWidth,
	};

	useEffect(() => {
		tl.from(extendableBox, 1, {
			x: myObj['X'],
			y: myObj['Y'],
			scale: 10,
			opacity: 0,
			delay: myObj['delay'],
		}).add(addMouseEvents);
	});

	//expansion

	const addMouseEvents = () => {
		extendableBox.addEventListener('mouseenter', handleExpand);
		extendableBox.addEventListener('mouseleave', handleShrink);
	};

	const handleExpand = () => {
		TweenMax.to(extendableBox, 0.5, { minWidth: 260 });
	};

	//shrink
	const handleShrink = () => {
		TweenMax.to(extendableBox, 0.5, { minWidth: 130 });
	};

	return (
		<div
			ref={(el) => (extendableBox = el)}
			id="extendable-box"
			style={{
				minWidth: 130,
				marginTop: marginTop,
				marginBottom: marginBottom,
			}}>
			{
				//Transitioning from image to video
				expanded == true ? (
					<video
						autoPlay="autoPlay"
						muted
						loop="loop"
						className="extendable-video-background"
						mask="url(#clipPath)">
						<source
							src={require(`../../assets/${videoName}`)}
							type="video/mp4"
						/>
					</video>
				) : (
					<img
						className="still-image"
						src={require(`../../assets/${overlayImageName}`)}></img>
				)
			}

			{
				//show title or logo depending on page
				panelType === 'home' ? (
					<h2 className="panel-title">{title}</h2>
				) : (
					<img
						className="logoImage"
						src={require(`../../assets/${logoName}`)}></img>
				)
			}
		</div>
	);
};

export default ExtendableVideo;
