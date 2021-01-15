import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
const styles = require('./panel-video.module.css');

const PanelVideo = ({ videoName }) => {
	// let url = videoURL;

	return (
		<>
			<div className={styles.panelVideo}>
				<img
					className={styles.panelOverlay}
					src={require(`../../assets/feature-overlay-6.png`)}
				/>
				{/* <ReactPlayer
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
					// className={styles.panelVideo}
				/> */}

				<video
					autoPlay="autoPlay"
					muted
					loop="loop"
					className="feature-video"
					mask="url(#clipPath)">
					<source src={require(`../../assets/${videoName}`)} type="video/mp4" />
				</video>
			</div>
		</>
	);
};

export default PanelVideo;
