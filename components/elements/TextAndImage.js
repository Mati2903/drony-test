import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const TextAndImage = ({
	title,
	paragraph,
	imgUrl,
	imgAlt,
	direction,
	id,
	img2Url,
}) => {
	const [scrollY, setScrollY] = useState(0);
	const [elementOffsetTop, setElementOffsetTop] = useState(0);
	const [ref, inView] = useInView({
		threshold: 0.5, // amount of image visible to start animation
	});

	//listening to scroll and save its value in the state
	useEffect(() => {
		function handleScroll() {
			setScrollY(window.scrollY);
			// state to get offset top value from every image container which is used in animation in switch-case function
			// querySelector for video class is checking the height of video section and is added to images offset
			setElementOffsetTop(
				document.getElementById(id).offsetTop +
					document.querySelector(".video").clientHeight
			);
		}

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrollY]);

	let animation;

	//two variables for transform effects "amount" - the bigger values are, the smaller transform is generated
	const translateDivider = 20;
	const rotationDivider = 150;

	// switch case instruction is for setting different animation properties depending on component ID passed in as a prop
	switch (id) {
		case 1:
			animation = {
				// this code is calculating translateY and rotate values to be always the same regardless of document height for different devices and image position on website - scrollY value is rising with scrolling down so dividing it with constant value gives larger and larger results for images which are lower than others
				y: (scrollY - elementOffsetTop) / translateDivider,
				rotate: (scrollY - elementOffsetTop) / rotationDivider,
			};
			break;
		case 2:
			animation = {
				y: (scrollY - elementOffsetTop) / translateDivider,
				rotate: -(scrollY - elementOffsetTop) / rotationDivider,
			};
			break;
		case 3:
			animation = {
				y: (scrollY - elementOffsetTop) / translateDivider,
				rotate: (scrollY - elementOffsetTop) / rotationDivider,
			};
			break;
		case 4:
			animation = {
				y: (scrollY - elementOffsetTop) / translateDivider,
				rotate: -(scrollY - elementOffsetTop) / rotationDivider,
			};
			break;
		default:
			animation = { y: 0, rotate: 0 };
	}

	return (
		<div
			className="text-image-container"
			style={{ flexDirection: direction }} //to change order of image and text - which element should be on the right and left - does not apply to mobile wiev
		>
			<motion.div
				className="text-container"
				ref={ref}
				transition={{ duration: 1 }}
				animate={inView ? { opacity: 1 } : { opacity: 0 }}
			>
				<h3 className="text-container__title">{title}</h3>
				<p className="text-container__paragraph">{paragraph}</p>
			</motion.div>
			<div className="img-container" id={id}>
				<motion.img
					// different style if there is another photo in image container
					style={img2Url ? { width: "70%", alignSelf: "flex-start" } : null}
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
							rotate: (-(scrollY - elementOffsetTop) / rotationDivider) * 1.2,
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
