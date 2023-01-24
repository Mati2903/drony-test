import { useState, useEffect } from "react";

const Logo = ({ logoRef }) => {
	const [isVisible, setIsVisible] = useState(false);
	//effect for changing opacity depend on scroll value in half of video height
	useEffect(() => {
		const visibility = () => {
			if (window.scrollY > logoRef.current.clientHeight / 2) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", visibility);
		return () => {
			window.removeEventListener("scroll", visibility);
		};
	}, [isVisible]);
	return (
		<img
			src="/logo-fpv-white.png"
			alt=""
			className="company-name"
			style={isVisible ? { opacity: 1 } : { opacity: 0 }}
		/>
	);
};

export default Logo;
