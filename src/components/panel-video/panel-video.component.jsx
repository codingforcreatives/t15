import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { S3_BASE_URL } from '../../components/globals';
const styles = require('./panel-video.module.css');

const PanelVideo = ({ videoName }) => {
	// let url = videoURL;

	return (
		<>
			<div className={styles.panelVideo}>
				<img
					className={styles.panelOverlay}
					src="https://t15-website-assets.s3-ap-southeast-2.amazonaws.com/feature-overlay-rounded.png"
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

				{/* <video
					autoPlay="autoPlay"
					muted
					loop="loop"
					className={styles.panelFeatureVideo}
					mask="url(#clipPath)">
					<source src={require(`../../assets/${videoName}`)} type="video/mp4" />
				</video> */}

				<video
					autoPlay="autoPlay"
					muted
					loop="loop"
					className={styles.panelFeatureVideo}
					mask="url(#clipPath)">
					<source src={S3_BASE_URL + videoName} type="video/mp4" />
				</video>
			</div>
		</>
	);
};

export default PanelVideo;
