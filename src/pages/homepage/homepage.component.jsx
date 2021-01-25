import React, { useRef, useEffect } from 'react';
import './homepage.styles.css';
import { Power4, TimelineLite } from 'gsap';
import { FILM_STATIC_BG_URL } from '../../components/globals';
import ExtendableVideo from '../../components/extendable-video/extendable-video.component';
import { BrowserView } from 'react-device-detect';

const serviceCategories = {
	branding: {
		key: '1',
		panelType: 'home',
		title: 'branding',
		logoName: '',
		overlayImageName: 'home-assets/branding_cover.jpg',
		videoName: 'home-assets/branding_cover.mp4',
		position: 'up',
		linkURL: 'branding',
	},
	broadcastTV: {
		key: '2',
		panelType: 'home',
		title: 'broadcast TV',
		logoName: '',
		overlayImageName: 'home-assets/broadcast_tv.jpg',
		videoName: 'home-assets/broadcast_tv_cover.mp4',
		position: 'down',
		linkURL: 'broadcast-tv',
	},
	contentAdvertising: {
		key: '3',
		panelType: 'home',
		title: 'video content',
		logoName: '',
		overlayImageName: 'home-assets/content.jpg',
		videoName: 'home-assets/content_creation_cover.mp4',
		position: 'up',
		linkURL: 'video-content',
	},
	webDevelopment: {
		key: '4',
		panelType: 'home',
		title: 'web design',
		logoName: '',
		overlayImageName: 'home-assets/websites_cover.jpg',
		videoName: 'home-assets/websites_cover.mp4',
		position: 'down',
		linkURL: 'websites-and-apps',
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
console.log(arr[0]);

const HomePage = () => {
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
		// return increment_X * key + leftHand_X;
		return -60;
	};

	const calculateY = (key) => {
		// left hand side
		// if (key <= totalPanelsOnEachSide) {
		// 	return increment_Y * key * -1 + leftHand_Y;
		// } else {
		// 	return max_Y - increment_Y * (key - (totalPanelsOnEachSide + 1));
		// }

		return 40;
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

	useEffect(() => {
		tl.to(homepageContainer, 0.2, {
			css: { visibility: 'visible' },
		}).to(backgroundVideo, 1, { css: { opacity: 1 } });

		tl1
			.from(wordHere, 0.8, {
				x: -40,
				y: -60,
				scale: 2,
				opacity: 0,
				delay: 1,
				ease: Power4.easeOut,
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
			.to(panelContainer, 1, { display: 'flex', delay: -0.08 });
	});

	return (
		<div ref={(el) => (homepageContainer = el)} className="homepage-container">
			<BrowserView>
				<video
					ref={(el) => (backgroundVideo = el)}
					autoPlay="autoPlay"
					muted
					loop="loop"
					className="home-video">
					Your browser does not support the video tag. I suggest you upgrade
					your browser
					<source src={FILM_STATIC_BG_URL} type="video/mp4" />
				</video>
			</BrowserView>

			<div
				ref={(el) => (glitchContainers = el)}
				className="welcome-container glitch top">
				<h2 ref={(el) => (wordHere = el)} className="words" id="heres">
					Here's
				</h2>
				<h2 ref={(el) => (wordWhat = el)} className="words" id="what">
					What
				</h2>
				<h2 ref={(el) => (wordWe = el)} className="words" id="we">
					We
				</h2>
				<h2 ref={(el) => (wordDo = el)} className="words" id="do">
					Do
				</h2>
			</div>

			<div className="home-panel-container" ref={(el) => (panelContainer = el)}>
				{arr.map((item) => (
					<ExtendableVideo
						key={item.key}
						panelType={item.panelType}
						title={item.title}
						logoName={item.logoName}
						overlayImageName={item.overlayImageName}
						videoName={item.videoName}
						position={item.position}
						linkURL={item.linkURL}
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

export default HomePage;
