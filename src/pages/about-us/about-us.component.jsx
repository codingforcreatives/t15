import React, { useRef, useEffect, useState } from 'react';
import './about-us.styles.css';
import PanelVideo from '../../components/panel-video/panel-video.component';

import StaffExtendablePanel from '../../components/staff-extendable-panel/staff-extendable-panel.component';
import PortfolioDivider from '../../components/portfolio-divider/portfolio-divider.component';
import ButtonRegular from '../../components/button-regular/button-regular.component';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import { Power4, TimelineLite } from 'gsap';
import TestimonialContent from '../../components/testimonial-contents/testimonial-content.component';

import { testimonialItems, profiles } from '../../components/home-globals';

const styles = require('./about-us.styles.css');

const AboutUsPage = () => {
	const chevronLeft = (
		<img
			className="testimonial-chevrons"
			src={require(`../../assets/chevron-left.png`)}></img>
	);

	const chevronRight = (
		<img
			className="testimonial-chevrons"
			src={require(`../../assets/chevron-right.png`)}></img>
	);

	var arr = [];
	Object.keys(profiles).forEach(function (key) {
		arr.push(profiles[key]);
	});
	//Gsap Animations
	let parallaxOfficeImage = useRef(null);
	let homepageContainer = useRef(null);
	let wordHere = useRef(null);
	let wordWhat = useRef(null);
	let wordWe = useRef(null);
	let wordDo = useRef(null);
	let glitchContainers = useRef(null);
	let featureVideoContainer = useRef(null);
	let panelContainer = useRef(null);

	let prevTimelineDelay = 4;

	const tl = new TimelineLite();
	const tl1 = new TimelineLite();
	const tl2 = new TimelineLite();
	const tl3 = new TimelineLite();
	const tl4 = new TimelineLite();
	var tlGlitch = new TimelineLite();

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

	const calculateX = (key) => {
		//left hand side
		return increment_X * key + leftHand_X;
	};

	const calculateDelay = (key) => {
		return delay * key;
	};

	const calculateY = (key) => {
		// left hand side
		if (key <= totalPanelsOnEachSide) {
			return increment_Y * key * -1 + leftHand_Y;
		} else {
			return max_Y - increment_Y * (key - (totalPanelsOnEachSide + 1));
		}
	};

	let generatedImages = Array(20)
		.fill(1)
		.map(() => {
			const height = Math.floor(Math.random() * (600 - 300) + 300);
			const width = Math.floor(Math.random() * (700 - 200) + 200);
			return {
				src: `https://via.placeholder.com/${width}x${height}`,
				width: width * 10,
				height: height * 10,
			};
		});
	const [images] = useState(generatedImages);

	useEffect(() => {
		tl.to(homepageContainer, 0.2, {
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

			.to(glitchContainers, 0.01, { display: 'none', delay: -0.04 })
			.to(featureVideoContainer, 1, {
				display: 'flex',
				delay: -0.08,
				opacity: 1,
			});
	});

	return (
		<div ref={(el) => (homepageContainer = el)} className="about-container">
			<div
				ref={(el) => (glitchContainers = el)}
				className="welcome-container glitch top">
				<h2 ref={(el) => (wordHere = el)} className="words" id="heres">
					We
				</h2>
				<h2 ref={(el) => (wordWhat = el)} className="words" id="what">
					connect
				</h2>
				<h2 ref={(el) => (wordWe = el)} className="words" id="we">
					to your
				</h2>
				<h2 ref={(el) => (wordDo = el)} className="words" id="do">
					audience
				</h2>
			</div>
			<div
				className="featureVideoContainer"
				ref={(el) => (featureVideoContainer = el)}>
				<PanelVideo videoName="about.mp4" />
			</div>
			<div className="about-introduction-container">
				<h1 className="about-introduction-title">
					We Connect Business Owners With Their Audience
				</h1>
				<p className="about-introduction-text">
					T15 Media is a digital agency that specializes in helping brands
					transition digitally online. Ultimately, we curate your marketing
					strategy through creating powerful visual assets, and then apply them
					to a custom digital platform. We help brands have their story heard in
					the modern digital age.
					<br /> Originating through our roots as Tripper Society, New Zealand
					based outdoor social platform, we continue to hold an adventurous
					mindset as we delve into the realm of visual branding and online
					solutions; working with both small and large brands alike.
				</p>
			</div>
			<div className="office-image" ref={(el) => (parallaxOfficeImage = el)}>
				<h2>Our Clients</h2>
			</div>
			<div className="testimonial-container">
				<Slider
					autoplay="5000"
					previousButton={chevronLeft}
					nextButton={chevronRight}>
					{testimonialItems.map((testimonial, index) => (
						<div key={index}>
							<TestimonialContent
								testimonial={testimonial}></TestimonialContent>
						</div>
					))}
				</Slider>
			</div>
			<div
				className="staff-panel-container"
				ref={(el) => (panelContainer = el)}>
				{arr.map((item) => (
					<StaffExtendablePanel
						key={item.index}
						panelType="staff"
						title={item.title}
						overlayImageName={item.overlayImageName}
						hoverImage={item.hoverImage}
						name={item.name}
						bio={item.bio}
						position={item.position}
						from_X={calculateX(item.key)}
						from_Y={calculateY(item.key)}
						delay={calculateDelay(item.key)}
						prevTimlineDelay={prevTimelineDelay}
						minPanelWidth={panelMinWidth}
						maxPanelWidth={panelMaxWidth}
						expandDuration={2}
					/>
				))}
			</div>
			<div className="client-logos-container">
				<div className="logo-row">
					<div className="row-break">
						<img
							className="logo-image"
							src={require(`../../assets/client-logos/MIM.png`)}></img>
						<img
							className="logo-image"
							src={require(`../../assets/client-logos/Daikin.png`)}></img>
					</div>
					<div className="row-break">
						<img
							className="logo-image"
							src={require(`../../assets/client-logos/DestinationGoldCoast.png`)}></img>
						<img
							className="logo-image"
							src={require(`../../assets/client-logos/Hilton.png`)}></img>
					</div>
				</div>
				<div className="logo-row">
					<div className="row-break">
						<img
							className="logo-image"
							src={require(`../../assets/client-logos/Mazda.png`)}></img>
						<img
							className="logo-image"
							src={require(`../../assets/client-logos/AirNZ.png`)}></img>
					</div>
					<div className="row-break">
						<img
							className="logo-image"
							src={require(`../../assets/client-logos/jucy.png`)}></img>
						<img
							className="logo-image"
							src={require(`../../assets/client-logos/polarpro.png`)}></img>
					</div>
				</div>
				<PortfolioDivider />
				<ButtonRegular buttonText="get in touch" route="/contact" />
			</div>
		</div>
	);
};

export default AboutUsPage;
