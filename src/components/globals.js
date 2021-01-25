export const API_URL = 'https://t15media.co.nz/wp-json/wp/v2/video_content/';
export const S3_BASE_URL =
	'https://t15-website-assets.s3-ap-southeast-2.amazonaws.com/';
export const SPLASH_VIDEO_URL =
	'https://t15-website-assets.s3-ap-southeast-2.amazonaws.com/Website-Hero-Compressed-v2.mp4';
export const FILM_STATIC_BG_URL =
	'https://t15-website-assets.s3-ap-southeast-2.amazonaws.com/T15-Film-Overlay.mp4';
export const PANEL_VIDEO_OVERLAY =
	'https://t15-website-assets.s3-ap-southeast-2.amazonaws.com/feature-overlay-rounded.png';
export const DEFAULT_MENU_VIDEO = 'Website-Hero-Compressed-v2.mp4';

export const MENU_DATA = [
	{
		title: 'About',
		path: '/about',
		videoName: 'about.mp4',
		cName: 'nav-text',
		key: 1,
		delay: 0.5,
	},
	{
		title: 'All Services',
		path: '/services',
		videoName: 'Website-Hero-Compressed-v2.mp4',
		cName: 'nav-text',
		key: 2,
		delay: 1,
	},
	{
		title: 'Broadcast TV',
		path: '/broadcast-tv',
		videoName: 'home-assets/broadcast_tv_cover.mp4',
		cName: 'nav-text',
		key: 3,
		delay: 1.5,
	},
	{
		title: 'Content Creation',
		path: '/video-content',
		videoName: 'home-assets/content_creation_cover.mp4',
		cName: 'nav-text',
		key: 4,
		delay: 2,
	},
	{
		title: 'Branding',
		path: '/branding',
		videoName: 'home-assets/branding_cover.mp4',
		cName: 'nav-text',
		key: 5,
		delay: 2.5,
	},
	{
		title: 'Websites',
		path: '/websites-and-apps',
		videoName: 'home-assets/websites_cover.mp4',
		cName: 'nav-text',
		key: 6,
		delay: 3,
	},
	{
		title: 'Contact',
		path: '/contact',
		videoName: 'contact.mp4',
		cName: 'nav-text',
		key: 6,
		delay: 3,
	},
];
