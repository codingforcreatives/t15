import React, { useRef, useState } from 'react';
import './extendable-video.styles.scss';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import { Transition } from 'react-transition-group';

const ExtendableVideo = () => {
	const [width, setWidth] = useState('395.62px');
	const [expanded, setExpanded] = useState(false);
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
			{/* <div id="left-triangle">
				<svg id="left-triangle" viewBox="0 0 201 493">
					<path
						id="Path_36"
						class="st0"
						fill="#000"
						d="M-0.3,493.2L-0.3,493.2V0.2h201L-0.3,493.2z"
					/>
				</svg>
			</div> */}
			{expanded == true ? (
				<video
					autoPlay="autoPlay"
					muted
					loop="loop"
					className="extendable-video-background"
					mask="url(#clipPath)">
					<source
						src={require('../../assets/Website-Hero-Compressed-v2.mp4')}
						type="video/mp4"
					/>
				</video>
			) : (
				<img
					className="still-image"
					src={require('../../assets/temporary-screenshot.png')}></img>
			)}
			{/* 
			<div id="right-triangle">
				<svg id="right-triangle" viewBox="0 0 201 493">
					<path
						id="Path_36"
						class="st0"
						fill="#000"
						d="M200.7,0.2L200.7,0.2v493h-201L200.7,0.2z"
					/>
				</svg>
			</div> */}
		</div>
	);
};

export default ExtendableVideo;
