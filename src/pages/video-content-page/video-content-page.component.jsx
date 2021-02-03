import React, { useRef, useEffect, useState } from 'react';
import './portfolio-panels.styles.css';
import SkipButton from '../../components/skip-button/skip-button.component';
import { FILM_STATIC_BG_URL } from '../../components/globals';
import { Helmet } from 'react-helmet';
import { TweenLite, Power4, TimelineLite } from 'gsap';

import ExtendableVideoDown from '../../components/extendable-video-down/extendable-video-down.component';
import ExtendableVideoUp from '../../components/extendable-video-up/extendable-video-up.component';
const serviceCategories = {
	traveltourism: {
		key: '1',
		panelType: 'portfolio',
		title: 'Travel & Tourism',
		logoName: '',
		overlayImageName: 'portfolio-assets/travel_tourism.jpg',
		videoName: 'portfolio-assets/travel_tourism.mp4',
		position: 'up',
		linkURL: 'travel-tourism',
	},
	education: {
		key: '2',
		panelType: 'portfolio',
		title: 'Education',
		logoName: '',
		overlayImageName: 'portfolio-assets/education.jpg',
		videoName: 'portfolio-assets/education.mp4',
		position: 'down',
		linkURL: 'education',
	},
	narrative: {
		key: '3',
		panelType: 'portfolio',
		title: 'Narrative',
		logoName: '',
		overlayImageName: 'portfolio-assets/narrative.jpg',
		videoName: 'portfolio-assets/narrative.mp4',
		position: 'up',
		linkURL: 'narrative',
	},
	eventsfestivals: {
		key: '4',
		panelType: 'portfolio',
		title: 'Events & Festivals',
		logoName: '',
		overlayImageName: 'portfolio-assets/events.jpg',
		videoName: 'portfolio-assets/events.mp4',
		position: 'down',
		linkURL: 'events-festivals',
	},
	lifestylefashion: {
		key: '5',
		panelType: 'portfolio',
		title: 'Lifestyle & Fashion',
		logoName: '',
		overlayImageName: 'portfolio-assets/lifestyle.jpg',
		videoName: 'portfolio-assets/lifestyle_fashion.mp4',
		position: 'up',
		linkURL: 'lifestyle-fashion',
	},
	appssoftware: {
		key: '6',
		panelType: 'portfolio',
		title: 'Apps & Software',
		logoName: '',
		overlayImageName: 'portfolio-assets/apps.jpg',
		videoName: 'portfolio-assets/app_software.mp4',
		position: 'down',
		linkURL: 'apps-software',
	},
	product: {
		key: '7',
		panelType: 'portfolio',
		title: 'Product',
		logoName: '',
		overlayImageName: 'portfolio-assets/product.jpg',
		videoName: 'portfolio-assets/product.mp4',
		position: 'up',
		linkURL: 'product',
	},
	realestate: {
		key: '8',
		panelType: 'portfolio',
		title: 'Real Estate',
		logoName: '',
		overlayImageName: 'portfolio-assets/real_estate.jpg',
		videoName: 'portfolio-assets/real_estate.mp4',
		position: 'down',
		linkURL: 'real-estate',
	},
	sportsgitness: {
		key: '9',
		panelType: 'portfolio',
		title: 'Sports & Fitness',
		logoName: '',
		overlayImageName: 'portfolio-assets/sports.jpg',
		videoName: 'portfolio-assets/sports.mp4',
		position: 'up',
		linkURL: 'sports-fitness',
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
	const [welcomeComplete, setWelcomeComplete] = useState(false);
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
	let skipButton = useRef(null);

	let prevTimelineDelay = 4;

	const tl = new TimelineLite();
	const tl1 = new TimelineLite();
	const tl2 = new TimelineLite();
	const tl3 = new TimelineLite();
	const tl4 = new TimelineLite();
	var tlGlitch = new TimelineLite();
	let buttonVisibility = new TimelineLite();
	const isMobile = window.innerWidth < 480;
	let flexDirection = 'row';

	let handleSkip = () => {
		tl.seek(3.2);
		tl1.seek(3.2);
		tl2.seek(3.2);
		tl3.seek(3.2);
		tl4.seek(3.2);
		tlGlitch.seek(4);

		buttonVisibility
			.to(skipButton, 1, { opacity: 0, ease: Power4.easeInOut })
			.to(skipButton, 0.2, {
				display: 'none',
			});
	};

	const showPanels = () => {
		setWelcomeComplete(true);
	};

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
			flexDir: flexDirection,
		};

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
			.to(glitchContainers, 0.01, {
				css: {
					display: 'none',
					delay: -0.04,
				},
				onComplete: showPanels,
			})
			.to(skipButton, 0.2, {
				opacity: 0,
				ease: Power4.easeInOut,
			})
			.to(skipButton, 0.2, {
				display: 'none',
			});
	});

	useEffect(() => {
		if (welcomeComplete) {
			TweenLite.to(panelContainer, 0.01, { display: 'flex' });
		}
	}, [welcomeComplete]);

	return (
		<div
			ref={(el) => (homepageContainer = el)}
			className="portfolio-page-container">
			<Helmet>
				<title>T15 Media | Content Creation </title>
				<meta
					name="description"
					content="We are specialists in creating videos to market your business. From full in-house production, strategy and creative treatment, or just shooting or editing contact us to see how we can help deliver your video."></meta>
				<meta name="robots" content="index,follow"></meta>
				<meta
					property="og:title"
					content="T15 Media | Videos for your Socials"
				/>
				<meta property="og:url" content="https://t15media.com/video-content" />
				<meta
					property="og:image"
					content="https://t15-website-assets.s3-ap-southeast-2.amazonaws.com/office.jpg"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:description"
					content="We are specialists in creating videos to market your business. From full in-house production, strategy and creative treatment, or just shooting or editing contact us to see how we can help deliver your video."
				/>
				<meta property="og:locale" content="en_US" />
				<meta property="og:site_name" content="T15 Media" />
			</Helmet>
			<video
				ref={(el) => (backgroundVideo = el)}
				autoPlay="autoPlay"
				muted
				loop="loop"
				webkit-playsinline="true"
				playsinline="true"
				className="portfolio-video">
				Your browser does not support the video tag. I suggest you upgrade your
				browser
				<source src={FILM_STATIC_BG_URL} type="video/mp4" />
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

			{welcomeComplete ? (
				<div
					className="home-panel-container"
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
									minPanelWidth={panelMinWidth}
									maxPanelWidth={panelMaxWidth}
									linkURL={item.linkURL}
									expandDuration={2}
								/>
							);
						}
					})}
				</div>
			) : (
				<div />
			)}

			<div className="skipButtonContainer" ref={(el) => (skipButton = el)}>
				<SkipButton onClickMethod={handleSkip} />
			</div>
		</div>
	);
};

export default VideoContentPage;
