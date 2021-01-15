import React, { useRef, useState, useEffect } from 'react';

import PanelVideo from './../../components/panel-video/panel-video.component';
import ReactPlayer from 'react-player';
import VimeoVideo from './../../components/vimeo-video/vimeo-video.component';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const styles = require('./nipoon-portfolio-page.module.css');

const NipoonPortfolioPage = () => {
	const [sliderRef] = useKeenSlider({ slidesPerView: 2, spacing: 24 });

	return (
		<>
			<div className={styles.outerContainer}>
				<div className={styles.innerContainer}>
					<div className={styles.featureVideoContainer}>
						<PanelVideo videoURL="https://vimeo.com/326463076" />
					</div>
					<div className={styles.headerTextContainer}>
						<div className={styles.headerTextLeftSection}>
							<div className={styles.heading1}>Travel & Adventure</div>
							<div className={styles.space2}></div>
							<div>
								We are specialists in helping businesses deliver their stories
								in the most creative ways possible.From full-in-house production
								to strategy and creative treatment, you have come to the right
								place. We’ve got you.
							</div>
						</div>

						<div className={styles.headerTextRightSection}>
							<div className={styles.heading3}>LATEST CLIENTS</div>
							<div className={styles.space2}></div>
							<div>Air New Zealand</div>
							<div>Polar Pro</div>
							<div>Mui Campervans</div>
						</div>
					</div>

					<div className={styles.item1Container}>
						<div className={styles.heading2}>AIR NEW ZEALAND</div>
						<div className={styles.space2}></div>
						<div>
							We are specialists in helping businesses deliver their stories in
							the most creative ways possible.From full-in-house production to
							strategy and creative treatment, you have come to the right place.
							We’ve got you.
						</div>
						<div className={styles.space3}></div>

						<VimeoVideo videoURL={'https://vimeo.com/326463076'} />

						<div className={styles.space3}></div>
						<div ref={sliderRef} className="keen-slider">
							<div className="keen-slider__slide">
								<img
									className={styles.keenSlide}
									src={
										'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png'
									}
								/>
							</div>
							<div className="keen-slider__slide">
								<img
									className={styles.keenSlide}
									src={
										'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png'
									}
								/>
							</div>
							<div className="keen-slider__slide">
								<img
									className={styles.keenSlide}
									src={
										'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png'
									}
								/>
							</div>
						</div>
					</div>

					<div className={styles.item2Container}>
						<div className={styles.heading2}>POLAR PRO</div>
						<div className={styles.space2}></div>
						<div>
							We are specialists in helping businesses deliver their stories in
							the most creative ways possible.From full-in-house production to
							strategy and creative treatment, you have come to the right place.
							We’ve got you.
						</div>
						<div className={styles.space3}></div>

						<VimeoVideo videoURL={'https://vimeo.com/326463076'} />
					</div>

					<div className={styles.item3Container}>
						<div className={styles.heading2}>MAUI CAMPERVANS</div>
						<div className={styles.space2}></div>
						<div>
							We are specialists in helping businesses deliver their stories in
							the most creative ways possible.From full-in-house production to
							strategy and creative treatment, you have come to the right place.
							We’ve got you.
						</div>
						<div className={styles.space3}></div>

						<VimeoVideo videoURL={'https://vimeo.com/326463076'} />
					</div>
				</div>
			</div>
		</>
	);
};

export default NipoonPortfolioPage;
