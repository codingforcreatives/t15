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

const styles = require('./about-us.styles.css');

const AboutUsPage = () => {
	const testimonialItems = [
		{
			index: 1,
			name: 'James Kennerly',
			company: 'Air New Zealand',
			image: 'testimonial-logos/airnz.png',
			quote:
				'Robert was hired as a content creator for the Air New Zealand Airpoints Escape campaign in 2017. The campaign utilised social marketing channels Instagram and Facebook to promote regional travel and iconic global Airpoints Hotel Partner Hilton. He was easy to collaborate with, brought great ideas to the table and had a real talent for capturing amazing moments in both static shots and video.',
		},

		{
			index: 2,
			name: 'Urs Bauer',
			company: 'Travelling Cinema Co.',
			image: 'testimonial-logos/travelling-cinema.png',
			quote:
				'Robert has a great eye for detail and knows how to get the perfect shot. His editing is well thought out and if you give him creative freedom, he’ll come up with the perfect composition. He listens carefully, is easy to work with and is happy to go the extra mile to achieve the best outcome possible.',
		},
		{
			index: 3,
			name: 'Ashley Andrew, Sales & Marketing Manager',
			company: 'Jucy',
			image: 'testimonial-logos/jucy.png',
			quote:
				'At JUCY, we’ve collaborated with Eric on multiple content creation projects and he always over delivers. I find Eric very easy to work with as he has great communication skills and can follow a brief or deliver on-brand content with creative freedom. I love that Eric can create video for multiple channels and always presents out of the box creative. Eric has a high attention for detail and is a pleasure to work with. I would recommend working with Eric on any video content needs.',
		},

		{
			index: 4,
			name: 'Joe Olds, Global Marketing Manager',
			company: 'G Adventures',
			image: 'testimonial-logos/gadventures.png',
			quote:
				'In conjunction with Thailand Tourism and Junkee Media in Australia, we at G Adventures recently sent Eric to Thailand to capture a variety of videos for usage over several channels. The quality of Eric’s work was outstanding and we have found him to be an exceptionally talented young filmmaker who we will definitely be working with again for video shoots around the world.',
		},
		{
			index: 5,
			name: 'Jimena Fernandez, Online Marketing Leader',
			company: 'Hilton Buenos Aires',
			image: 'testimonial-logos/hilton.png',
			quote:
				'Eric worked and stayed at Hilton Buenos Aires in October (2018). During his days with us he was extremely professional, attentive and always making sure the final results were of high quality. We would love to work with him again in the near future!',
		},
		{
			index: 6,
			name: 'Paul Maloney, Digital Marketing Manager',
			company: 'Polar Pro',
			image: 'testimonial-logos/polarpro.png',
			quote:
				'Eric Lin is a creative and talented videographer with a keen eye for detail, a knack for storytelling and a compassion for others that makes him a true pleasure to work with. We have no hesitations in recommending Eric for your future video projects!',
		},
		{
			index: 7,
			name: 'Joel Thompson, Director',
			company: 'OutBeyond',
			image: 'testimonial-logos/outbeyond.png',
			quote:
				'Eric adopts a holistic approach to creative content which enables businesses to showcase their authentic core messages and what they stand for. His ability to work to full briefs, but also challenge the traditional thinking of business owner direction allows for a real story to come through and be told in the most natural yet thought provoking way that modern day businesses need to thrive in the world of digital. ',
		},
		{
			index: 8,
			name: 'Tasha Meys, Founder',
			company: 'Ace The Gram',
			image: 'testimonial-logos/acethegram.png',
			quote:
				'We were thrilled by the video that Rob put together for us. They interpreted our brief perfectly and produced a beautiful video which captured the vibe of our business. Rob and T15 Media were professional, creative, talented and a pleasure to work with.',
		},
		{
			index: 9,
			name: 'Kris Lal, Director',
			company: 'Curatorsocial',
			image: 'testimonial-logos/curator.png',
			quote:
				'Curatorsocial has had the pleasure of working with Eric Lin on several projects thus far including content creation for esteemed clients such as Air NZ and the Chiefs Rugby team, his aim is always to deliver for his client, guided by their initiatives and narrative, he masterfully weaves a story through imagery and video that brings our campaigns to life. From travel to corporate, Eric has adapted to deliver to brief and on time. He is on the cusp of becoming one of the regions next big things in terms of content creation, we have worked with hundreds of influencers and creators at Curatorsocial, the mere fact we continue to return for his expertise and service should speak volumes for potential clients.',
		},
	];

	const profiles = {
		Eric: {
			key: '1',
			panelType: 'portfolio',
			title: 'Managing Director',
			name: 'Eric Lin',
			bio:
				'Eric is our managing director with extensive experience in captivating an audience with adventurous, story-driven visuals. He’ll often bounce from one reality to another but don’t fret, that’s just how he translates his dope imagination onto paper.',
			overlayImageName: 'staff/b-eric.jpg',
			hoverImage: 'staff/a-eric.jpg',
			position: 'up',
		},
		Rob: {
			key: '2',
			panelType: 'portfolio',
			title: 'Creative Director',
			name: 'Robert Nairn',
			bio:
				'Rob is an experienced director of photography, specializing in a broad range of video, graphics and photography content. He has a background of landscape architecture which is why our office looks like the plant section at Bunnings.',
			overlayImageName: 'staff/b-rob.jpg',
			hoverImage: 'staff/a-rob.jpg',
			videoName: 'Website-Hero-Compressed-v2.mp4',
			position: 'down',
		},
		Kyndel: {
			key: '3',
			panelType: 'portfolio',
			title: 'Senior Content Creator',
			name: 'Kyndel Rafols',
			bio:
				'Kyndel will creatively shoot and edit any project thrown to her with an incredible eye for detail, as long as you buy her a happy meal first.',
			overlayImageName: 'staff/b-kyndel.jpg',
			hoverImage: 'staff/a-kyndel.jpg',
			videoName: 'Website-Hero-Compressed-v2.mp4',
			position: 'up',
		},
		Alexis: {
			key: '4',
			panelType: 'portfolio',
			title: 'Producer',
			name: 'Alexis Ohyama',
			bio:
				'You would usually find Alexis assembling videos, drawing up logistics, drafting budgets and assisting clients- all after 2 bottles of Soju on a Monday at 9 am. Jokes aside, she can cut down long interviews in a jiffy; exactly like fruit ninja but on Premiere Pro.',
			overlayImageName: 'staff/b-alexis.jpg',
			hoverImage: 'staff/a-alexis.jpg',

			position: 'down',
		},
		Alan: {
			key: '5',
			panelType: 'portfolio',
			title: 'Video Editor',
			name: 'Alan Haljeta',
			bio:
				'Film school graduate turned editing freak, Alan will create magic with any footage you dump on him. Just make sure he has good B-Roll though, or you’ll be in for a bad day at the office.',
			overlayImageName: 'staff/b-alan.jpg',
			hoverImage: 'staff/a-alan.jpg',

			position: 'up',
		},
		Anastasiya: {
			key: '6',
			panelType: 'portfolio',
			title: 'Marketing Specialist',
			name: 'Anastasiya Safonova',
			bio:
				'After working extensively in the marketing field in The Netherlands, Nastya now steers the content we make in front of the right audience, with strategic precision. Don’t mess around with this one, she hella good.',
			overlayImageName: 'staff/b-ana.jpg',
			hoverImage: 'staff/a-ana.jpg',
			videoName: 'Website-Hero-Compressed-v2.mp4',
			position: 'down',
		},
		Ebad: {
			key: '7',
			panelType: 'portfolio',
			title: 'video editor',
			name: 'Ebaad Syed',
			bio:
				'Ebaad is our enthusiastic young intern whose been editing videos since he was 8 years old. The little guy is a low key prodigy.',
			overlayImageName: 'staff/b-ebad.jpg',
			hoverImage: 'staff/a-ebad.jpg',
			position: 'up',
		},
	};

	const logos = [
		{
			src: require('../../assets/T15_No-Text.png'),
			width: 150,
			height: 150,
		},
		{
			src: require('../../assets/T15_No-Text.png'),
			width: 150,
			height: 150,
		},
		{
			src: require('../../assets/T15_No-Text.png'),
			width: 150,
			height: 150,
		},
		{
			src: require('../../assets/T15_No-Text.png'),
			width: 150,
			height: 150,
		},
		{
			src: require('../../assets/T15_No-Text.png'),
			width: 150,
			height: 150,
		},
		{
			src: require('../../assets/T15_No-Text.png'),
			width: 150,
			height: 150,
		},
		{
			src: require('../../assets/T15_No-Text.png'),
			width: 150,
			height: 150,
		},
		{
			src: require('../../assets/T15_No-Text.png'),
			width: 150,
			height: 150,
		},
		{
			src: require('../../assets/T15_No-Text.png'),
			width: 150,
			height: 150,
		},
	];

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
