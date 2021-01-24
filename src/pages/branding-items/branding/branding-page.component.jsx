import React, { useRef, useEffect, useState } from 'react';

import axios from 'axios';
import PanelVideo from '../../../components/panel-video/panel-video.component';
import PortfolioDivider from '../../../components/portfolio-divider/portfolio-divider.component';
import PortfolioGallerySection from '../../../components/portfolio-gallery-section/portfolio-gallery-section.component';
import PortfolioItemSection from '../../../components/portfolio-item-section/portfolio-item-section.component';
import PortfolioIntroductionSection from '../../../components/portfolio-introduction-section/portfolio-introduction-section.component';
import ButtonRegular from '../../../components/button-regular/button-regular.component';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
<<<<<<< HEAD
import { API_URL } from '../../../components/globals';
=======
>>>>>>> 909d6be19b55b15ef4259257d61c7f0ceb4a6485

import { TimelineLite } from 'gsap';
const styles = require('./branding.module.css');

// POST IDs:

// Travel & Tourism: 28716
// Education: 28717
// Health & Medical: 28720
// Events & Festivals: 28721
// Lifestyle & Fashion: 28722
// Apps & Software: 28723
// Product: 28724
// Real Estate: 28725
// Charities & Organisations: 28726
<<<<<<< HEAD
// Websites & Apps: 28745
// Branding: 28742
=======
>>>>>>> 909d6be19b55b15ef4259257d61c7f0ceb4a6485

const BrandingPage = () => {
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
<<<<<<< HEAD
			.get(API_URL + '28742')
=======
			.get('https://t15media.com/wp-json/wp/v2/video_content/28716')
>>>>>>> 909d6be19b55b15ef4259257d61c7f0ceb4a6485
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

	return (
		<>
			<div className={styles.outerContainer}>
				<div className={styles.innerContainer}>
					<div className={styles.featureVideoContainer}>
<<<<<<< HEAD
						<PanelVideo videoName="home-assets/branding_cover.mp4" />
=======
						<PanelVideo videoName="Masci_HQ.mp4" />
>>>>>>> 909d6be19b55b15ef4259257d61c7f0ceb4a6485
					</div>

					<PortfolioIntroductionSection
						introduction={introduction}
						item1={item1}
						item2={item2}
						item3={item3}
<<<<<<< HEAD
						backText="all services"
						backRoute="/services"></PortfolioIntroductionSection>
					<PortfolioDivider />

					<PortfolioGallerySection
						item={item1.gallery}></PortfolioGallerySection>
					<PortfolioDivider />
=======
						backText="content creation"
						backRoute="/video-content"></PortfolioIntroductionSection>

					<PortfolioDivider />
					<PortfolioItemSection item={item1}></PortfolioItemSection>
					<PortfolioGallerySection
						item={item1.gallery}></PortfolioGallerySection>
					<PortfolioDivider />
					<PortfolioItemSection item={item2}></PortfolioItemSection>
					<PortfolioDivider />
					<PortfolioItemSection item={item3}></PortfolioItemSection>
					<PortfolioDivider />
>>>>>>> 909d6be19b55b15ef4259257d61c7f0ceb4a6485
					<ButtonRegular buttonText="get in touch" route="/contact" />
				</div>
			</div>
		</>
	);
};

export default BrandingPage;
