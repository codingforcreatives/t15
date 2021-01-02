import React, { useRef, useEffect, useState } from 'react';
import './travel-tourism.styles.scss';
import axios from 'axios';
import PanelVideo from '../../../components/panel-video/panel-video.component';
import PortfolioIntroductionSection from '../../../components/portfolio-introduction-section/portfolio-introduction-section.component';

import { TweenMax, Power3, Power4, TimelineLite } from 'gsap';

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
		tl.to(homepageContainer, 0.2, {
			css: { visibility: 'visible' },
		});

		axios
			.get('https://t15media.com/wp-json/wp/v2/video_content/28716')
			.then((res) => handleData(res.data))
			.catch((err) => console.log(err));

		console.log('MADE API CALL');
		console.log(introduction);
	});

	return (
		<div ref={(el) => (homepageContainer = el)} className="portfolio-container">
			{isLoaded ? (
				<PortfolioIntroductionSection
					title={introduction.title}
					introduction={introduction.description}
					client1={item1.title}
					client2={item2.title}
					client3={item3.title}
				/>
			) : (
				<div></div>
			)}
		</div>
	);
};

export default TravelTourismPage;

/* <div className="featureVideoContainer">
				<PanelVideo videoURL="https://vimeo.com/326463076" />
			</div> */
