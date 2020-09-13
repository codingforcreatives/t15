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
	},
	broadcastTV: {
		key: '2',
		panelType: 'home',
		title: 'broadcast TV',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
	},
	contentAdvertising: {
		key: '3',
		panelType: 'home',
		title: 'content advertising',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
	},
	webDevelopment: {
		key: '3',
		panelType: 'home',
		title: 'web development',
		logoName: '',
		overlayImageName: 'temporary-screenshot.png',
		videoName: 'Website-Hero-Compressed-v2.mp4',
	},
};

var arr = [];
Object.keys(serviceCategories).forEach(function (key) {
	arr.push(serviceCategories[key]);
});

const HomePage = () => {
	return (
		<div className="homepage">
			{arr.map((item) => (
				<ExtendableVideo
					key={item.label}
					panelType={item.panelType}
					title={item.title}
					logoName={item.logoName}
					overlayImageName={item.overlayImageName}
					videoName={item.videoName}
				/>
			))}
			{/* <ExtendableVideo
				panelType="home"
				title="branding strategy"
				logoName=""
				overlayImageName="temporary-screenshot.png"
				videoName="Website-Hero-Compressed-v2.mp4"
			/>
			<ExtendableVideo
				panelType="category"
				title="broadcast TV"
				logoName="tepari.png"
				overlayImageName="temporary-screenshot.png"
				videoName="Website-Hero-Compressed-v2.mp4"
			/> */}
		</div>
	);
};

export default HomePage;
