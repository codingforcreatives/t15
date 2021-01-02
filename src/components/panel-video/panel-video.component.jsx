import React, { useRef, useState, useEffect } from 'react';
import './panel-video.styles.scss';
import ReactPlayer from 'react-player';

const PanelVideo = ({ videoURL }) => {
	let featureVideo = useRef(null);
	let featureVideoContainer = useRef(null);
	let url = videoURL;
	console.log('VIDEO URL');
	console.log(url);
	return (
		<div
			className="featureVideoComponentContainer"
			ref={(el) => (featureVideoContainer = el)}>
			<img
				className="video-mask"
				src={require(`../../assets/feature-overlay.png`)}></img>
			{/* <video
				ref={(el) => (featureVideo = el)}
				autoPlay="autoPlay"
				muted
				loop="loop"
				className="feature-video">
				Your browser does not support the video tag. I suggest you upgrade your
				browser
				<source src={require(`../../assets/${videoName}`)} type="video/mp4" />
			</video> */}

			<ReactPlayer
				config={{
					vimeo: {
						playerOptions: {
							autoplay: true,
							controls: false,
							loop: true,
							muted: true,
						},
					},
				}}
				url={url}
				width="100%"
				height="100%"
				className="feature-video"
				ref={(el) => (featureVideo = el)}></ReactPlayer>
		</div>
	);
};

export default PanelVideo;
