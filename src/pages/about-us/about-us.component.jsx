import React, { useRef, useEffect } from 'react';
import './about-us.styles.scss';
import PanelVideo from '../../components/panel-video/panel-video.component';

import { TweenMax, Power3, Power4, TimelineLite } from 'gsap';

const AboutUsPage = () => {
	//Gsap Animations
	let featureVideo = useRef(null);
	let homepageContainer = useRef(null);
	let wordHere = useRef(null);
	let wordWhat = useRef(null);
	let wordWe = useRef(null);
	let wordDo = useRef(null);
	let glitchContainers = useRef(null);
	let featureVideoContainer = useRef(null);

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
		});
		// .to(featureVideo, 0.2, { css: { opacity: '100%' } });

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
			.to(featureVideoContainer, 1, { display: 'flex', delay: -0.08 });
	});

	return (
		<div ref={(el) => (homepageContainer = el)} className="about-container">
			<div
				ref={(el) => (glitchContainers = el)}
				className="welcome-container glitch top">
				<h2 ref={(el) => (wordHere = el)} className="words" id="heres">
					A
				</h2>
				<h2 ref={(el) => (wordWhat = el)} className="words" id="what">
					bit
				</h2>
				<h2 ref={(el) => (wordWe = el)} className="words" id="we">
					about
				</h2>
				<h2 ref={(el) => (wordDo = el)} className="words" id="do">
					us
				</h2>
			</div>

			<div
				className="featureVideoContainer"
				ref={(el) => (featureVideoContainer = el)}>
				<PanelVideo videoName="Ontheball.mp4" />
				{/* <img
					className="video-mask"
					src={require(`../../assets/feature-overlay.png`)}></img>
				<video
					ref={(el) => (featureVideo = el)}
					autoPlay="autoPlay"
					muted
					loop="loop"
					className="feature-video">
					Your browser does not support the video tag. I suggest you upgrade
					your browser
					<source
						src={require('../../assets/Ontheball.mp4')}
						type="video/mp4"
					/>
				</video> */}
			</div>
		</div>
	);
};

export default AboutUsPage;
