import React, { useRef, useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';

const styles = require('./portfolio-gallery-section.module.css');

const PortfolioGallerySection = ({ item }) => {
	let introductionContainer = useRef(null);

	const [currentSlide, setCurrentSlide] = useState(0);
	const [sliderRef, slider] = useKeenSlider({
		initial: 0,
		slidesPerView: 1,
		spacing: 20,
		slideChanged(s) {
			setCurrentSlide(s.details().relativeSlide);
		},
	});

	console.log('INSIDE PORTFOLIO GALLERY');
	console.log(item);
	console.log(typeof item);

	var toArray = Object.keys(item).map((key) => item[key]);

	return (
		<div className={styles.navigationWrapper}>
			<div ref={sliderRef} className="keen-slider">
				{/* {toArray.map((item) => (
					<div className="keen-slider__slide">
						<img className={styles.keenSlide} src={item} />
					</div>
				))} */}
				<div className="keen-slider__slide">
					<div
						className={styles.keenSlideContainer}
						style={{
							backgroundImage: `url(${item[0]})`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}></div>
				</div>
				<div className="keen-slider__slide">
					<div
						className={styles.keenSlideContainer}
						style={{
							backgroundImage: `url(${item[1]})`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}></div>
				</div>
				<div className="keen-slider__slide">
					<div
						className={styles.keenSlideContainer}
						style={{
							backgroundImage: `url(${item[2]})`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}></div>
				</div>
				<div className="keen-slider__slide">
					<div
						className={styles.keenSlideContainer}
						style={{
							backgroundImage: `url(${item[3]})`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}></div>
				</div>
				<div className="keen-slider__slide">
					<div
						className={styles.keenSlideContainer}
						style={{
							backgroundImage: `url(${item[4]})`,
							backgroundPosition: 'center center ',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}></div>
				</div>
			</div>
			{slider && (
				<>
					<ArrowLeft
						onClick={(e) => e.stopPropagation() || slider.prev()}
						disabled={currentSlide === 0}
					/>
					<ArrowRight
						onClick={(e) => e.stopPropagation() || slider.next()}
						disabled={currentSlide === slider.details().size - 1}
					/>
				</>
			)}
		</div>
	);
};

export default PortfolioGallerySection;

const ArrowLeft = (props) => {
	return (
		<svg
			onClick={props.onClick}
			className={`${styles.arrow} ${styles.arrowLeft} `}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24">
			<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
		</svg>
	);
};

const ArrowRight = (props) => {
	return (
		<svg
			onClick={props.onClick}
			className={`${styles.arrow} ${styles.arrowRight} `}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24">
			<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
		</svg>
	);
};
