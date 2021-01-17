import React, { useRef, useState, useEffect } from 'react';

import ReactPlayer from 'react-player';
const styles = require('./portfolio-introduction-section.module.css');

const PortfolioIntroductionSection = ({
	introduction,
	item1,
	item2,
	item3,
}) => {
	let introductionContainer = useRef(null);

	return (
		<>
			<div className={styles.headerTextContainer}>
				<div className={styles.headerTextLeftSection}>
					<div className={styles.heading1}>{introduction.title}</div>
					<div className={styles.space2}></div>
					<div>{introduction.description}</div>
				</div>

				<div className={styles.headerTextRightSection}>
					<div className={styles.heading3}>LATEST CLIENTS</div>
					<div className={styles.space2}></div>
					<div>{item1.title}</div>
					<div>{item2.title}</div>
					<div>{item3.title}</div>
				</div>
			</div>
		</>
	);
};

export default PortfolioIntroductionSection;
