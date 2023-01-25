import TextAndImage from "../elements/TextAndImage";
import { useState, useEffect } from "react";

const OurDrones = () => {
	const [offsetTop, setOffsetTop] = useState();

	//set initial offset top value after first render
	useEffect(() => {
		setOffsetTop(
			document.querySelector(".nav").offsetHeight +
				document.querySelector(".video").offsetHeight +
				document.querySelector(".what-is-fpv").offsetHeight
		);
	}, []);

	//change offset top value if window is resized
	useEffect(() => {
		//function for event listeners on resize event - if window is resized section top value is updating
		const handleResize = () => {
			setOffsetTop(
				//video section height
				document.querySelector(".nav").offsetHeight +
					document.querySelector(".video").offsetHeight +
					document.querySelector(".what-is-fpv").offsetHeight
			);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [offsetTop]);

	return (
		<section className="our-drones" style={{ top: offsetTop }}>
			<h2 className="our-drones__title">Sprzęt na którym pracujemy</h2>
			<TextAndImage
				title="Dron 5” freestyle"
				paragraph="Jest to dron, który pozwala na nagrywanie niezwykle dynamicznych scen, głównie na wolnym powietrzu, wykonując w locie różnego rodzaju akrobacje lub latając za samochodami czy też motocyklami. Można nim wykonać również widokowe ujęcia w pobliżu budynków lub innych dużych obiektów."
				imgUrl="/dron-5-freestyle.png"
				imgAlt="zdjęcie drona typu FPV 5 cali freestyle"
				id={1}
			/>
			<TextAndImage
				title="Dron 3,5” cinewhoop"
				paragraph="Jest to dron pozwalający na płynne i bezpieczne przeloty w pobliżu ludzi lub innych prezentowanych obiektów. Świetnie sprawdza się przy nagrywaniu scen typu cinematic lub tworzeniu tak zwanych spacerów po dużych obiektach. Zapewnia bardzo stabilny i płynny materiał wideo."
				imgUrl="/dron-3,5-cinewhoop.png"
				imgAlt="zdjęcie drona typu FPV 3,5 cala cinewhoop"
				id={2}
			/>
			<TextAndImage
				title="Dron 2,5” mini cinewhoop"
				paragraph="Ten typ drona jest idealny do latania i filmowania wewnątrz pomieszczeń, w pobliżu drogich przedmiotów czy też latając bardzo blisko ludzi. Wykonuje się nim też przeloty przez całe obiekty, a nawet wnętrza samochodów. Jego niewielkie gabaryty i waga powodują, że jest on bardzo precyzyjny."
				imgUrl="/dron-2,5-mini-cinewhoop.png"
				imgAlt="zdjęcie drona typu FPV 2,5 cala mini cinewhoop"
				id={3}
			/>
			<TextAndImage
				title="Kamery"
				paragraph="Urządzenia do nagrywania zamontowane na dronach to kamery GoPro serii 10 i 11. Umożliwiają one zapis obrazu w rozdzielczościach 5,3k - 4k – 2,7k w dowolnym klatkażu oraz w 10-bitowym systemie kolorów."
				imgUrl="/gopro11.png"
				imgAlt="zdjęcie kamery gopro 11"
				id={4}
				img2Url="/gopro11.png"
			/>
		</section>
	);
};

export default OurDrones;
