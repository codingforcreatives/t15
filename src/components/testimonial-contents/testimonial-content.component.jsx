import React, { useRef, useState, useEffect } from 'react';
import './testimonial-content.styles.css';

const TestimonialContent = ({ testimonial }) => {
	console.log('test');
	console.log(testimonial);

	return (
		<div className="testimonialContainer">
			<img
				className="testimonialLogo"
				src={require(`../../assets/${testimonial.image}`)}></img>
			<div className="testimonial-content-container">
				<p className="testimonial-quote">{testimonial.quote}</p>
				<h3 className="testimonial-name"> {testimonial.name}</h3>
				<h3 className="testimonial-company"> {testimonial.company}</h3>
			</div>
		</div>
	);
};

export default TestimonialContent;
