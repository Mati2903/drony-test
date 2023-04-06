import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from "react-compare-slider";
import { useState } from "react";

const CompareSlider = () => {
	const [imgFirst, setImgFirst] = useState("/before.jpg");
	const [imgSecond, setImgSecond] = useState("/after.jpg");

	return (
		<section className="slider" id="gallery">
			<h4 className="slider__header">
				Porównaj efekty przed i po color gradingu
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
						alt="Zdjęcie driftującego auta przed obróbką graficzną"
						className="slider__image"
					/>
				}
				itemTwo={
					<ReactCompareSliderImage
						src={imgSecond}
						// srcSet="..."
						alt="Zdjęcie driftującego auta po obróbce graficznej"
						className="slider__image"
					/>
				}
			/>
		</section>
	);
};

export default CompareSlider;
