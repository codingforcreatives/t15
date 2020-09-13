import React, { useRef, useState } from 'react';
import './extendable-video.styles.scss';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import { Transition } from 'react-transition-group';

const ExtendableVideo = ({
	panelType,
	logoName,
	title,
	overlayImageName,
	videoName,
}) => {
	const [width, setWidth] = useState('395.62px');
	const [expanded, setExpanded] = useState(false);
	const logo = 'tepari.png';

	return (
		<div
			id="extendable-box"
			style={{ width: width }}
			onMouseEnter={() => {
				setWidth('40%');
				setExpanded(true);
			}}
			onMouseLeave={() => {
				setWidth('395.62px');
				setExpanded(false);
			}}>
			{
				//Transitioning from image to video
				expanded == true ? (
					<video
						autoPlay="autoPlay"
						muted
						loop="loop"
						className="extendable-video-background"
						mask="url(#clipPath)">
						<source
							src={require(`../../assets/${videoName}`)}
							type="video/mp4"
						/>
					</video>
				) : (
					<img
						className="still-image"
						src={require(`../../assets/${overlayImageName}`)}></img>
				)
			}

			{panelType === 'home' ? (
				<h2 className="panel-title">{title}</h2>
			) : (
				<img
					className="logoImage"
					src={require(`../../assets/${logoName}`)}></img>
			)}
		</div>
	);
};

export default ExtendableVideo;
