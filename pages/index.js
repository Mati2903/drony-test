import Nav from "../components/sections/Nav";
import Video from "../components/sections/Video";
import OurDrones from "../components/sections/OurDrones";
import WhatIsFPV from "../components/sections/WhatIsFPV";
import { ParallaxProvider } from "react-scroll-parallax";
import Portfolio from "../components/sections/Portfolio";

export default function Home() {
	return (
		<>
			<Nav />
			<Video />
			<ParallaxProvider>
				<WhatIsFPV />
			</ParallaxProvider>
			<OurDrones />
			<Portfolio />
		</>
	);
}
