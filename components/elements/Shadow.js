// import { useState, useEffect } from "react";

const Shadow = ({ targetRef }) => {
	// const [shadowOpacity, setShadowOpacity] = useState(0);

	// useEffect(() => {
	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, [targetRef]);

	// const handleScroll = () => {
	// 	const target = targetRef.current;
	// 	if (!target) return;
	// 	const top = window.scrollY;
	// 	const videoHeight =
	// 		document.querySelector(".video__container").clientHeight;
	// 	setShadowOpacity(top > 600 ? Math.min(top / videoHeight / 3, 1) : 0);
	// };

	// const shadowStyle = {
	// 	position: "fixed",
	// 	top: 0,
	// 	left: 0,
	// 	right: 0,
	// 	bottom: 0,
	// 	background: `rgba(0,0,0, ${shadowOpacity})`,
	// };

	return <div className="shadow" />;
};

export default Shadow;
