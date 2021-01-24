import React, { useRef, useState, useEffect } from 'react';
import './extendable-video.styles.scss';
import { TimelineLite, TweenMax, Power3, Power4, Power2 } from 'gsap';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
	setIndexClicked,
	setPanelClicked,
} from '../../redux/extendable-video/extendable-video.actions';

const ExtendableVideo = ({
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
	linkURL,
	history,
	match,
	panelClicked,
	indexClicked,
	setPanelClicked,
	setIndexClicked,
	key,
}) => {
	const [expanded, setExpanded] = useState(false);
	const [content, setContent] = useState(() => {
		return (
			<img
				ref={(el) => (coverImage = el)}
				className="still-image"
				src={require(`../../assets/${overlayImageName}`)}></img>
		);
	});

	const isMobile = window.innerWidth < 480;
	let panelWidth = null;

	const isInitialMount = useRef(true);
	let panelTitle = useRef(null);
	let videoBack = useRef(null);
	let coverImage = useRef(null);
	const logo = 'tepari.png';
	var marginTop = 0;
	var marginBottom = 0;
	let yExit = null;
	let panelHeight = '60vh';

	if (!isMobile || panelType === 'home') {
		position === 'up' ? (marginTop = 50) : (marginTop = 0);
		position === 'down' ? (marginBottom = 50) : (marginBottom = 0);
	} else {
		marginTop = 10;
		marginBottom = 10;
		panelHeight = '150px';
	}

	position === 'up' ? (yExit = -200) : (yExit = 200);

	isMobile ? (panelWidth = '88vw') : (panelWidth = minPanelWidth);

	//entrance animations
	let extendableBox = useRef(null);
	let tl = new TimelineLite();
	let total = delay + 4;

	const myObj = {
		X: from_X,
		Y: from_Y,
		delay: total,
		maxPanelWidth: maxPanelWidth,
		minPanelWidth: panelWidth,
		panelHeight: panelHeight,
	};

	const addMouseEvents = () => {
		if (extendableBox) {
			extendableBox.addEventListener('mouseenter', handleExpand);
			extendableBox.addEventListener('mouseleave', handleShrink);
		}
	};

	//expansion

	const handleExpand = () => {
		console.log('HANDLE EXPAND');
		setExpanded(true);
		if (isMobile) {
			setContent(
				<img
					ref={(el) => (coverImage = el)}
					className="still-image"
					src={require(`../../assets/${overlayImageName}`)}></img>
			);
		} else {
			TweenMax.to(coverImage, 2, {
				css: {
					opacity: 0,

					ease: Power2.easeIn,
				},
			});
			setContent(
				<video
					ref={(el) => (videoBack = el)}
					autoPlay="autoPlay"
					muted
					loop="loop"
					className="extendable-video-background"
					mask="url(#clipPath)">
					<source src={require(`../../assets/${videoName}`)} type="video/mp4" />
				</video>
			);
		}
	};

	//shrink
	const handleShrink = () => {
		console.log('HANDLE SHRINK');
		setExpanded(false);
		setContent(
			<img
				ref={(el) => (coverImage = el)}
				className="still-image"
				src={require(`../../assets/${overlayImageName}`)}></img>
		);
	};

	//panel clicked

	const handlePanelClick = () => {
		setPanelClicked(true);
		setIndexClicked(title);
	};

	const goToNextPage = () => {
		history.push(linkURL);
	};

	useEffect(() => {
		if (isInitialMount.current) {
			if (!isMobile) {
				tl.from(extendableBox, 1.5, {
					x: myObj['X'],
					y: myObj['Y'],
					scale: 10,
					opacity: 0,
					delay: myObj['delay'],
					ease: Power4.easeOut,
				}).add(addMouseEvents);
			} else {
				console.log('not is Mobile ANIMATIOns');
				if (panelType != 'home') {
					panelTitle.style.transform = 'none';
					panelTitle.style.textAlign = 'left';
					panelTitle.style.width = '80%';
					panelTitle.style.left = 20;

					panelTitle.style.bottom = '20px';
					coverImage.style.width = '100%';
					coverImage.style.height = 'auto';
				}

				tl.from(extendableBox, 1.5, {
					x: myObj['X'],
					y: myObj['Y'],
					scale: 10,
					opacity: 0,
					delay: myObj['delay'],
					ease: Power4.easeOut,
				});
			}

			isInitialMount.current = false;
		} else {
			if (expanded === true) {
				TweenMax.to(extendableBox, expandDuration, {
					width: myObj['maxPanelWidth'],
					ease: Power3.easeInOut,
				});
			} else {
				TweenMax.to(extendableBox, expandDuration, {
					width: myObj['minPanelWidth'],
					ease: Power3.easeOut,
				});
			}
		}
	}, [content, expanded]);

	useEffect(() => {
		if (panelClicked == true) {
			if (panelClicked == true) {
				if (indexClicked != title) {
					TweenMax.to(extendableBox, 0.4, {
						y: yExit,
						opacity: 0,
						delay: 1.5,
						ease: Power2.easeIn,
					});
				} else {
					let tl = new TimelineLite();
					tl.to(extendableBox, 1, {
						width: myObj['minPanelWidth'],
						ease: Power4.easeOut,
					}).to(extendableBox, 2, {
						css: {
							scale: 200,
							opacity: 0,
							delay: 4,
							ease: Power2.easeIn,
						},
						onComplete: goToNextPage,
					});
				}
			}
		}

		setPanelClicked(false);
	}, [indexClicked, panelClicked]);

	return (
		<div
			ref={(el) => (extendableBox = el)}
			id="extendable-box"
			onClick={handlePanelClick}
			style={{
				width: myObj.minPanelWidth,
				marginTop: marginTop,
				marginBottom: marginBottom,
				height: myObj.panelHeight,
			}}>
			{content}

			<h2 className="panel-title" ref={(el) => (panelTitle = el)}>
				{title}
			</h2>
		</div>
	);
};

const mapStateToProps = (state) => ({
	panelClicked: state.extendableVideo.panelClicked,
	indexClicked: state.extendableVideo.indexClicked,
});

const mapDispatchToProps = (dispatch) => ({
	setIndexClicked: (index) => dispatch(setIndexClicked(index)),
	setPanelClicked: (clicked) => dispatch(setPanelClicked(clicked)),
});

export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)(ExtendableVideo);
