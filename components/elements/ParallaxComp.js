import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxComp = ({ imgUrl, header, mystyle }) => {
	return (
		<ParallaxBanner
			className="element"
			layers={[
				{
					image: imgUrl,
					speed: -10,
				},
				{
					speed: 25,
					rotate: [-5, 10],
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
