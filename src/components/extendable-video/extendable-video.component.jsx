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
	position,
}) => {
	const [width, setWidth] = useState('260px');
	const [expanded, setExpanded] = useState(false);
	const logo = 'tepari.png';
	var marginTop = 0;
	var marginBottom = 0;
	position === 'up' ? (marginTop = 30) : (marginTop = 0);
	position === 'down' ? (marginBottom = 30) : (marginBottom = 0);
	return (
		<div
			id="extendable-box"
			style={{ width: width, marginTop: marginTop, marginBottom: marginBottom }}
			onMouseEnter={() => {
				setWidth('40%');
				setExpanded(true);
			}}
			onMouseLeave={() => {
				setWidth('260px');
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
