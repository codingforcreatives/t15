import React, { useRef, useEffect, useState } from 'react';
import './splash-screen.styles.scss';
import { TimelineMax, TimelineLite, Power4, Power2 } from 'gsap';
import { withRouter } from 'react-router-dom';
import { SPLASH_VIDEO_URL } from '../../components/globals';

const SplashScreen = ({ backgroundVideo, history }) => {
	//states
	const [count, setCount] = useState(3);

	//Accessing elements
	let rotator = useRef(null);
	let circle = useRef(null);
	let splashContainer = useRef(null);
	let svgCounter = useRef(null);
	let number = useRef(null);
	let splashVideo = useRef(null);

	let wordHere = useRef(null);
	let wordUp = useRef(null);
	let wordWhat = useRef(null);
	let wordWe = useRef(null);
	let wordDo = useRef(null);
	let glitchContainers = useRef(null);

	let countDownTimer = () => {
		setInterval(() => {
			if (count != 0) {
				setCount(count - 1);
			} else {
				//do nothing
			}
		}, 1500);
	};

	let tlrotation = new TimelineMax({
		repeat: 3,
	});
	let tlcontainer = new TimelineMax();

	const tl = new TimelineLite();
	const tl1 = new TimelineLite();
	const tl2 = new TimelineLite();
	const tl3 = new TimelineLite();
	const tl4 = new TimelineLite();
	var tlGlitch = new TimelineLite();

	useEffect(() => {
		tlrotation.to(rotator, {
			rotation: 360,
			svgOrigin: '600 600',
		});
		if (count == 3) {
			tlcontainer.from(splashContainer, { opacity: 0 });
			tlcontainer.to(splashContainer, { opacity: 1 });
		}

		countDownTimer();
		tlrotation.duration(1.5).play();
		tlcontainer.duration(1).play();
	});

	useEffect(() => {
		tl.to(svgCounter, 0.8, {
			scale: 1,
			opacity: 1,
			delay: 0,
		}).to(glitchContainers, 0.8, { display: 'flex', delay: -0.8 });

		tl1.from(wordHere, 0.8, {
			scale: 2,
			opacity: 0,
			delay: 0,
			ease: Power4.easeOut,
		});

		tl2.from(wordWhat, 0.8, { opacity: 0, delay: 1.5 });
		tl3.from(wordWe, 0.8, { opacity: 0, delay: 3 });
		tl4.from(wordDo, 0.8, { opacity: 0, delay: 4.5 });

		tlGlitch
			.to(glitchContainers, 0.5, { visibility: 'visible' })
			.to('.words', 0.1, {
				skewX: 70,
				ease: Power4.easeInOut,
				delay: 5.5,
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
			.to(rotator, 0.1, { opacity: 0, delay: 0.5 })
			.to(svgCounter, 1.5, {
				scale: 200,
				opacity: 0,
				delay: 0,
				ease: Power2.easeIn,
			})
			.to(splashVideo, 1, {
				css: { opacity: 0 },
				onComplete: goToHomePage,
			});
	}, []);

	const goToHomePage = () => {
		history.push('services');
	};

	return (
		<div className="splash-screen" ref={(el) => (splashContainer = el)}>
			<video
				autoPlay="autoPlay"
				muted
				loop="loop"
				className="splashVideo"
				ref={(el) => (splashVideo = el)}>
				Your browser does not support the video tag. I suggest you upgrade your
				browser
				<source src={SPLASH_VIDEO_URL} type="video/mp4" />
			</video>

			<div className="video-overlay">
				<svg
					id="movie"
					ref={(el) => (svgCounter = el)}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 1200">
					<g id="film">
						<g strokeWidth="2" ref={(el) => (circle = el)} className="circle">
							<circle cx="600" cy="600" r="320" stroke="#444444" fill="none" />
						</g>

						<line
							ref={(el) => (rotator = el)}
							id="rotator"
							x1="600"
							y1="280"
							x2="600"
							y2="600"
							stroke="#444444"
							strokeWidth="2"
						/>

						<text
							id="counter"
							textAnchor="middle"
							ref={(el) => (number = el)}
							x="600"
							y="720"
							fill="white"
							fontSize="340">
							{'0'}
							{count}
						</text>
					</g>
				</svg>
				<div
					ref={(el) => (glitchContainers = el)}
					className="welcome-container glitch top splash-welcome splash-display"
					id="slogan">
					<h2 ref={(el) => (wordHere = el)} className="words" id="heres">
						Level up
					</h2>

					<h2 ref={(el) => (wordWhat = el)} className="words" id="what">
						your
					</h2>
					<h2 ref={(el) => (wordWe = el)} className="words" id="we">
						digital
					</h2>
					<h2 ref={(el) => (wordDo = el)} className="words" id="do">
						presence
					</h2>
				</div>
			</div>
		</div>
	);
};

export default withRouter(SplashScreen);
