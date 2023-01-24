import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Shadow from "../elements/Shadow";
import Logo from "../elements/Logo";

const Video = () => {
	const videoRef = useRef(null);
	const checkForMoreRef = useRef(null);
	const videoSectionRef = useRef(null);

	// const isInView = useInView(ref, { margin: "-300px" });

	// const animation = useAnimation();

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
		// const checkForMore = document.querySelector(".check-for-more");
		// const video = document.querySelector(".video-element");
		// const videoContainer = document.querySelector(".video__container");
		// const container = document.querySelector(".main__background-video");
		//rotate video on scroll
		// video.style.transform = `rotateX(${
		// 	(window.scrollY - video.offsetTop) / 5
		// }deg)`;

		// let video = document.querySelector(".video__element");
		// let container = document.querySelector(".video__container");

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
			if (!checkForMoreRef.current) return; //if its absent in DOM, return
			checkForMoreRef.current.style.opacity = "0";
			checkForMoreRef.current.style.pointerEvents = "none";
		} else {
			checkForMoreRef.current.style.opacity = "1";
			checkForMoreRef.current.style.pointerEvents = "all";
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// //testing effect for changing opacity depend on scroll value
	// useEffect(() => {
	// 	const visibility = () => {
	// 		if (window.scrollY > document.querySelector(".video").clientHeight / 2) {
	// 			setIsVisible(true);
	// 		} else {
	// 			setIsVisible(false);
	// 		}
	// 	};

	// 	window.addEventListener("scroll", visibility);
	// 	return () => {
	// 		window.removeEventListener("scroll", visibility);
	// 	};
	// }, [isVisible]);
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
		<section className="video" ref={videoSectionRef}>
			<div className="video__container">
				<video
					id="movie"
					className="video__element"
					autoPlay
					loop
					muted={true}
					src="/desktop.mp4"
					ref={videoRef}

					// src={windowWidth > 768 ? "/desktopcompress.mp4" : "/mobilecompress.mp4"}
				>
					Oops!... Twoja wyszukiwarka nie obsługuje tagu video :-/ Spróbuj
					otworzyć stronę w innej przeglądarce.
				</video>
				<a href="#more" className="check-for-more" ref={checkForMoreRef}>
					<span>Zobacz nasze nagrania</span>
					<MdKeyboardArrowDown />
				</a>
			</div>

			<Logo logoRef={videoSectionRef} />
			<Shadow targetRef={videoRef} />
		</section>
	);
};

export default Video;
