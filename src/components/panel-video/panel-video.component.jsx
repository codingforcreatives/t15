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
					src={require(`../../assets/feature-overlay-rounded.png`)}
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
<<<<<<< HEAD
					className={styles.panelFeatureVideo}
=======
					className="feature-video"
>>>>>>> 909d6be19b55b15ef4259257d61c7f0ceb4a6485
					mask="url(#clipPath)">
					<source src={require(`../../assets/${videoName}`)} type="video/mp4" />
				</video>
			</div>
		</>
	);
};

export default PanelVideo;
