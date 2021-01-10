import React, { useRef, useEffect } from 'react';
import './portfolio-panels.styles.css';
// import SplashScreen from '../../components/splash-screen/splash-screen.component';

import { TweenMax, Power3, Power4, TimelineLite } from 'gsap';

import ExtendableVideo from '../../components/extendable-video/extendable-video.component';
const serviceCategories = {
	branding: {
		key: '1',
		panelType: 'portfolio',
		title: 'branding',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'up',
	},
	broadcastTV: {
		key: '2',
		panelType: 'portfolio',
		title: 'travel & tourism',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'down',
	},
	contentAdvertising: {
		key: '3',
		panelType: 'portfolio',
		title: 'video content',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'up',
	},
	webDevelopment: {
		key: '4',
		panelType: 'portfolio',
		title: 'web design',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'down',
	},
	branding2: {
		key: '5',
		panelType: 'portfolio',
		title: 'branding',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'up',
	},
	broadcastTV2: {
		key: '6',
		panelType: 'portfolio',
		title: 'broadcast TV',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'down',
	},
	contentAdvertising2: {
		key: '7',
		panelType: 'portfolio',
		title: 'video content',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'up',
	},
	webDevelopment2: {
		key: '8',
		panelType: 'portfolio',
		title: 'web design',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'down',
	},
	contentAdvertising3: {
		key: '9',
		panelType: 'portfolio',
		title: 'video content',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'up',
	},
	webDevelopment3: {
		key: '10',
		panelType: 'portfolio',
		title: 'web design',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'down',
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

const VideoContentPage = () => {
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
	let flexDirection = 'row';

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
		isMobile ? (flexDirection = 'column') : (flexDirection = 'row');

		const myObj = {
			flexDirection: flexDirection,
		};

		tlGlitch
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
				flexDirection: myObj.flexDirection,
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
				className="myVideo">
				Your browser does not support the video tag. I suggest you upgrade your
				browser
				<source
					src={require('../../assets/T15-Film-Overlay.mp4')}
					type="video/mp4"
				/>
			</video>

			<div
				ref={(el) => (glitchContainers = el)}
				className="welcome-container glitch top">
				<h2 ref={(el) => (wordHere = el)} className="words" id="heres">
					videos
				</h2>
				<h2 ref={(el) => (wordWhat = el)} className="words" id="what">
					for
				</h2>
				<h2 ref={(el) => (wordWe = el)} className="words" id="we">
					your
				</h2>
				<h2 ref={(el) => (wordDo = el)} className="words" id="do">
					socials
				</h2>
			</div>

			<div
				className="portfolio-panel-container"
				ref={(el) => (panelContainer = el)}>
				{arr.map((item) => (
					<ExtendableVideo
						key={item.key}
						panelType={item.panelType}
						title={item.title}
						logoName={item.logoName}
						overlayImageName={item.overlayImageName}
						videoName={item.videoName}
						position={item.position}
						from_X={calculateX(item.key)}
						from_Y={calculateY(item.key)}
						delay={calculateDelay(item.key)}
						prevTimlineDelay={prevTimelineDelay}
						minPanelWidth={panelMinWidth}
						maxPanelWidth={panelMaxWidth}
						expandDuration={2}
					/>
				))}
			</div>
		</div>
	);
};

export default VideoContentPage;
