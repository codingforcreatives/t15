import React from 'react';
import './splash-screen.styles.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const SplashScreen = () => {
	console.log('SPLASH');
	return (
		<div className="splash-screen">
			<video autoPlay="autoPlay" muted loop="loop" class="myVideo">
				Your browser does not support the video tag. I suggest you upgrade your
				browser
				<source
					src={require('../../assets/Website-Hero-Compressed-v2.mp4')}
					type="video/mp4"
				/>
			</video>
		</div>
	);
};

export default SplashScreen;
