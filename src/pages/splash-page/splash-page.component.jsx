import React, { useRef, useEffect } from 'react';
import './splashscreen.styles.scss';
import SplashScreen from '../../components/splash-screen/splash-screen.component';
import { Helmet } from 'react-helmet';

import { TweenMax, Power3, Power4, TimelineLite } from 'gsap';

const SplashPage = () => {
	return (
		<>
			<Helmet>
				<title>T15 Media | Digital Marketing Specialists</title>
				<meta
					name="description"
					content="We curate your marketing strategy through creating powerful visual assets, and then apply them to a custom digital platform.  Have your story be heard in this modern, digital age."></meta>
				<meta name="robots" content="index,follow"></meta>
				<meta
					property="og:title"
					content="T15 Media | Your Go To Content Creators"
				/>
				<meta property="og:url" content="https://t15media.com" />
				<meta
					property="og:image"
					content="https://t15-website-assets.s3-ap-southeast-2.amazonaws.com/office.jpg"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:description"
					content="We curate your marketing strategy through creating powerful visual assets, and then apply them to a custom digital platform.  Have your story be heard in this modern, digital age."
				/>
				<meta property="og:locale" content="en_US" />
				<meta property="og:site_name" content="T15 Media" />
			</Helmet>
			<SplashScreen backgroundVideo="Website-Hero-Compressed-v2.mp4"></SplashScreen>
		</>
	);
};

export default SplashPage;
