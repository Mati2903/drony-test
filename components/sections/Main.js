import ProgressBar from "../elements/ProgressBar";
import Video from "../sections/Video";
import WhatIsFPV from "../sections/WhatIsFPV";
import FPVFeatures from "./FPVFeatures";
import FPVApplication from "./FPVApplication";

const Main = () => {
	return (
		<main className="main">
			<ProgressBar />
			<section id="video" className="main__background-video">
				<Video />
			</section>
			<WhatIsFPV />
			<FPVFeatures />
			<FPVApplication />

			{/* <section id="drones" className="main__our-drones">
				Sprzęt typu jakie drony jaka kamera
			</section>
			<section id="offer" className="main__offer">
				Co jest w ofercie
			</section>
			<section id="certificates" className="main__certificates">
				Moze coś o uprawnieniach do latania
			</section>
			<section id="portfolio" className="main__portfolio">
				Jakieś portfolio albo firmy z którymi była współpraca
			</section>
			<section id="contact" className="main__contact">
				Może tutaj kontakt albo w footerze
			</section> */}
		</main>
	);
};

export default Main;

export async function getStaticProps() {
	const res = await fetch(`/api/hello`);
	const data = await res.json();

	console.log(data);

	return {
		props: { data },
		revalidate: 60,
	};
}
