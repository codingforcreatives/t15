import React from 'react';
import { S3_BASE_URL, PANEL_VIDEO_OVERLAY } from '../../components/globals';
import logo from '../../assets/standby.gif';
import tvstatic from '../../assets/tv-static.gif';
const styles = require('./panel-video.module.css');

const PanelVideo = ({ videoName }) => {
	return (
		<>
			<div className={styles.panelVideo}>
				<img className={styles.panelOverlay} src={PANEL_VIDEO_OVERLAY} />
				<img className={styles.standBy} src={logo} alt="loading..." />

				<video
					poster={tvstatic}
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
