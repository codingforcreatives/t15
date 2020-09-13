import React from 'react';
import './homepage.styles.scss';
// import SplashScreen from '../../components/splash-screen/splash-screen.component';

import ExtendableVideo from '../../components/extendable-video/extendable-video.component';
const serviceCategories = {
	branding: {
		key: '1',
		panelType: 'home',
		title: 'branding',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'up',
	},
	broadcastTV: {
		key: '2',
		panelType: 'home',
		title: 'broadcast TV',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'down',
	},
	contentAdvertising: {
		key: '3',
		panelType: 'home',
		title: 'video content',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'up',
	},
	webDevelopment: {
		key: '4',
		panelType: 'home',
		title: 'web design',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		position: 'down',
	},
};

var arr = [];
Object.keys(serviceCategories).forEach(function (key) {
	arr.push(serviceCategories[key]);
});

const HomePage = () => {
	return (
		<div className="homepage">
			{/* <ExtendableVideoGallery serviceCategories={serviceCategories} /> */}

			{arr.map((item) => (
				<ExtendableVideo
					key={item.label}
					panelType={item.panelType}
					title={item.title}
					logoName={item.logoName}
					overlayImageName={item.overlayImageName}
					videoName={item.videoName}
					position={item.position}
				/>
			))}
		</div>
	);
};

export default HomePage;
