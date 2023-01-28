import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxComp = ({ bgImgUrl, childImgUrl }) => {
	return (
		<ParallaxBanner
			className="element"
			layers={[
				{
					image: bgImgUrl,
					speed: -20, //thit value is translate x10 px
				},
				{
					speed: 15,
					rotate: [0, 15],
					translateX: [0, 10],
					children: (
						<div className="container">
							<img src={childImgUrl} />
						</div>
					),
				},
			]}
		/>
	);
};

export default ParallaxComp;
