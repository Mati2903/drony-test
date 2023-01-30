import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxComp = ({ bgImgUrl, childImgUrl }) => {
	return (
		<ParallaxBanner
			className="parallax-banner"
			layers={[
				{
					image: bgImgUrl,
					speed: -20, //this value is translate x10 px
				},
				childImgUrl
					? {
							speed: 15,
							rotate: [0, 15],
							translateX: [0, 10],
							children: (
								<div className="parallax-child-container">
									<img src={childImgUrl} />
								</div>
							),
					  }
					: null,
			]}
		/>
	);
};

export default ParallaxComp;
