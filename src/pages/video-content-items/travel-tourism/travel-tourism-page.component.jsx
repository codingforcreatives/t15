import React, { useRef, useEffect, useState } from 'react';

import axios from 'axios';
import PanelVideo from '../../../components/panel-video/panel-video.component';
import VimeoVideo from '../../../components/vimeo-video/vimeo-video.component';
import PortfolioGallerySection from '../../../components/portfolio-gallery-section/portfolio-gallery-section.component';
import PortfolioItemSection from '../../../components/portfolio-item-section/portfolio-item-section.component';
import PortfolioIntroductionSection from '../../../components/portfolio-introduction-section/portfolio-introduction-section.component';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { TimelineLite } from 'gsap';
const styles = require('./travel-tourism.module.css');

// post ids:
// Travel & Tourism: 28716
// Education: 28717

const TravelTourismPage = () => {
	const [isLoaded, setLoaded] = useState(false);

	const [introduction, setIntroduction] = useState({
		title: '',
		description: '',
		video: '',
	});
	const [item1, setItem1] = useState({
		title: '',
		description: '',
		video: '',
		gallery: '',
	});
	const [item2, setItem2] = useState({
		title: '',
		description: '',
		video: '',
		gallery: '',
	});
	const [item3, setItem3] = useState({
		title: '',
		description: '',
		video: '',
		gallery: '',
	});

	//Gsap Animations
	let backgroundVideo = useRef(null);
	let homepageContainer = useRef(null);

	const tl = new TimelineLite();

	let handleData = (data) => {
		setIntroduction({
			title: data.acf.introduction_title,
			description: data.acf.introduction_description,
			video: data.acf.introduction_video,
		});

		setItem1({
			title: data.acf.item_1_title,
			description: data.acf.item_1_description,
			video: data.acf.item_1_video,
			gallery: data.acf.item_1_gallery,
		});

		setItem2({
			title: data.acf.item_2_title,
			description: data.acf.item_2_description,
			video: data.acf.item_2_video,
			gallery: data.acf.item_2_gallery,
		});
		setItem3({
			title: data.acf.item_3_title,
			description: data.acf.item_3_description,
			video: data.acf.item_3_video,
			gallery: data.acf.item_3_gallery,
		});
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
	}, []);

	const [currentSlide, setCurrentSlide] = useState(0);
	const [sliderRef, slider] = useKeenSlider({
		initial: 0,
		slidesPerView: 2,
		spacing: 24,
		slideChanged(s) {
			setCurrentSlide(s.details().relativeSlide);
		},
	});

	const SliderSection = (
		<div className={styles.navigationWrapper}>
			<div ref={sliderRef} className="keen-slider">
				{/* {item.gallery.map((item) => (
					<div className="keen-slider__slide">
						<img className={styles.keenSlide} src={item} />
					</div>
				))} */}
				<div className="keen-slider__slide">
					<img className={styles.keenSlide} src={item1.gallery[0]} />
				</div>
				<div className="keen-slider__slide">
					<img className={styles.keenSlide} src={item1.gallery[1]} />
				</div>
				<div className="keen-slider__slide">
					<img className={styles.keenSlide} src={item1.gallery[2]} />
				</div>
			</div>
			{slider && (
				<>
					<ArrowLeft
						onClick={(e) => e.stopPropagation() || slider.prev()}
						disabled={currentSlide === 0}
					/>
					<ArrowRight
						onClick={(e) => e.stopPropagation() || slider.next()}
						disabled={currentSlide === slider.details().size - 1}
					/>
				</>
			)}
		</div>
	);

	const SliderSectionComponent = (imageArray) => {
		console.log('IMAGE ARRAY');
		console.log(imageArray);
		return (
			<div className={styles.navigationWrapper}>
				<div ref={sliderRef} className="keen-slider">
					{imageArray.map((item) => (
						<div className="keen-slider__slide">
							<img className={styles.keenSlide} src={item} />
						</div>
					))}
					<div className="keen-slider__slide">
						<img className={styles.keenSlide} src={item1.gallery[0]} />
					</div>
					<div className="keen-slider__slide">
						<img className={styles.keenSlide} src={item1.gallery[1]} />
					</div>
					<div className="keen-slider__slide">
						<img className={styles.keenSlide} src={item1.gallery[2]} />
					</div>
				</div>
				{slider && (
					<>
						<ArrowLeft
							onClick={(e) => e.stopPropagation() || slider.prev()}
							disabled={currentSlide === 0}
						/>
						<ArrowRight
							onClick={(e) => e.stopPropagation() || slider.next()}
							disabled={currentSlide === slider.details().size - 1}
						/>
					</>
				)}
			</div>
		);
	};

	return (
		<>
			<div className={styles.outerContainer}>
				<div className={styles.innerContainer}>
					<div className={styles.featureVideoContainer}>
						<PanelVideo videoName="Masci_HQ.mp4" />
					</div>

					<PortfolioIntroductionSection
						introduction={introduction}
						item1={item1}
						item2={item2}
						item3={item3}>
						{' '}
					</PortfolioIntroductionSection>

					<PortfolioItemSection item={item1}></PortfolioItemSection>

					<PortfolioItemSection item={item2}></PortfolioItemSection>
					<PortfolioItemSection item={item3}></PortfolioItemSection>

					<div className={styles.space3}></div>
					{/* {SliderSection} */}
					<PortfolioGallerySection
						item={item1.gallery}></PortfolioGallerySection>
				</div>
			</div>
		</>
	);
};

export default TravelTourismPage;

const ArrowLeft = (props) => {
	return (
		<svg
			onClick={props.onClick}
			className={`${styles.arrow} ${styles.arrowLeft} `}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24">
			<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
		</svg>
	);
};

const ArrowRight = (props) => {
	return (
		<svg
			onClick={props.onClick}
			className={`${styles.arrow} ${styles.arrowRight} `}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24">
			<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
		</svg>
	);
};
