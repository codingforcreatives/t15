import React, { useRef, useEffect } from 'react';
import './broadcast-tv.module.css';
// import SplashScreen from '../../components/splash-screen/splash-screen.component';
import { TweenMax, Power3, Power4, TimelineLite } from 'gsap';
import { BrowserView } from 'react-device-detect';
import { FILM_STATIC_BG_URL } from '../../components/globals';
import ExtendableVideoDown from '../../components/extendable-video-down/extendable-video-down.component';
import ExtendableVideoUp from '../../components/extendable-video-up/extendable-video-up.component';

const serviceCategories = {
	destinationla: {
		key: '1',
		panelType: 'portfolio',
		title: 'Destination LA',
		logoName: '',
		overlayImageName: 'broadcast-tv-assets/destination_la.jpg',
		videoName: 'broadcast-tv-assets/destination_la.mp4',
		position: 'up',
		linkURL: 'destination-la',
	},
	staycation: {
		key: '2',
		panelType: 'portfolio',
		title: 'Staycation',
		logoName: '',
		overlayImageName: 'broadcast-tv-assets/staycation.jpg',
		videoName: 'broadcast-tv-assets/staycation.mp4',
		position: 'down',
		linkURL: 'staycation',
	},
	wonderfulplaces: {
		key: '3',
		panelType: 'portfolio',
		title: 'Wonderful Places',
		logoName: '',
		overlayImageName: 'broadcast-tv-assets/wonderful_places.jpg',
		videoName: 'broadcast-tv-assets/wonderful_places.mp4',
		position: 'up',
		linkURL: 'wonderful-places',
	},
};

// Formula for finding the minWidth and maxWidth of each panel
// w = Total window width
// m = Max width of a panel = 2p
// n = Total number of panels
// p = Min width of panel
// p = w / (n + 1)
// m = 2p

var arr = [];
Object.keys(serviceCategories).forEach(function (key) {
	arr.push(serviceCategories[key]);
});

const BroadcastTVPage = () => {
	//comment this out later
	const { innerWidth: width, innerHeight: height } = window;
	var totalWindowWidth = window.innerWidth * 0.8;
	var numPanels = arr.length;

	var panelMinWidth = totalWindowWidth / (numPanels + 1);

	var panelMaxWidth = panelMinWidth * 2;

	//Panel Animation Coordinates
	let totalPanelsOnEachSide = arr.length / 2;
	let leftHand_Y = -60;
	let leftHand_X = -40;
	let rightHand_Y = 60;
	let rightHand_X = 40;
	let delay = 0.5;
	let increment_Y = rightHand_Y / totalPanelsOnEachSide;
	let increment_X = rightHand_X / totalPanelsOnEachSide;
	let max_Y = rightHand_Y + (totalPanelsOnEachSide - 1) * increment_Y;

	const calculateX = (key) => {
		//left hand side

		return increment_X * key + leftHand_X;
	};

	const calculateY = (key) => {
		// left hand side
		if (key <= totalPanelsOnEachSide) {
			return increment_Y * key * -1 + leftHand_Y;
		} else {
			return max_Y - increment_Y * (key - (totalPanelsOnEachSide + 1));
		}
	};

	const calculateDelay = (key) => {
		return delay * key;
	};

	//Gsap Animations
	let backgroundVideo = useRef(null);
	let homepageContainer = useRef(null);
	let wordHere = useRef(null);
	let wordWhat = useRef(null);
	let wordWe = useRef(null);
	let wordDo = useRef(null);
	let glitchContainers = useRef(null);
	let panelContainer = useRef(null);

	let prevTimelineDelay = 4;

	const tl = new TimelineLite();
	const tl1 = new TimelineLite();
	const tl2 = new TimelineLite();
	const tl3 = new TimelineLite();
	const tl4 = new TimelineLite();
	var tlGlitch = new TimelineLite();
	const isMobile = window.innerWidth < 480;

	useEffect(() => {
		tl.to(homepageContainer, 0.2, {
			css: { visibility: 'visible' },
		}).to(backgroundVideo, 0.2, { css: { opacity: '100%' } });

		tl1
			.from(wordHere, 0.8, {
				x: -40,
				y: -60,
				scale: 2,
				opacity: 0,
				delay: 1,
			})
			.to(wordHere, 0.8, { opacity: 0.2, delay: 0.2 });
		tl2
			.from(wordWhat, 0.6, { opacity: 0, delay: 2 })
			.to(wordWhat, 0.4, { opacity: 0.2, delay: 0.2 });

		//4.4s

		tl3
			.from(wordWe, 0.45, { opacity: 0, delay: 2.6 })
			.to(wordWe, 0.4, { opacity: 0.2, delay: 0.2 });

		tl4.from(wordDo, 0.45, { opacity: 0, delay: 3.2 });

		tlGlitch
			.to(glitchContainers, 0.5, { visibility: 'visible' })
			.to('.words', 0.1, {
				skewX: 70,
				ease: Power4.easeInOut,
				delay: 4,
			})
			.to('.words', 0.04, { skewX: 0, ease: Power4.easeInOut })
			.to('.words', 0.04, { opacity: 0 })
			.to('.words', 0.04, { opacity: 1 })
			.to('.words', 0.04, { x: -20 })
			.to('.words', 0.04, { x: 0 })
			.add('split', 0)

			.to('#txt', 0, { scale: 1.1 }, 'split')
			.to('#txt', 0, { scale: 1 }, '+=0.02')

			.to(glitchContainers, 0.01, { display: 'none', delay: -0.04 })
			.to(panelContainer, 1, {
				display: 'flex',
				delay: -0.08,
			});
	});

	return (
		<div
			ref={(el) => (homepageContainer = el)}
			className="portfolio-page-container">
			<video
				ref={(el) => (backgroundVideo = el)}
				autoPlay="autoPlay"
				muted
				loop="loop"
				className="portfolio-video">
				Your browser does not support the video tag. I suggest you upgrade your
				browser
				<source src={FILM_STATIC_BG_URL} type="video/mp4" />
			</video>

			<div
				ref={(el) => (glitchContainers = el)}
				className="welcome-container glitch top">
				<h2 ref={(el) => (wordHere = el)} className="words" id="heres">
					We
				</h2>
				<h2 ref={(el) => (wordWhat = el)} className="words" id="what">
					make
				</h2>
				<h2 ref={(el) => (wordWe = el)} className="words" id="we">
					tv
				</h2>
				<h2 ref={(el) => (wordDo = el)} className="words" id="do">
					shows
				</h2>
			</div>

			<div
				className="portfolio-panel-container"
				ref={(el) => (panelContainer = el)}>
				{arr.map((item) => {
					if (item.position === 'up') {
						return (
							<ExtendableVideoUp
								key={item.key}
								panelType={item.panelType}
								title={item.title}
								logoName={item.logoName}
								overlayImageName={item.overlayImageName}
								videoName={item.videoName}
								position={item.position}
								from_X={-60}
								from_Y={40}
								delay={calculateDelay(item.key)}
								prevTimlineDelay={prevTimelineDelay}
								minPanelWidth={panelMinWidth}
								maxPanelWidth={panelMaxWidth}
								linkURL={item.linkURL}
								expandDuration={2}
							/>
						);
					} else {
						return (
							<ExtendableVideoDown
								key={item.key}
								panelType={item.panelType}
								title={item.title}
								logoName={item.logoName}
								overlayImageName={item.overlayImageName}
								videoName={item.videoName}
								position={item.position}
								from_X={-60}
								from_Y={40}
								delay={calculateDelay(item.key)}
								prevTimlineDelay={prevTimelineDelay}
								minPanelWidth={panelMinWidth}
								maxPanelWidth={panelMaxWidth}
								linkURL={item.linkURL}
								expandDuration={2}
							/>
						);
					}
				})}
			</div>
		</div>
	);
};

export default BroadcastTVPage;
