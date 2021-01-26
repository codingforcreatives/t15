import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import loader from '../../assets/loader.gif';
const styles = require('./loading-bar.module.css');

const LoadingBar = () => {
	return (
		<>
			<div className={styles.loaderContainer}>
				<img className={styles.loader} src={loader} alt="loading..." />
				<p> Get Ready </p>
			</div>
		</>
	);
};

export default LoadingBar;
