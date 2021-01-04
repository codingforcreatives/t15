import React, { useRef, useEffect } from 'react';
import './about-us.styles.scss';
import PanelVideo from '../../components/panel-video/panel-video.component';
import TestimonialSlider from '../../components/testimonial-slider/testimonial-slider.component';

import { TweenMax, Power3, Power4, TimelineLite, Linear } from 'gsap';
import { Tween } from 'gsap/gsap-core';

const AboutUsPage = () => {
	const testimonialItems = [
		{
			index: 1,
			name: 'James Kennerly',
			company: 'Air New Zealand',
			image: 'T15_No-Text.png',
			quote:
				'Robert was hired as a content creator for the Air New Zealand Airpoints Escape campaign in 2017. The campaign utilised social marketing channels Instagram and Facebook to promote regional travel and iconic global Airpoints Hotel Partner Hilton. He was easy to collaborate with, brought great ideas to the table and had a real talent for capturing amazing moments in both static shots and video.',
		},
		{
			index: 2,
			name: 'Joel Thompson, Director',
			company: 'OutBeyond',
			image: 'T15_No-Text.png',
			quote:
				'Eric adopts a holistic approach to creative content which enables businesses to showcase their authentic core messages and what they stand for. His ability to work to full briefs, but also challenge the traditional thinking of business owner direction allows for a real story to come through and be told in the most natural yet thought provoking way that modern day businesses need to thrive in the world of digital. His deliverables have helped our business accelerate our growth from a tiny business, to a large-scale operation. Through his profound understanding of our requirements, his energy, charisma and professionalism Eric has been instrumental in OutBeyonds Success. I have no hesitation in recommending Eric to businesses who are entrepreneurial, innovative and continually push the envelope.',
		},
		{
			index: 3,
			name: 'Urs Bauer',
			company: 'ATravelling Cinema Co.',
			image: 'T15_No-Text.png',
			quote:
				'Robert has a great eye for detail and knows how to get the perfect shot. His editing is well thought out and if you give him creative freedom, he’ll come up with the perfect composition. He listens carefully, is easy to work with and is happy to go the extra mile to achieve the best outcome possible.',
		},
		{
			index: 4,
			name: 'Ashley Andrew, Sales & Marketing Manager',
			company: 'Jucy',
			image: 'T15_No-Text.png',
			quote:
				'At JUCY, we’ve collaborated with Eric on multiple content creation projects and he always over delivers. I find Eric very easy to work with as he has great communication skills and can follow a brief or deliver on-brand content with creative freedom. I love that Eric can create video for multiple channels and always presents out of the box creative. Eric has a high attention for detail and is a pleasure to work with. I would recommend working with Eric on any video content needs.',
		},
		{
			index: 5,
			name: 'Tasha Meys, Founder',
			company: 'Ace The Gram',
			image: 'T15_No-Text.png',
			quote:
				'We were thrilled by the video that Rob put together for us. They interpreted our brief perfectly and produced a beautiful video which captured the vibe of our business. Rob and T15 Media were professional, creative, talented and a pleasure to work with.',
		},
		{
			index: 6,
			name: 'Kris Lal, Director',
			company: 'Curatorsocial',
			image: 'T15_No-Text.png',
			quote:
				'Curatorsocial has had the pleasure of working with Eric Lin on several projects thus far including content creation for esteemed clients such as Air NZ and the Chiefs Rugby team, his aim is always to deliver for his client, guided by their initiatives and narrative, he masterfully weaves a story through imagery and video that brings our campaigns to life. From travel to corporate, Eric has adapted to deliver to brief and on time. He is on the cusp of becoming one of the regions next big things in terms of content creation, we have worked with hundreds of influencers and creators at Curatorsocial, the mere fact we continue to return for his expertise and service should speak volumes for potential clients.',
		},
		{
			index: 7,
			name: 'Joe Olds, Global Marketing Manager',
			company: 'G Adventures',
			image: 'T15_No-Text.png',
			quote:
				'In conjunction with Thailand Tourism and Junkee Media in Australia, we at G Adventures recently sent Eric to Thailand to capture a variety of videos for usage over several channels. The quality of Eric’s work was outstanding and we have found him to be an exceptionally talented young filmmaker who we will definitely be working with again for video shoots around the world.',
		},
		{
			index: 8,
			name: 'Jimena Fernandez, Online Marketing Leader',
			company: 'Hilton Buenos Aires',
			image: 'T15_No-Text.png',
			quote:
				'Eric worked and stayed at Hilton Buenos Aires in October (2018). During his days with us he was extremely professional, attentive and always making sure the final results were of high quality. We would love to work with him again in the near future!',
		},
		{
			index: 9,
			name: 'Paul Maloney, Digital Marketing Manager',
			company: 'Polar Pro',
			image: 'T15_No-Text.png',
			quote:
				'Eric Lin is a creative and talented videographer with a keen eye for detail, a knack for storytelling and a compassion for others that makes him a true pleasure to work with. We have no hesitations in recommending Eric for your future video projects!',
		},
	];
	//Gsap Animations
	let parallaxOfficeImage = useRef(null);
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
				<PanelVideo videoURL="https://vimeo.com/326463076" />
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

			<TestimonialSlider testimonials={testimonialItems} />
		</div>
	);
};

export default AboutUsPage;
