import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
const styles = require('./panel-video.module.css');

const PanelVideo = ({ videoURL }) => {
	let url = videoURL;

	return (
		<>
			<div
				className={styles.panelVideo}
			>
				<img className={styles.panelOverlay} src={require(`../../assets/feature-overlay.png`)} />
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
				// className={styles.panelVideo}
				/>
			</div>
		</>
	);
};

export default PanelVideo;
