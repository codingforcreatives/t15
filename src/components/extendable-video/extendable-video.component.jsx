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
				className="still-image"
				src={require(`../../assets/${overlayImageName}`)}></img>
		);
	});

	const isInitialMount = useRef(true);
	let videoBack = useRef(null);
	const logo = 'tepari.png';
	var marginTop = 0;
	var marginBottom = 0;
	let yExit = null;

	position === 'up' ? (marginTop = 50) : (marginTop = 0);
	position === 'up' ? (yExit = -200) : (yExit = 200);
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
				ref={(el) => (videoBack = el)}
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
			tl.from(extendableBox, 1.5, {
				x: myObj['X'],
				y: myObj['Y'],
				scale: 10,
				opacity: 0,
				delay: myObj['delay'],
				ease: Power4.easeOut,
			}).add(addMouseEvents);
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

const mapStateToProps = (state) => ({
	panelClicked: state.extendableVideo.panelClicked,
	indexClicked: state.extendableVideo.indexClicked,
});

const mapDispatchToProps = (dispatch) => ({
	setIndexClicked: (index) => dispatch(setIndexClicked(index)),
	setPanelClicked: (clicked) => dispatch(setPanelClicked(clicked)),
});

// export default withRouter(
// 	connect(mapStateToProps, mapDispatchToProps)(ExtendableVideo)
// );
export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)(ExtendableVideo);
