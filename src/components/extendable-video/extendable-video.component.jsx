import React, { useRef, useState } from 'react';
import './extendable-video.styles.scss';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import { Transition } from 'react-transition-group';

const ExtendableVideo = () => {
	const [width, setWidth] = useState('10%');
	return (
		<div className="extendable-video-container">
			<Transition
				in={width}
				timeout={350}
				classNames="extendable-box"
				unmountOnExit>
				<div
					id="extendable-box"
					style={{ width: width }}
					onMouseEnter={() => setWidth('50%')}
					onMouseLeave={() => setWidth('10%')}>
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
				</div>
			</Transition>
		</div>
	);
};

export default ExtendableVideo;
