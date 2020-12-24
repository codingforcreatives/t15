import React, { useRef, useState, useEffect } from 'react';
import './extendable-video.styles.scss';
import { TimelineLite, TweenMax } from 'gsap';

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
	expandDuration,
}) => {
	const [expanded, setExpanded] = useState(false);
	const [content, setContent] = useState(() => {
		return (
			<img
				className="still-image"
				src={require(`../../assets/${overlayImageName}`)}></img>
		);
	});

	const isInitialMount = useRef(true);
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

	const addMouseEvents = () => {
		extendableBox.addEventListener('mouseenter', handleExpand);
		extendableBox.addEventListener('mouseleave', handleShrink);
	};

	//expansion
	const handleExpand = () => {
		console.log('HANDLE EXPAND');
		setExpanded(true);
		setContent(
			<video
				autoPlay="autoPlay"
				muted
				loop="loop"
				className="extendable-video-background"
				mask="url(#clipPath)">
				<source src={require(`../../assets/${videoName}`)} type="video/mp4" />
			</video>
		);
	};

	//shrink
	const handleShrink = () => {
		console.log('HANDLE SHRINK');
		setExpanded(false);
		setContent(
			<img
				className="still-image"
				src={require(`../../assets/${overlayImageName}`)}></img>
		);
	};

	useEffect(() => {
		if (isInitialMount.current) {
			tl.from(extendableBox, 1, {
				x: myObj['X'],
				y: myObj['Y'],
				scale: 10,
				opacity: 0,
				delay: myObj['delay'],
			}).add(addMouseEvents);
			isInitialMount.current = false;
		} else {
			if (expanded === true) {
				TweenMax.to(extendableBox, expandDuration, {
					width: myObj['maxPanelWidth'],
				});
			} else {
				TweenMax.to(extendableBox, expandDuration, {
					width: myObj['minPanelWidth'],
				});
			}
		}
	}, [content, expanded]);

	return (
		<div
			ref={(el) => (extendableBox = el)}
			id="extendable-box"
			style={{
				width: minPanelWidth,
				marginTop: marginTop,
				marginBottom: marginBottom,
			}}>
			{content}

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
