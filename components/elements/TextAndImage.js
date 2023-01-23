import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";

const TextAndImage = ({ title, paragraph, imgUrl, imgAlt, id, img2Url }) => {
	const [scrollY, setScrollY] = useState(0);
	const [elementOffsetTop, setElementOffsetTop] = useState(0);
	const [inViewRef, inView] = useInView({
		threshold: 0.5, // amount of element visible to start animation; in this case it is text container
	});

	const imgContainerRef = useRef(); //ref for img-container
	let animation;
	//listening to scroll and save its value in the state
	useEffect(() => {
		function handleScroll() {
			// state to get offset top value from every image container which is used in animation in switch-case function
			setScrollY(window.scrollY);
			// querySelector for video class is checking the height of video section and is added to images offset
			setElementOffsetTop(
				imgContainerRef.current.offsetTop +
					document.querySelector(".video").clientHeight
			);
		}

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrollY]);

	//two variables for transform effects "amount" - the bigger values are, the smaller transform is generated
	const translateDivider = 20;
	const rotationDivider = 150;

	//check if id is even or odd and change rotation direction +/-. Remember to check animation direction for img2 element if present
	id % 2 == 0
		? //even
		  (animation = {
				y: (scrollY - elementOffsetTop) / translateDivider,
				rotate: -(scrollY - elementOffsetTop) / rotationDivider,
		  })
		: //odd
		  (animation = {
				y: (scrollY - elementOffsetTop) / translateDivider,
				rotate: (scrollY - elementOffsetTop) / rotationDivider,
		  });

	return (
		<div className="text-image-container">
			<motion.div
				className="text-container"
				ref={inViewRef}
				transition={{ duration: 1 }}
				//text opacity animation
				animate={inView ? { opacity: 1 } : { opacity: 0 }}
			>
				<h3 className="text-container__title">{title}</h3>
				<p className="text-container__paragraph">{paragraph}</p>
			</motion.div>
			<div className="img-container" id={id} ref={imgContainerRef}>
				<motion.img
					// different style if there is another photo in image container
					style={img2Url ? { width: "70%", alignSelf: "flex-start" } : null}
					src={imgUrl}
					alt={imgAlt}
					initial={{ y: 0, rotate: 0 }}
					//image animation
					animate={animation}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 30,
						restDelta: 0.001,
					}}
				/>
				{/* if there is another image code below is executing */}
				{img2Url ? (
					<motion.img
						style={{ width: "70%", alignSelf: "flex-end" }}
						src={img2Url}
						initial={{ y: 0, rotate: 0 }}
						//different animation values to create 3d effect
						animate={{
							y: ((scrollY - elementOffsetTop) / translateDivider) * 1.5,
							rotate:
								(-(scrollY - elementOffsetTop) / rotationDivider) *
								(id % 2 == 0 ? 1.2 : -1.2),
						}}
						transition={{
							type: "spring",
							stiffness: 100,
							damping: 30,
							restDelta: 0.001,
						}}
					/>
				) : null}
			</div>
		</div>
	);
};

export default TextAndImage;
