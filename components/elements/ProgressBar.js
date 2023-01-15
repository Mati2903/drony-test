import { useScroll, useSpring, motion } from "framer-motion";
import { useEffect } from "react";

//progress bar to shw progress of scroll Y
const ProgressBar = () => {
	const { scrollYProgress, scrollY } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});
	useEffect(() => {
		scrollY.onChange((y) => {
			let x = Math.floor(y / 10);
		});
	}, []);

	return (
		<motion.div style={{ scaleX, zIndex: "999" }} className="progress-bar" />
	);
};

export default ProgressBar;
