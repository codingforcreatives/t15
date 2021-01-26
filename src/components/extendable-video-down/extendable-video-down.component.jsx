import React, { useRef, useState, useEffect } from 'react';
import { TimelineLite, TweenMax, Power3, Power4, Power2 } from 'gsap';
import { S3_BASE_URL } from '../../components/globals';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
	setIndexClicked,
	setPanelClicked,
} from '../../redux/extendable-video/extendable-video.actions';

const styles = require('./extendable-video-down.module.css');

const ExtendableVideoDown = ({
	panelType,
	title,
	overlayImageName,
	videoName,
	position,
	minPanelWidth,
	maxPanelWidth,
	from_X,
	from_Y,
	delay,
	expandDuration,
	linkURL,
	history,
	panelClicked,
	indexClicked,
	setPanelClicked,
	key,
}) => {
	const [expanded, setExpanded] = useState(false);

	const isMobile = window.innerWidth < 500;
	let panelWidth = null;

	const isInitialMount = useRef(true);
	let panelTitle = useRef(null);
	let videoBack = useRef(null);
	let coverImage = useRef(null);
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
	}

	position === 'up' ? (yExit = -200) : (yExit = 200);

	isMobile ? (panelWidth = '88vw') : (panelWidth = minPanelWidth);

	//entrance animations
	let extendableBox = useRef(null);
	let tl = new TimelineLite();
	let expandTransition = new TimelineLite();
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
		setExpanded(true);
	};

	//shrink
	const handleShrink = () => {
		setExpanded(false);
	};

	//panel clicked

	const handlePanelClick = () => {
		setPanelClicked(title);
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
				tl.from(extendableBox, 1.5, {
					x: -60,
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
				TweenMax.to(coverImage, 1, {
					css: {
						opacity: 0,
						ease: Power2.easeIn,
					},
				});

				videoBack.currentTime = 0;
				videoBack.play();
			} else {
				TweenMax.to(coverImage, 1, {
					css: {
						opacity: 1,
						ease: Power2.easeIn,
					},
				});
				TweenMax.to(extendableBox, expandDuration, {
					width: '154px',
					ease: Power3.easeOut,
				});
			}
		}
	}, [expanded]);

	useEffect(() => {
		if (panelClicked != false) {
			if (panelClicked != title) {
				TweenMax.to(extendableBox, 0.4, {
					y: yExit,
					opacity: 0,
					delay: 1.5,
					ease: Power2.easeIn,
				});
			} else {
				let tl = new TimelineLite();
				tl.to(extendableBox, 0.5, {
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

		setPanelClicked(false);
	}, [indexClicked, panelClicked]);

	return (
		<div
			ref={(el) => (extendableBox = el)}
			className={styles.extendableBox}
			onClick={handlePanelClick}>
			<img
				className={styles.stillImageBack}
				src={require(`../../assets/${overlayImageName}`)}></img>

			{expanded ? (
				<video
					ref={(el) => (videoBack = el)}
					muted
					loop="loop"
					className={styles.extendableVideoBackground}>
					<source src={S3_BASE_URL + videoName} type="video/mp4" />
				</video>
			) : (
				<div />
			)}

			<img
				ref={(el) => (coverImage = el)}
				className={styles.stillImage}
				src={require(`../../assets/${overlayImageName}`)}></img>

			<h2 className={styles.panelTitle} ref={(el) => (panelTitle = el)}>
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
)(ExtendableVideoDown);
