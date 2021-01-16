import React, { useRef, useEffect, useState } from 'react';

import axios from 'axios';
import PanelVideo from '../../../components/panel-video/panel-video.component';
import VimeoVideo from '../../../components/vimeo-video/vimeo-video.component';
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

	const [currentSlide, setCurrentSlide] = useState(0)
	const [sliderRef, slider] = useKeenSlider({
		initial: 0,
		slidesPerView: 2,
		spacing: 24,
		slideChanged(s) {
			setCurrentSlide(s.details().relativeSlide)
		},
	})

	const IntroductionSection = (
		<>
			<div className={styles.headerTextContainer} >
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
			</div >
		</>
	)

	const Item1Section = (
		<div className={styles.item1Container} >
			<div className={styles.heading2}>{item1.title}</div>
			<div className={styles.space2}></div>
			<div>{item1.description}</div>
			<div className={styles.space3}></div>

			<div className={styles.vimeoVideoContainer}>
				<VimeoVideo videoURL={item1.video} />
			</div>
		</div>
	)

	const Item2Section = (
		<div className={styles.item2Container} >
			<div className={styles.heading2}>{item2.title}</div>
			<div className={styles.space2}></div>
			<div>{item2.description}</div>
			<div className={styles.space3}></div>

			<div className={styles.vimeoVideoContainer}>
				<VimeoVideo videoURL={item2.video} />
			</div>
		</div>
	)

	const Item3Section = (
		<div className={styles.item3Container} >
			<div className={styles.heading2}>{item3.title}</div>
			<div className={styles.space2}></div>
			<div>{item3.description}</div>
			<div className={styles.space3}></div>

			<div className={styles.vimeoVideoContainer}>
				<VimeoVideo videoURL={item3.video} />
			</div>
		</div>
	)

	const SliderSection = (
		<div className={styles.navigationWrapper} >
			<div ref={sliderRef} className="keen-slider">
				<div className="keen-slider__slide">
					<img
						className={styles.keenSlide}
						src={item1.gallery}
					/>
				</div>
				<div className="keen-slider__slide">
					<img
						className={styles.keenSlide}
						src={item2.gallery}
					/>
				</div>
				<div className="keen-slider__slide">
					<img
						className={styles.keenSlide}
						src={item3.gallery}
					/>
				</div>
			</div>
			{
				slider && (
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
				)
			}
		</div>
	)


	return (
		<>
			<div className={styles.outerContainer}>
				<div className={styles.innerContainer}>
					<div className={styles.featureVideoContainer}>
						<PanelVideo videoName="Masci_HQ.mp4" />
					</div>

					{IntroductionSection}
					{Item1Section}
					<div className={styles.space3}></div>
					{SliderSection}
					{Item2Section}
					{Item3Section}
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
			viewBox="0 0 24 24"
		>
			<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
		</svg >
	)
}

const ArrowRight = (props) => {
	return (
		<svg
			onClick={props.onClick}
			className={`${styles.arrow} ${styles.arrowRight} `}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
		</svg >
	)
}