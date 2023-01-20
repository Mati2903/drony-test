import { useEffect, useState, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Shadow from "../elements/Shadow";

const Video = () => {
	const videoRef = useRef(null);
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

	//for changing video file depending on the window width
	// const [windowWidth, setWidth] = useState();
	// useEffect(() => {
	// 	setWidth(window.innerWidth);
	// }, []);

	// const handleResize = () => {
	// 	setWidth(window.innerWidth);
	// };
	// useEffect(() => {
	// 	window.addEventListener("resize", handleResize, false);
	// });

	//function to handle disappearing span element if scroll more than 100px
	const handleScroll = () => {
		const checkForMore = document.querySelector(".main__header-more");
		// const video = document.querySelector(".video-element");
		const videoContainer = document.querySelector(".video__container");
		// const container = document.querySelector(".main__background-video");
		//rotate video on scroll
		// video.style.transform = `rotateX(${
		// 	(window.scrollY - video.offsetTop) / 5
		// }deg)`;

		let video = document.querySelector(".video__element");
		let container = document.querySelector(".video__container");

		// window.addEventListener("scroll", function () {
		// 	// video.style.top = container.offsetTop + "px";
		// 	let value = window.scrollY;
		// 	let limit = container.offsetTop + container.offsetHeight;
		// 	if (value > container.offsetTop && value < limit) {
		// 		video.style.top = value - (container.offsetTop + 100) + "px";
		// 	}
		// });

		//disappearing of check for more text
		if (window.scrollY > 100) {
			checkForMore.style.opacity = "0";
			checkForMore.style.pointerEvents = "none";
		} else {
			checkForMore.style.opacity = "1";
			checkForMore.style.pointerEvents = "all";
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

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
		<section className="video">
			<div className="video__container">
				<video
					id="movie"
					className="video__element"
					autoPlay
					loop
					// controls
					muted={true}
					// currentTime={scroll}
					src="/desktop.mp4"
					ref={videoRef}

					// src={windowWidth > 768 ? "/desktopcompress.mp4" : "/mobilecompress.mp4"}
				>
					Oops!... Twoja wyszukiwarka nie obsługuje tagu video :-/ Spróbuj
					otworzyć stronę w innej przeglądarce.
				</video>
				<a href="#more" className="main__header-more">
					<span className="main__see-more">Zobacz nasze nagrania</span>
					<MdKeyboardArrowDown />
				</a>
				{/* <p>PropWash</p> */}
			</div>
			<Shadow targetRef={videoRef} />
		</section>
	);
};

export default Video;
