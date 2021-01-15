import React, { useRef, useEffect, useState } from 'react';

import axios from 'axios';
import PanelVideo from '../../../components/panel-video/panel-video.component';
import PortfolioIntroductionSection from '../../../components/portfolio-introduction-section/portfolio-introduction-section.component';

import ReactPlayer from 'react-player';
import VimeoVideo from '../../../components/vimeo-video/vimeo-video.component';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { TweenMax, Power3, Power4, TimelineLite } from 'gsap';
const styles = require('./travel-tourism.module.css');

// post ids:
// Travel & Tourism: 28716
// Education: 28717

const TravelTourismPage = () => {
	const [isLoaded, setLoaded] = useState(false);

	let introduction = {
		title: '',
		description: '',
		video: '',
	};
	let item1 = {
		title: '',
		description: '',
		video: '',
		gallery: '',
	};
	let item2 = {
		title: '',
		description: '',
		video: '',
		gallery: '',
	};
	let item3 = {
		title: '',
		description: '',
		video: '',
		gallery: '',
	};

	//Gsap Animations
	let backgroundVideo = useRef(null);
	let homepageContainer = useRef(null);

	const tl = new TimelineLite();

	let handleData = (data) => {
		introduction = {
			title: data.acf.introduction_title,
			description: data.acf.introduction_description,
			video: data.acf.introduction_video,
		};

		item1 = {
			title: data.acf.item_1_title,
			description: data.acf.item_1_description,
			video: data.acf.item_1_video,
			gallery: data.acf.item_1_gallery,
		};
		item2 = {
			title: data.acf.item_2_title,
			description: data.acf.item_2_description,
			video: data.acf.item_2_video,
			gallery: data.acf.item_2_gallery,
		};
		item3 = {
			title: data.acf.item_3_title,
			description: data.acf.item_3_description,
			video: data.acf.item_3_video,
			gallery: data.acf.item_3_gallery,
		};
		setLoaded(true);
		console.log('handled data');
		console.log(introduction);
	};

	useEffect(() => {
		axios
			.get('https://t15media.com/wp-json/wp/v2/video_content/28716')
			.then((res) => handleData(res.data))
			.catch((err) => console.log(err));

		console.log('MADE API CALL');
		console.log(introduction);
	});

	// return (
	// 	<div ref={(el) => (homepageContainer = el)} className="portfolio-container">
	// 		{isLoaded ? (
	// 			<PortfolioIntroductionSection
	// 				title={introduction.title}
	// 				introduction={introduction.description}
	// 				client1={item1.title}
	// 				client2={item2.title}
	// 				client3={item3.title}
	// 			/>
	// 		) : (
	// 			<div></div>
	// 		)}
	// 	</div>
	// );

	const [sliderRef] = useKeenSlider({ slidesPerView: 2, spacing: 24 });

	return (
		<>
			<div className={styles.outerContainer}>
				<div className={styles.innerContainer}>
					<div className={styles.featureVideoContainer}>
						<PanelVideo videoName="Masci_HQ.mp4" />
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

export default TravelTourismPage;

/* <div className="featureVideoContainer">
				<PanelVideo videoURL="https://vimeo.com/326463076" />
			</div> */
