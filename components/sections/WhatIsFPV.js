import Image from "next/image";
import TextAndImage from "../elements/TextAndImage";
import { useState, useEffect } from "react";

const WhatIsFPV = () => {
	const [elementOffsetBottom, setElementOffsetBottom] = useState(0);

	//set top value for section based on above sections heights
	useEffect(() => {
		const handleResize = () => {
			setElementOffsetBottom(
				document.querySelector(".our-drones").offsetTop +
					document.querySelector(".our-drones").offsetHeight -
					document.querySelector(".nav").offsetHeight
			);
		};
		//listener for window resize event, e.g. when user is changing view from portrait to landscape
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [elementOffsetBottom]);

	return (
		<section
			id="what-is-fpv"
			className="what-is-fpv"
			style={{ top: elementOffsetBottom }}
		>
			<div></div>
		</section>
	);
};

export default WhatIsFPV;
