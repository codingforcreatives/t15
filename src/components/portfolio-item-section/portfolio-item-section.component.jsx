import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import VimeoVideo from '../vimeo-video/vimeo-video.component';

const styles = require('./portfolio-item-section.module.css');

const PortfolioItemSection = ({ item }) => {
	return (
		<div className={styles.item1Container}>
			<div className={styles.heading2}>{item.title}</div>
			<div className={styles.space2}></div>
			<div className={styles.description}>{item.description}</div>
			<div className={styles.space3}></div>

			<div className={styles.vimeoVideoContainer}>
				<VimeoVideo videoURL={item.video} />
			</div>
		</div>
	);
};

export default PortfolioItemSection;
