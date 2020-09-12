import React, { useRef, useEffect, useState } from 'react';
import './splash-screen.styles.scss';
import { gsap, TimelineMax, drawSVG, Linear } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const SplashScreen = () => {
	//states
	const [count, setCount] = useState(3);

	//Accessing elements
	let rotator = useRef(null);
	let splashContainer = useRef(null);
	let number = useRef(null);
	let slogan = useRef(null);

	let countDownTimer = () => {
		setInterval(() => {
			if (count != 0) {
				setCount(count - 1);
			} else {
				//do nothing
			}
			console.log(count);
		}, 1500);
	};

	let tl = new TimelineMax({
		repeat: 3,
	});
	let tl2 = new TimelineMax();

	useEffect(() => {
		tl.to(rotator, {
			rotation: 360,
			svgOrigin: '600 600',
		});
		if (count == 3) {
			tl2.from(splashContainer, { opacity: 0 });
			tl2.to(splashContainer, { opacity: 1 });
		}

		countDownTimer();
		tl.duration(1.5).play();
		tl2.duration(1).play();
	});

	return (
		<div className="splash-screen" ref={(el) => (splashContainer = el)}>
			<video autoPlay="autoPlay" muted loop="loop" className="myVideo">
				Your browser does not support the video tag. I suggest you upgrade your
				browser
				<source
					src={require('../../assets/Website-Hero-Compressed-v2.mp4')}
					type="video/mp4"
				/>
			</video>

			<div className="video-overlay">
				<svg
					id="movie"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 1200">
					<g id="film">
						<g strokeWidth="2">
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

						<text
							id="slogan"
							ref={(el) => (slogan = el)}
							textAnchor="middle"
							x="600"
							y="620"
							fill="white"
							fontSize="40">
							Level up your digital presence
						</text>
					</g>
				</svg>
			</div>
		</div>
	);
};

export default SplashScreen;
