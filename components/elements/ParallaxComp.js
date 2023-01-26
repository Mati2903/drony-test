import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxComp = ({ imgUrl, header, mystyle }) => {
	return (
		<ParallaxBanner
			className="element"
			layers={[
				{
					image: imgUrl,
					speed: -20, //thit value is translate x10 px
				},
				{
					speed: 15,
					rotate: [0, 15],
					translateX: [0, 10],
					children: (
						<div className="container">
							<img src="./fpvdrone.png" />
						</div>
					),
				},
			]}
		/>
	);
};

export default ParallaxComp;
