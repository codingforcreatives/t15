import React from 'react';
import './homepage.styles.scss';
import ExtendableVideo from '../../components/extendable-video/extendable-video.component';

const ExtendableVideoGallery = ({ serviceCategories }) => {
	var arr = [];
	Object.keys(serviceCategories).forEach(function (key) {
		arr.push(serviceCategories[key]);
	});
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
export default ExtendableVideoGallery;
