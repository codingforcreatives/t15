import React, { useRef, useState, useEffect } from 'react';
import './extendable-video.styles.scss';
import { TimelineLite } from 'gsap';

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
	const [width, setWidth] = useState(minPanelWidth);
	const [expanded, setExpanded] = useState(false);
	const logo = 'tepari.png';
	var marginTop = 0;
	var marginBottom = 0;
	position === 'up' ? (marginTop = 50) : (marginTop = 0);
	position === 'down' ? (marginBottom = 50) : (marginBottom = 0);

	let extendableBox = useRef(null);
	let tl = new TimelineLite();
	var cssProps = new Object();
	let total = delay + 4;

	const myObj = {
		X: from_X,
		Y: from_Y,
		delay: total,
	};
	console.log(myObj);
	useEffect(() => {
		tl.from(extendableBox, 1, {
			x: myObj['X'],
			y: myObj['Y'],
			scale: 10,
			opacity: 0,
			delay: myObj['delay'],
		});
	});

	return (
		<div
			ref={(el) => (extendableBox = el)}
			id="extendable-box"
			style={{
				minWidth: width,
				marginTop: marginTop,
				marginBottom: marginBottom,
			}}
			onMouseEnter={() => {
				setWidth(maxPanelWidth);
				setExpanded(true);
			}}
			onMouseLeave={() => {
				setWidth(minPanelWidth);
				setExpanded(false);
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
