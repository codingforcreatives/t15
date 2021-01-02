import React, { useRef, useState, useEffect } from 'react';
import './portfolio-introduction-section.styles.scss';
import ReactPlayer from 'react-player';

const PortfolioIntroductionSection = ({
	title,
	introduction,
	client1,
	client2,
	client3,
}) => {
	let introductionContainer = useRef(null);

	return (
		<div
			className="portfolio-introduction-section-container"
			ref={(el) => (introductionContainer = el)}>
			<div className="description-container">
				<h1 className="portfolio-title">{title}</h1>
				<p className="portfolio-text">{introduction} </p>
			</div>
			<div className="shortcut-container">
				<h1 className="shortcut-title">Latest Clients</h1>
				<p className="portfolio-text">{client1} </p>
				<p className="portfolio-text">{client2} </p>
				<p className="portfolio-text">{client3} </p>
			</div>
		</div>
	);
};

export default PortfolioIntroductionSection;
