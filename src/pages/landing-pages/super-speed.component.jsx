import React, { useRef, useEffect, useState } from 'react';
import './landing-page.styles.css';
import PanelVideo from '../../components/panel-video/panel-video.component';
import { Helmet } from 'react-helmet';
import StaffExtendablePanel from '../../components/staff-extendable-panel/staff-extendable-panel.component';
import PortfolioDivider from '../../components/portfolio-divider/portfolio-divider.component';
import ButtonRegular from '../../components/button-regular/button-regular.component';
import SkipButton from '../../components/skip-button/skip-button.component';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import { Power4, TimelineLite, TweenLite } from 'gsap';
import TestimonialContent from '../../components/testimonial-contents/testimonial-content.component';

import { testimonialItems, profiles } from '../../components/home-globals';

const styles = require('./landing-page.styles.css');

const SuperSpeed = () => {
	// useEffect(() => {
	// 	const script = document.createElement('script');
	// 	script.src = 'https://shwellness.kartra.com/page/embed/uDOj2agBNsZa';
	// 	script.async = true;
	// 	// this.div.appendChild(script);
	// });
	return (
		<div className="landing-page-container">
			<iframe src="https://mailchi.mp/t15media/hero?fbclid=IwAR3uBBf-wkawAfzPkz_1LXpBASKIAGWKU5TnrVGeayILx3c2rconTpzAdHA"></iframe>
		</div>
	);
};

export default SuperSpeed;
