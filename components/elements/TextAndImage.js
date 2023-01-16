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
	switch (id) {
		case 1:
			animation = {
				y: inView ? scrollY / 30 : 0,
				rotate: inView ? scrollY / 100 : 0,
			};
			break;
		case 2:
			animation = {
				y: inView ? scrollY / 30 : 0,
				rotate: inView ? -scrollY / 100 : 0,
			};
			break;
		case 3:
			animation = {
				y: inView ? scrollY / 30 : 0,
				rotate: inView ? scrollY / 100 : 0,
			};
			break;
		case 4:
			animation = {
				y: inView ? scrollY / 30 : 0,
				rotate: inView ? scrollY / 100 : 0,
			};
			break;
		default:
			animation = { y: 0, rotate: 0 };
	}

	return (
		<div
			ref={ref}
			className="text-image-container"
			style={{ flexDirection: direction }}
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
					transition={{ duration: 0 }}
					positionTransition //property for remember last position after animation
				/>
			</div>
		</div>
	);
};

export default TextAndImage;
