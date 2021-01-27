import React from 'react';

const styles = require('./skip-button.module.css');

const SkipButton = ({ onClickMethod }) => {
	return (
		<div className={styles.skipButton} onClick={onClickMethod}>
			<img
				className={styles.skipIcon}
				src={require(`../../assets/skip.png`)}></img>
			<p>Skip</p>
		</div>
	);
};

export default SkipButton;
