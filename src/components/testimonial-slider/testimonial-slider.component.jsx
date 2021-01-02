import React, { useRef, useState, useEffect } from 'react';
import './testimonial-slider.styles.scss';
import ReactPlayer from 'react-player';
import { TweenLite, Power3 } from 'gsap';

const TestimonialSlider = ({ testimonials }) => {
	let introductionContainer = useRef(null);
	let imageList = useRef(null);
	let testimonialList = useRef(null);
	const imageWidth = 340;
	const { state, setState } = useState();

	//Animation Functions

	const slideLeft = (index, duration, multplied = 1) => {
		TweenLite.to(imageList.children[index], duration, {
			x: -imageWidth * multplied,
			ease: Power3.easeOut,
		});
	};

	const slideRight = (index, duration, multplied = 1) => {
		TweenLite.to(imageList.children[index], duration, {
			x: imageWidth * multplied,
			ease: Power3.easeOut,
		});
	};

	const scale = (index, duration) => {
		TweenLite.from(imageList.children[index], duration, {
			scale: 1.2,
			ease: Power3.easeOut,
		});
	};

	const fadeOut = (index, duration) => {
		TweenLite.from(testimonialList.children[index], duration, { opacity: 0 });
	};

	const fadeIn = (index, duration) => {
		TweenLite.from(testimonialList.children[index], duration, {
			opacity: 0,
			delay: 1,
		});
	};

	const nextSlide = () => {
		if (imageList.children[0].classList.contains('active')) {
			setState({ isActive0: false, isActive1: true });
			slideLeft(0, 1);
			slideLeft(1, 1);
			scale(1, 1);
			slideLeft(2, 1);
			slideLeft(2, 0, 0);
			fadeOut(0, 1);
			fadeIn(1, 1);
		} else if (imageList.children[1].classList.contains('active')) {
			setState({ isActive1: false, isActive2: true });
			slideRight(0, 1);
			slideLeft(1, 1, 2);
			slideLeft(2, 1, 2);
			scale(2, 1);
			//content transition
			fadeOut(1, 1);
			fadeIn(2, 1);
		} else if (imageList.children[2].classList.contains('active')) {
			setState({ isActive2: false, isActive3: true });
			slideRight(0, 1);
			slideLeft(2, 1, 2);
			slideLeft(3, 1, 2);
			scale(3, 1);
			//content transition
			fadeOut(2, 1);
			fadeIn(3, 1);
		} else if (imageList.children[3].classList.contains('active')) {
			setState({ isActive3: false, isActive4: true });
			slideRight(0, 1);
			slideLeft(3, 1, 2);
			slideLeft(4, 1, 2);
			scale(4, 1);
			//content transition
			fadeOut(3, 1);
			fadeIn(4, 1);
		} else if (imageList.children[4].classList.contains('active')) {
			setState({ isActive4: false, isActive5: true });
			slideRight(0, 1);
			slideLeft(4, 1, 2);
			slideLeft(5, 1, 2);
			scale(5, 1);
			//content transition
			fadeOut(4, 1);
			fadeIn(5, 1);
		} else if (imageList.children[5].classList.contains('active')) {
			setState({ isActive5: false, isActive6: true });
			slideRight(0, 1);
			slideLeft(5, 1, 2);
			slideLeft(6, 1, 2);
			scale(6, 1);
			//content transition
			fadeOut(5, 1);
			fadeIn(6, 1);
		} else if (imageList.children[6].classList.contains('active')) {
			setState({ isActive6: false, isActive7: true });
			slideRight(0, 1);
			slideLeft(5, 1, 2);
			slideLeft(7, 1, 2);
			scale(7, 1);
			//content transition
			fadeOut(6, 1);
			fadeIn(7, 1);
		} else if (imageList.children[7].classList.contains('active')) {
			setState({ isActive7: false, isActive8: true });
			slideRight(0, 1);
			slideLeft(7, 1, 2);
			slideLeft(8, 1, 2);
			scale(8, 1);
			//content transition
			fadeOut(7, 1);
			fadeIn(8, 1);
		} else if (imageList.children[8].classList.contains('active')) {
			setState({ isActive8: false, isActive1: true });
			slideRight(0, 1);
			slideLeft(8, 1, 2);
			slideLeft(1, 1, 2);
			scale(3, 1);
			//content transition
			fadeOut(2, 1);
			fadeIn(3, 1);
		}
	};

	return <div>HELLO</div>;
};

export default TestimonialSlider;
