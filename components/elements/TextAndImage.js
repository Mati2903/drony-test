import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const TextAndImage = ({ title, paragraph, imgUrl, imgAlt, direction, id }) => {
	const [scrollY, setScrollY] = useState(0);
	const [ref, inView] = useInView({
		threshold: 0, // amount of image visible to start animation
	});

	//listening to scroll and save its value in the state
	useEffect(() => {
		function handleScroll() {
			setScrollY(window.scrollY);
		}
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	let animation;
	//variables below are from devtools, this is last value before element is not visible
	//60 and 25 for mobile
	const lastYValue = 40;
	const lastRotateDeg = 18;
	switch (id) {
		case 1:
			animation = {
				//different dividers values because scroll value is bigger with scrolling down and it should be approximately the same transform and rotate values for all animated elements
				y: inView ? scrollY / 30 : lastYValue,
				rotate: inView ? scrollY / 80 : lastRotateDeg,
			};
			break;
		case 2:
			animation = {
				y: inView ? scrollY / 40 : lastYValue,
				rotate: inView ? scrollY / 100 : lastRotateDeg,
			};
			break;
		case 3:
			animation = {
				y: inView ? scrollY / 50 : lastYValue,
				rotate: inView ? scrollY / 120 : lastRotateDeg,
			};
			break;
		case 4:
			animation = {
				y: inView ? scrollY / 60 : lastYValue,
				rotate: inView ? scrollY / 150 : lastRotateDeg,
			};
			break;
		default:
			animation = { y: 0, rotate: 0 };
	}

	return (
		<div
			ref={ref}
			className="text-image-container"
			style={{ flexDirection: direction }} //to change direction of image and text
		>
			<div className="text-container">
				<h2 className="text-container__title">{title}</h2>
				<p className="text-container__paragraph">{paragraph}</p>
			</div>
			<div className="img-container">
				<motion.img
					src={imgUrl}
					alt={imgAlt}
					initial={{ y: 0, rotate: 0 }}
					animate={animation}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 30,
						restDelta: 0.001,
					}}
					positionTransition //property for remember last position after animation
				/>
			</div>
		</div>
	);
};

export default TextAndImage;
