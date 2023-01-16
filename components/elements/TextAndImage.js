import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const TextAndImage = ({ title, paragraph, imgUrl, imgAlt, direction }) => {
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

	return (
		<div className="text-image-container" style={{ flexDirection: direction }}>
			<div className="text-container">
				<h2 className="text-container__title">{title}</h2>
				<p className="text-container__paragraph">{paragraph}</p>
			</div>
			<div ref={ref} className="img-container">
				<motion.img
					src={imgUrl}
					alt={imgAlt}
					initial={{ rotate: -5 }}
					animate={{
						rotate: inView ? scrollY / 150 : -5,
					}}
					transition={{ duration: 0 }}
				/>
			</div>
		</div>
	);
};

export default TextAndImage;
