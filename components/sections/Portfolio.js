import { useState, useEffect } from "react";
import VideoCard from "../elements/VideoCard";

const Portfolio = () => {
	const [offsetTop, setOffsetTop] = useState();

	//set initial offset top value after first render
	useEffect(() => {
		setOffsetTop(
			document.querySelector(".nav").offsetHeight +
				document.querySelector(".video").offsetHeight +
				document.querySelector(".what-is-fpv").offsetHeight +
				document.querySelector(".our-drones").offsetHeight
		);
	}, []);

	//change offset top value if window is resized
	useEffect(() => {
		//function for event listeners on resize event - if window is resized section top value is updating
		const handleResize = () => {
			setOffsetTop(
				//video section height
				document.querySelector(".nav").offsetHeight +
					document.querySelector(".video").offsetHeight +
					document.querySelector(".what-is-fpv").offsetHeight +
					document.querySelector(".our-drones").offsetHeight
			);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [offsetTop]);
	return (
		<section className="portfolio" style={{ top: offsetTop }}>
			<h2 className="portfolio__title">Zobacz niektóre z naszych realizacji</h2>
			<VideoCard embedID="IVxvZQ5t8k4" title="Zwiedzanie pewnego miasta" />
			<VideoCard embedID="2RJT-cdmc74" title="Moto Session 2022 Lublin" />
			<VideoCard embedID="0hha5AqtQzo" title="A walk in the forest" />
			<VideoCard embedID="gyzXzzSds4s" title="Thick fog in the morning" />
		</section>
	);
};

export default Portfolio;
