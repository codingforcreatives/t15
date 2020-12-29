import React, { useRef, useState, useEffect } from 'react';
import './panel-video.styles.scss';

const PanelVideo = ({ videoName }) => {
	let featureVideo = useRef(null);
	let featureVideoContainer = useRef(null);
	return (
		<div
			className="featureVideoComponentContainer"
			ref={(el) => (featureVideoContainer = el)}>
			<img
				className="video-mask"
				src={require(`../../assets/feature-overlay.png`)}></img>
			<video
				ref={(el) => (featureVideo = el)}
				autoPlay="autoPlay"
				muted
				loop="loop"
				className="feature-video">
				Your browser does not support the video tag. I suggest you upgrade your
				browser
				<source src={require(`../../assets/${videoName}`)} type="video/mp4" />
			</video>
		</div>
	);
};

export default PanelVideo;
