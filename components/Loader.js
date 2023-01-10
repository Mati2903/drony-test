import { TbDrone } from "react-icons/tb";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Loader = () => {
	// const router = useRouter();
	// const [loading, setLoading] = useState(false);

	// useEffect(() => {
	// 	const handleStart = (url) => url !== router.asPath && setLoading(true);
	// 	const handleComplete = (url) => url === router.asPath && setLoading(false);

	// 	router.events.on("routeChangeStart", handleStart);
	// 	router.events.on("routeChangeComplete", handleComplete);
	// 	router.events.on("routeChangeError", handleComplete);
	// 	return () => {
	// 		router.events.off("routeChangeStart", handleStart);
	// 		router.events.off("routeChangeComplete", handleComplete);
	// 		router.events.off("routeChangeError", handleComplete);
	// 	};
	// });

	const [loading, setLoading] = useState(true);

	//timeout for loader to load content on the page and DOM content
	setTimeout(() => {
		setLoading(false);
	}, 3000);

	useEffect(() => {
		const loader = document.querySelector(".loader");
		if (!loading && document.readyState === "complete") {
			loader.style.top = "-100%";
		}
	});

	return (
		<div className="loader">
			<div className="loader__icon">
				<TbDrone />
				<p>Loading...</p>
			</div>
		</div>
	);
};

export default Loader;
