import { useState, useEffect } from "react";

const WhatIsFPV = () => {
	const [elementOffsetBottom, setElementOffsetBottom] = useState(0);

	//set top value for section based on above section height
	useEffect(() => {
		const handleResize = () => {
			setElementOffsetBottom(
				document.querySelector(".our-drones").offsetTop +
					document.querySelector(".our-drones").offsetHeight
			);
		};

		//listener for window resize event, e.g. when user is changing view from portrait to landscape
		window.addEventListener("scroll", handleResize);
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("scroll", handleResize);
			window.removeEventListener("resize", handleResize);
		};
	}, [elementOffsetBottom]);

	return (
		<section
			id="what-is-fpv"
			className="what-is-fpv"
			style={{ top: elementOffsetBottom > 0 ? elementOffsetBottom : "550vh" }}
		>
			<div></div>
		</section>
	);
};

export default WhatIsFPV;
