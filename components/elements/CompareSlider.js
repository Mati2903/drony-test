import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from "react-compare-slider";
import { FaArrowRight, FaArrowLeft, FaPencilAlt } from "react-icons/fa";
import { useState } from "react";

const CompareSlider = () => {
	const [imgFirst, setImgFirst] = useState("/before.jpg");
	const [imgSecond, setImgSecond] = useState("/after.jpg");

	// const handleClick = () => {
	// 	if (imgFirst === "assets/11.jpg" && imgSec === "assets/22.jpg") {
	// 		setImgFirst("assets/1.jpg");
	// 		setImgSecond("assets/2.jpg");
	// 	} else {
	// 		setImgFirst("assets/11.jpg");
	// 		setImgSecond("assets/22.jpg");
	// 	}
	// };

	return (
		<section className="slider" id="gallery">
			<h4 className="slider__header">
				Porównaj efekty graficznej obróbki materiału
			</h4>
			<span className="slider__text-container">
				<p className="slider__text-before">Przed</p>
				<p className="slider__text-after">Po</p>
			</span>
			<ReactCompareSlider
				portrait={false}
				className="slider__container"
				onlyHandleDraggable={true}
				itemOne={
					<ReactCompareSliderImage
						src={imgFirst}
						// srcSet="..."
						alt="Image one"
						className="slider__image"
					/>
				}
				itemTwo={
					<ReactCompareSliderImage
						src={imgSecond}
						// srcSet="..."
						alt="Image two"
						className="slider__image"
					/>
				}
			/>
			{/* <div className="slider__arrows-container">
				<FaArrowLeft
					className="slider__arrow arrow-left"
					onClick={handleClick}
				/>
				<FaArrowRight
					className="slider__arrow arrow-right"
					onClick={handleClick}
				/>
			</div> */}
		</section>
	);
};

export default CompareSlider;
