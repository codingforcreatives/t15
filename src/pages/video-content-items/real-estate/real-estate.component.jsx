import React, { useRef, useEffect, useState } from 'react';

import axios from 'axios';
import PanelVideo from '../../../components/panel-video/panel-video.component';
import PortfolioDivider from '../../../components/portfolio-divider/portfolio-divider.component';
import PortfolioGallerySection from '../../../components/portfolio-gallery-section/portfolio-gallery-section.component';
import PortfolioItemSection from '../../../components/portfolio-item-section/portfolio-item-section.component';
import PortfolioIntroductionSection from '../../../components/portfolio-introduction-section/portfolio-introduction-section.component';
import ButtonRegular from '../../../components/button-regular/button-regular.component';
import LoadingBar from '../../../components/loading-bar/loading-bar.component';
import { API_URL } from '../../../components/globals';
import { TimelineLite } from 'gsap';
import { Helmet } from 'react-helmet';
const styles = require('../video-content.module.css');

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

const RealEstatePage = () => {
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
			.get(API_URL + '28725')
			.then((res) => handleData(res.data))
			.catch((err) => console.log(err));

		console.log('MADE API CALL');
		console.log(introduction);
	}, []);

	return (
		<>
			<Helmet>
				<title>T15 Media | Real Estate Videography</title>
				<meta
					name="description"
					content="From coverage of entire property developments to commercial and residential real estate work, we have you covered. We provide an array of skills needed to promote your property- including photography, videography, 2D and 3D floor plan creation."></meta>
				<meta name="robots" content="index,follow"></meta>
				<meta
					property="og:title"
					content="T15 Media | Real Estate Videography"
				/>
				<meta property="og:url" content="https://t15media.com/real-estate" />
				<meta
					property="og:image"
					content="https://t15-website-assets.s3-ap-southeast-2.amazonaws.com/office.jpg"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:description"
					content="From coverage of entire property developments to commercial and residential real estate work, we have you covered. We provide an array of skills needed to promote your property- including photography, videography, 2D and 3D floor plan creation."
				/>
				<meta property="og:locale" content="en_US" />
				<meta property="og:site_name" content="T15 Media" />
			</Helmet>
			<div className={styles.outerContainer}>
				<div className={styles.innerContainer}>
					<div className={styles.featureVideoContainer}>
						<PanelVideo videoName="portfolio-assets/real_estate.mp4" />
					</div>

					{isLoaded ? (
						<>
							<PortfolioIntroductionSection
								introduction={introduction}
								item1={item1}
								item2={item2}
								item3={item3}
								backText="content creation"
								backRoute="/video-content"></PortfolioIntroductionSection>

							<PortfolioDivider />
							<PortfolioItemSection item={item1}></PortfolioItemSection>
							<PortfolioDivider />
							<PortfolioItemSection item={item2}></PortfolioItemSection>
							<PortfolioGallerySection
								item={item2.gallery}></PortfolioGallerySection>
							<PortfolioDivider />
							<PortfolioItemSection item={item3}></PortfolioItemSection>
							<PortfolioGallerySection
								item={item3.gallery}></PortfolioGallerySection>
						</>
					) : (
						<LoadingBar />
					)}

					<PortfolioDivider />
					<ButtonRegular buttonText="get in touch" route="/contact" />
				</div>
			</div>
		</>
	);
};

export default RealEstatePage;
