import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxComp = ({ imgUrl, header, mystyle }) => {
	return (
		<ParallaxBanner
			className="element"
			layers={[
				{
					image: imgUrl,
					speed: -20,
				},
				{
					speed: 10,
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
