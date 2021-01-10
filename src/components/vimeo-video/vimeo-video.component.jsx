import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
const styles = require('./vimeo-video.module.css');

const VimeoVideo = ({ videoURL }) => {
	let url = videoURL;

	return (
		<>
			<div
				className={styles.video}
			>
				<ReactPlayer
					config={{
						vimeo: {
							playerOptions: {
								controls: true,
							},
						},
					}}
					url={url}
					width="100%"
					height="100%"
				/>
			</div>
		</>
	);
};

export default VimeoVideo;
