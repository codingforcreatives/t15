import React, { useRef, useEffect } from 'react';
import './splashscreen.styles.scss';
import SplashScreen from '../../components/splash-screen/splash-screen.component';

import { TweenMax, Power3, Power4, TimelineLite } from 'gsap';

const SplashPage = () => {
	return (
		<SplashScreen backgroundVideo="Website-Hero-Compressed-v2.mp4"></SplashScreen>
	);
};

export default SplashPage;
