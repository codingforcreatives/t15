import React, { useRef, useState, useEffect } from 'react';
import './panel-video.styles.scss';
import { TimelineLite, TweenMax } from 'gsap';
import { withRouter } from 'react-router-dom';
import { Tween } from 'gsap/gsap-core';

const PanelVideo = ({ videoName }) => {
	return (
		<div
			className="featureVideoContainer"
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
				<source ssrc={require(`../../assets/${videoName}`)} type="video/mp4" />
			</video>
		</div>
	);
};

export default withRouter(PanelVideo);
