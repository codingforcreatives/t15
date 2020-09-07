import React, { useRef, useEffect, useState } from 'react';
import './splash-screen.styles.scss';
import { gsap, TimelineMax, drawSVG } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const SplashScreen = () => {
	const countString = useRef('01');
	const [count, setCount] = useState('01');

	//hooking onto elements
	let rotator = useRef(null);
	let splashContainer = useRef(null);

	let countDown = () => {
		console.log('hello');
	};

	let tl = new TimelineMax({
		repeat: 3,
		onRepeat: countDown,
		repeatDelay: 0,
	});

	useEffect(() => {
		tl.to(rotator, {
			rotation: 360,
			svgOrigin: '600 450',
		});
		setInterval(() => {
			setCount('02');
			console.log(count);
		}, 2000);
		tl.duration(2).play();
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
					viewBox="0 0 1200 1200"
					width="1200"
					height="1200">
					<g id="film">
						<text
							id="counter"
							textAnchor="middle"
							x="600"
							y="535"
							fill="white"
							fontSize="300">
							{countString.current}
						</text>

						<g strokeWidth="2">
							<circle cx="600" cy="450" r="350" stroke="#444444" fill="none" />
						</g>

						<line
							ref={(el) => (rotator = el)}
							id="rotator"
							x1="600"
							y1="275"
							x2="600"
							y2="450"
							stroke="#444444"
							strokeWidth="2"
						/>
					</g>
				</svg>
			</div>
		</div>
	);
};

export default SplashScreen;
