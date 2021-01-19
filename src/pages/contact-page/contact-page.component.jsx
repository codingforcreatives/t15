import React, { useRef, useEffect } from 'react';
import './contact-page.style.css';
// import SplashScreen from '../../components/splash-screen/splash-screen.component';
import { ReactTypeformEmbed } from 'react-typeform-embed';

import { TweenMax, Power3, Power4, TimelineLite } from 'gsap';

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
		key: '5',
		panelType: 'home',
		title: 'branding',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'up',
	},
	broadcastTV2: {
		key: '6',
		panelType: 'home',
		title: 'broadcast TV',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'down',
	},
	contentAdvertising2: {
		key: '7',
		panelType: 'home',
		title: 'video content',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'up',
	},
	webDevelopment2: {
		key: '8',
		panelType: 'home',
		title: 'web design',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'down',
	},
	contentAdvertising3: {
		key: '9',
		panelType: 'home',
		title: 'video content',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'up',
	},
	webDevelopment3: {
		key: '10',
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

const ContactPage = () => {
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
	let contactImage = useRef(null);
	let contactContent = useRef(null);
	let contactPageContainer = useRef(null);
	let typeformEmbed = useRef(null);
	let wordHere = useRef(null);
	let wordWhat = useRef(null);
	let wordWe = useRef(null);
	let wordDo = useRef(null);
	let glitchContainers = useRef(null);
	let contactContainer = useRef(null);

	let prevTimelineDelay = 4;

	const tl = new TimelineLite();
	const tl1 = new TimelineLite();
	const tl2 = new TimelineLite();
	const tl3 = new TimelineLite();
	const tl4 = new TimelineLite();
	var tlGlitch = new TimelineLite();

	useEffect(() => {
		tl.to(contactPageContainer, 0.2, {
			css: { visibility: 'visible' },
		});

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
			.to(contactContainer, 1, { display: 'flex', delay: -0.08 })
			.from(contactImage, 0.8, { opacity: 0, scale: 0.5 })
			.from(contactContent, 1, { opacity: 0 });
	});

	let openForm = () => {
		console.log('FORM OPENED');
		typeformEmbed.typeform.open();
	};

	return (
		<div
			ref={(el) => (contactPageContainer = el)}
			className="contact-page-outer-container">
			<div
				ref={(el) => (glitchContainers = el)}
				className="welcome-container glitch top">
				<h2 ref={(el) => (wordHere = el)} className="words" id="heres">
					say
				</h2>
				<h2 ref={(el) => (wordWhat = el)} className="words" id="what">
					hello
				</h2>
				<h2 ref={(el) => (wordWe = el)} className="words" id="we">
					.
				</h2>
				<h2 ref={(el) => (wordDo = el)} className="words" id="do">
					.
				</h2>
			</div>

			<div ref={(el) => (contactContainer = el)} className="contact-container">
				<ReactTypeformEmbed
					ref={(el) => (typeformEmbed = el)}
					style={{ display: 'none' }}
					buttonText="submit enquiry"
					hideFooter="true"
					popup="true"
					url="https://sajs4fb4o0o.typeform.com/to/ixliqpXk"
				/>

				<div className="contact-image-container">
					<img
						className="contact-image"
						ref={(el) => (contactImage = el)}
						src={require(`../../assets/office_vertical_panels.jpg`)}></img>
				</div>

				<div
					className="contact-content-container"
					ref={(el) => (contactContent = el)}>
					<h1>Contact us</h1>
					<p>
						If you’d like to find out more about how we can work with <br></br>{' '}
						you on a project, contact us today and let’s chat.
					</p>
					<h2>P | +61 474 066 679</h2>
					<h2>E | admin@t15media.com</h2>
					<h2>
						A | Unit 48/91 Moreland Street Footscray, VIC 3011, Australia{' '}
					</h2>

					<button
						className="btn"
						onClick={openForm}
						style={{ cursor: 'pointer' }}>
						Fill in contact form
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
