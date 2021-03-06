import React from 'react';
import { S3_BASE_URL, PANEL_VIDEO_OVERLAY } from '../../components/globals';
import logo from '../../assets/standby.gif';
const styles = require('./panel-video.module.css');

const PanelVideo = ({ videoName }) => {
	return (
		<>
			<div className={styles.panelVideo}>
				<img className={styles.panelOverlay} src={PANEL_VIDEO_OVERLAY} />
				<img className={styles.standBy} src={logo} alt="loading..." />

				<video
					poster={logo}
					autoPlay
					muted
					loop
					className={styles.panelFeatureVideo}
					webkit-playsinline="true"
					playsinline="true">
					<source src={S3_BASE_URL + videoName} type="video/mp4" />
				</video>
			</div>
		</>
	);
};

export default PanelVideo;
