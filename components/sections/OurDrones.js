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
				title="Dron 5” Freestyle"
				paragraph="Ten typ drona wykorzystujemy do nagrywania dynamicznych scen na wolnym powietrzu. Pozwala on na wykonywanie różnego rodzaju akrobacji oraz lot za samochodami czy motocyklami. Korzystamy z niego również do filmowania widokowych ujęć w pobliżu budynków lub innych dużych obiektów."
				imgUrl="/dron-5-freestyle.png"
				imgAlt="zdjęcie drona typu FPV 5 cali freestyle"
				id={1}
			/>
			<TextAndImage
				title="Dron 3,5” CineWhoop"
				paragraph="Ten dron pozwala nam na płynne i bezpieczne przeloty w pobliżu ludzi lub prezentowanych obiektów. Świetnie sprawdza się przy nagrywaniu scen typu cinematic lub tworzeniu tak zwanych spacerów po dużych obiektach. Zapewnia on bardzo stabilny i płynny materiał wideo."
				imgUrl="/dron-3,5-cinewhoop.png"
				imgAlt="zdjęcie drona typu FPV 3,5 cala cinewhoop"
				id={2}
			/>
			<TextAndImage
				title="Dron 2,5” Mini CineWhoop"
				paragraph="Ten mały i lekki dron jest idealny do latania i filmowania wewnątrz pomieszczeń, w pobliżu drogich przedmiotów czy też latając bardzo blisko ludzi. Dzięki jego niewielkim gabarytom i wadze jest on bardzo precyzyjny. Wykonujemy nim między innymi przeloty przez całe obiekty, a nawet wnętrza samochodów"
				imgUrl="/dron-2,5-mini-cinewhoop.png"
				imgAlt="zdjęcie drona typu FPV 2,5 cala mini cinewhoop"
				id={3}
			/>
			<TextAndImage
				title="Kamery"
				paragraph="
				Nasze niezwykłe ujęcia i dynamiczne sceny nagrywamy kamerami GoPro serii 10 i 11. Pozwalają one na zapis obrazu w rozdzielczościach 5.3k, 4k, 2.7k, a także w dowolnym klatkażu i 10-bitowym systemie kolorów. Dzięki nim mamy pewność, że każdy nagrany przez nas materiał będzie wyglądał profesjonalnie i będzie miał wysoką jakość."
				imgUrl="/gopro11.png"
				imgAlt="zdjęcie kamery gopro 11"
				id={4}
				img2Url="/gopro11.png"
			/>
		</section>
	);
};

export default OurDrones;
