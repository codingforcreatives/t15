import React, { useRef, useEffect } from 'react';
import tvStatic from '../../assets/tv-static-2.gif';

const styles = require('./page-not-found.module.css');

const PageNotFound = () => {
	return (
		<div className={styles.notFoundContainer}>
			<img className={styles.standBy} src={tvStatic} alt="404" />
			<h1> 404</h1>
			<h2> Page Not Found</h2>
		</div>
	);
};

export default PageNotFound;
