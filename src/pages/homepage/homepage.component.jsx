import React, { useRef, useEffect } from 'react';
import './homepage.styles.scss';
// import SplashScreen from '../../components/splash-screen/splash-screen.component';

import { TweenMax, Power3, Power2, TimelineLite } from 'gsap';

import ExtendableVideo from '../../components/extendable-video/extendable-video.component';
const serviceCategories = {
	branding: {
		key: '1',
		panelType: 'home',
		title: 'branding',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'up',
	},
	broadcastTV: {
		key: '2',
		panelType: 'home',
		title: 'broadcast TV',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'down',
	},
	contentAdvertising: {
		key: '3',
		panelType: 'home',
		title: 'video content',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'up',
	},
	webDevelopment: {
		key: '4',
		panelType: 'home',
		title: 'web design',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'down',
	},
	branding2: {
		key: '1',
		panelType: 'home',
		title: 'branding',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'up',
	},
	broadcastTV2: {
		key: '2',
		panelType: 'home',
		title: 'broadcast TV',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'down',
	},
	contentAdvertising2: {
		key: '3',
		panelType: 'home',
		title: 'video content',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'up',
	},
	webDevelopment2: {
		key: '4',
		panelType: 'home',
		title: 'web design',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'down',
	},
	contentAdvertising3: {
		key: '3',
		panelType: 'home',
		title: 'video content',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'up',
	},
	webDevelopment3: {
		key: '4',
		panelType: 'home',
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

const HomePage = () => {
	//comment this out later
	const { innerWidth: width, innerHeight: height } = window;
	var totalWindowWidth = window.innerWidth * 0.8;
	var numPanels = arr.length;

	var panelMinWidth = totalWindowWidth / (numPanels + 1);
	var panelMaxWidth = panelMinWidth * 2;

	//Gsap Animations
	let backgroundVideo = useRef(null);
	let homepageContainer = useRef(null);
	let wordHere = useRef(null);
	let wordWhat = useRef(null);
	let wordWe = useRef(null);
	let wordDo = useRef(null);
	let wordHere2 = useRef(null);
	let wordWhat2 = useRef(null);
	let wordWe2 = useRef(null);
	let wordDo2 = useRef(null);

	const tl = new TimelineLite();
	const tl1 = new TimelineLite();
	const tl2 = new TimelineLite();
	const tl3 = new TimelineLite();
	const tl4 = new TimelineLite();

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
	});

	return (
		<div ref={(el) => (homepageContainer = el)} className="homepage-container">
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
			<div className="welcome-container glitch bottom">
				<h2 ref={(el) => (wordHere = el)} class="words" id="heres">
					Here's
				</h2>
				<h2 ref={(el) => (wordWhat = el)} class="words" id="what">
					What
				</h2>
				<h2 ref={(el) => (wordWe = el)} class="words" id="we">
					We
				</h2>
				<h2 ref={(el) => (wordDo = el)} class="words" id="do">
					Do
				</h2>
			</div>

			<div className="welcome-container-2 glitch top">
				<h2 ref={(el) => (wordHere2 = el)} class="words" id="heres">
					Here's
				</h2>
				<h2 ref={(el) => (wordWhat2 = el)} class="words" id="what">
					What
				</h2>
				<h2 ref={(el) => (wordWe2 = el)} class="words" id="we">
					We
				</h2>
				<h2 ref={(el) => (wordDo2 = el)} class="words" id="do">
					Do
				</h2>
			</div>
		</div>
	);
};

export default HomePage;
