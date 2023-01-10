import { useEffect, useState, useRef } from "react";
// import Image from "next/image";
// import { useAnimation, useInView, useScroll } from "framer-motion";
// import { motion } from "framer-motion";
// import { relativeTimeThreshold } from "moment";
// import { TbContainer, TbRefresh } from "react-icons/tb";
// import Loader from "../components/Loader";

const Video = () => {
	// const ref = useRef(null);
	// const isInView = useInView(ref, { margin: "-300px" });

	// const animation = useAnimation();

	// useEffect(() => {
	// 	if (isInView) {
	// 		console.log("in view");
	// 		animation.start({
	// 			x: "-450%",
	// 			scale: 8,
	// 			transition: {
	// 				duration: 1.5,
	// 				ease: [0.72, 0.18, 1, 0.12],
	// 			},
	// 			opacity: 1,
	// 		});
	// 	}
	// } else if (!isInView) {
	// 	console.log("not");
	// 	animation.start({
	// 		x: 1000,
	// 		scale: 1,
	// 		transition: { duration: 1 },
	// 		opacity: 1,
	// 	});
	// }
	// }, [isInView]);

	const [windowWidth, setWidth] = useState();
	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	const handleResize = () => {
		setWidth(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener("resize", handleResize, false);
	});

	// const [videoUrl, setVideoUrl] = useState("/desktop.mp4");

	// useEffect(() => {
	// 	window.addEventListener("resize", () => {
	// 		if (window.innerWidth > 769) {
	// 			setVideoUrl("/desktop.mp4");
	// 		} else if (window.innerWidth <= 768) {
	// 			setVideoUrl("/mobile.mp4");
	// 		}
	// 	});
	// }, [onResize]);
	return (
		<div className="video-container">
			<video
				id="movie"
				autoPlay
				loop
				// controls
				muted={true}
				// currentTime={scroll}
				src="/desktop.mp4"

				// src={windowWidth > 768 ? "/desktopcompress.mp4" : "/mobilecompress.mp4"}
			>
				Your browser does not support the video tag. Try to open this website in
				another browser.
			</video>
			{/* <p>PropWash</p> */}
		</div>
	);
};

export default Video;
