import React, { useRef, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
const styles = require('./portfolio-introduction-section.module.css');

const PortfolioIntroductionSection = ({
	introduction,
	item1,
	item2,
	item3,
	backText,
	backRoute,
}) => {
	return (
		<>
			<div className={styles.backButtonContainer}>
				<Link to={backRoute}>
					<img
						className={styles.backArrow}
						src={require(`../../assets/back-arrow-edge.png`)}></img>
				</Link>
				<NavLink to={backRoute} style={{ textDecoration: 'none' }}>
					<div className={styles.backText}> {backText} </div>
				</NavLink>
			</div>
			<div className={styles.headerTextContainer}>
				<div className={styles.headerTextLeftSection}>
					<div className={styles.heading1}>{introduction.title}</div>
					<div className={styles.space2}></div>
					<div className={styles.description}>{introduction.description}</div>
				</div>

				<div className={styles.headerTextRightSection}>
					<div className={styles.heading3}>LATEST CLIENTS</div>
					<div className={styles.space2}></div>
					<div className={styles.clients}>{item1.title}</div>
					<div className={styles.clients}>{item2.title}</div>
					<div className={styles.clients}>{item3.title}</div>
				</div>
			</div>
		</>
	);
};

export default PortfolioIntroductionSection;
