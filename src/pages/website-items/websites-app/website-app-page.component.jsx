import React, { useRef, useEffect, useState } from 'react';

import axios from 'axios';
import PanelVideo from '../../../components/panel-video/panel-video.component';
import PortfolioDivider from '../../../components/portfolio-divider/portfolio-divider.component';
import PortfolioGallerySection from '../../../components/portfolio-gallery-section/portfolio-gallery-section.component';
import PortfolioItemSection from '../../../components/portfolio-item-section/portfolio-item-section.component';
import PortfolioIntroductionSection from '../../../components/portfolio-introduction-section/portfolio-introduction-section.component';
import LoadingBar from '../../../components/loading-bar/loading-bar.component';
import ButtonRegular from '../../../components/button-regular/button-regular.component';
import { Helmet } from 'react-helmet';

import { API_URL } from '../../../components/globals';

import { TimelineLite } from 'gsap';
const styles = require('./website-app.module.css');

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
// Websites & Apps: 28745
// Branding: 28742

const WebsiteAppPage = () => {
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
			.get(API_URL + '28745')
			.then((res) => handleData(res.data))
			.catch((err) => console.log(err));

		console.log('MADE API CALL');
		console.log(introduction);
	}, []);

	return (
		<>
			<Helmet>
				<title>T15 Media | Websites and Apps </title>
				<meta
					name="description"
					content="Consider us your creatives with the ability to build you a digital service. Our developers at our partner company Paperballoon Co have the experience to deliver high end results. From simple ecommerce sites, to cross platform app development, our team can do it all!"></meta>
				<meta name="robots" content="index,follow"></meta>
				<meta property="og:title" content="T15 Media | Websites and Apps" />
				<meta
					property="og:url"
					content="https://t15media.com/websites-and-apps"
				/>
				<meta
					property="og:image"
					content="https://t15-website-assets.s3-ap-southeast-2.amazonaws.com/office.jpg"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:description"
					content="Consider us your creatives with the ability to build you a digital service. Our developers at our partner company Paperballoon Co have the experience to deliver high end results. From simple ecommerce sites, to cross platform app development, our team can do it all!"
				/>
				<meta property="og:locale" content="en_US" />
				<meta property="og:site_name" content="T15 Media" />
			</Helmet>
			<div className={styles.outerContainer}>
				<div className={styles.innerContainer}>
					<div className={styles.featureVideoContainer}>
						<PanelVideo videoName="home-assets/websites_cover.mp4" />
					</div>

					{isLoaded ? (
						<>
							<PortfolioIntroductionSection
								introduction={introduction}
								item1={item1}
								item2={item2}
								item3={item3}
								backText="all services"
								backRoute="/services"></PortfolioIntroductionSection>

							<PortfolioDivider />
							<PortfolioItemSection item={item1}></PortfolioItemSection>
							<PortfolioGallerySection
								item={item1.gallery}></PortfolioGallerySection>
							<PortfolioDivider />
							<PortfolioItemSection item={item2}></PortfolioItemSection>
							<PortfolioGallerySection
								item={item2.gallery}></PortfolioGallerySection>
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

export default WebsiteAppPage;
