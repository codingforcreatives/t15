import React, { useRef, useState, useEffect } from 'react';

import PanelVideo from './../../components/panel-video/panel-video.component';
import { Carousel } from 'react-responsive-carousel';
import "./carousel.min.css"; // requires a loader

import './nipoon-portfolio-page.styles.scss';

const NipoonPortfolioPage = () => {
	return (
		<>
			<div className="outter-container">
				<div className="inner-container">
					<img className="header-image" src="https://resources.stuff.co.nz/content/dam/images/4/y/n/6/k/m/image.related.StuffLandscapeSixteenByNine.1420x800.2164uw.png/1601268053846.jpg?format=pjpg&optimize=medium" />

					<div className="header-text-container">
						<div className="header-text-left-section">
							<div className="heading1">Travel & Adventure</div>
							<div className="space2"></div>
							<div>We are specialists in helping businesses deliver their stories in the most creative ways possible.From full-in-house production to strategy and creative treatment, you have come to the right place. We’ve got you.</div>
						</div>

						<div className="header-text-right-section">
							<div className="heading3">LATEST CLIENTS</div>
							<div className="space2"></div>
							<div>Air New Zealand</div>
							<div>Polar Pro</div>
							<div>Mui Campervans</div>
						</div>
					</div>


					<div className="item1-container">
						<div className="heading2">AIR NEW ZEALAND</div>
						<div className="space2"></div>
						<div>We are specialists in helping businesses deliver their stories in the most creative ways possible.From full-in-house production to strategy and creative treatment, you have come to the right place. We’ve got you.</div>
						<div className="space2"></div>

						<div
							className="featureVideoContainer">
							<PanelVideo videoURL="https://vimeo.com/326463076" />
						</div>

						<Carousel>
							<div>
								<img src="https://resources.stuff.co.nz/content/dam/images/4/y/n/6/k/m/image.related.StuffLandscapeSixteenByNine.1420x800.2164uw.png/1601268053846.jpg?format=pjpg&optimize=medium" />
							</div>
							<div>
								<img src="https://resources.stuff.co.nz/content/dam/images/4/y/n/6/k/m/image.related.StuffLandscapeSixteenByNine.1420x800.2164uw.png/1601268053846.jpg?format=pjpg&optimize=medium" />
							</div>
							<div>
								<img src="https://resources.stuff.co.nz/content/dam/images/4/y/n/6/k/m/image.related.StuffLandscapeSixteenByNine.1420x800.2164uw.png/1601268053846.jpg?format=pjpg&optimize=medium" />
							</div>
						</Carousel>
					</div>

					<div className="item2-container">
						<div className="heading2">POLAR PRO</div>
						<div className="space2"></div>
						<div>We are specialists in helping businesses deliver their stories in the most creative ways possible.From full-in-house production to strategy and creative treatment, you have come to the right place. We’ve got you.</div>
						<div className="space2"></div>

						<div
							className="featureVideoContainer">
							<PanelVideo videoURL="https://vimeo.com/326463076" />
						</div>
					</div>

					<div className="item3-container">
						<div className="heading2">MAUI CAMPERVANS</div>
						<div className="space2"></div>
						<div>We are specialists in helping businesses deliver their stories in the most creative ways possible.From full-in-house production to strategy and creative treatment, you have come to the right place. We’ve got you.</div>
						<div className="space2"></div>

						<div
							className="featureVideoContainer">
							<PanelVideo videoURL="https://vimeo.com/326463076" />
						</div>
					</div>

				</div>
			</div>
		</>

	);
}


export default NipoonPortfolioPage;

