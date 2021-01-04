import React, { useRef, useState, useEffect } from 'react';
import './testimonial-slider.styles.scss';
import ReactPlayer from 'react-player';
import { TweenLite, Power3 } from 'gsap';
import { TimelineLite } from 'gsap/gsap-core';

const TestimonialSlider = ({ testimonials }) => {
	let imageList = useRef(null);
	let testimonialList = useRef(null);
	let testimonialContent = useRef(null);

	const imageWidth = 340;
	let [currentTestimonial, setTestimonial] = useState({
		name: testimonials[0].name,
		company: testimonials[0].company,
		image: testimonials[0].image,
		quote: testimonials[0].quote,
		index: testimonials[0].index,
	});

	let newState = {
		name: testimonials[0].name,
		company: testimonials[0].company,
		image: testimonials[0].image,
		quote: testimonials[0].quote,
		index: testimonials[0].index,
	};

	//Animation Functions
	let newIndex = 0;

	const showNewState = () => {
		setTestimonial({
			name: testimonials[newIndex].name,
			company: testimonials[newIndex].company,
			image: testimonials[newIndex].image,
			quote: testimonials[newIndex].quote,
			index: testimonials[newIndex].index,
		});
	};

	const clickRight = () => {
		if (currentTestimonial.index < testimonials.length) {
			newIndex = currentTestimonial.index++;
		} else {
			newIndex = 0;
		}

		TweenLite.to(testimonialContent, 1, {
			opacity: 0,
			ease: Power3.easeOut,
			onComplete: () => showNewState(),
		});
	};

	useEffect(() => {
		TweenLite.to(testimonialContent, 1, {
			opacity: 0.5,
			ease: Power3.easeIn,
		});
	}, [currentTestimonial]);

	const clickLeft = () => {
		if (currentTestimonial.index > 1) {
			newIndex = currentTestimonial.index--;
		} else {
			newIndex = testimonials[testimonials.length].index;
		}

		TweenLite.to(testimonialContent, 1, {
			opacity: 0,
			ease: Power3.easeOut,
			onComplete: () => showNewState(),
		});
	};

	return (
		<div className="testimonialContainer">
			<div className="chevron-container" onClick={clickLeft}>
				<img
					className="chevron-left"
					src={require(`../../assets/chevron-left.png`)}></img>
			</div>
			<img
				className="testimonialLogo"
				src={require(`../../assets/${currentTestimonial.image}`)}></img>
			<div
				className="testimonial-content-container"
				ref={(el) => (testimonialContent = el)}>
				<p className="testimonial-quote">{currentTestimonial.quote}</p>
				<h3 className="testimonial-name"> {currentTestimonial.name}</h3>
				<h3 className="testimonial-company"> {currentTestimonial.company}</h3>
			</div>
			<div className="chevron-container" onClick={clickRight}>
				<img
					className="chevron-right"
					src={require(`../../assets/chevron-right.png`)}></img>
			</div>
		</div>
	);
};

export default TestimonialSlider;
