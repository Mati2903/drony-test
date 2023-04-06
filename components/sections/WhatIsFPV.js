import { useState, useEffect } from "react";
import ParallaxComp from "../elements/ParallaxComp";
import CompareSlider from "../elements/CompareSlider";

const WhatIsFPV = () => {
	const [offsetTop, setOffsetTop] = useState();

	//set initial offset top value after first render
	useEffect(() => {
		setOffsetTop(
			document.querySelector(".nav").offsetHeight +
				document.querySelector(".video").offsetHeight
		);
	}, []);

	//change offset top value if window is resized
	useEffect(() => {
		//function for event listeners on resize event - if window is resized section top value is updating
		const handleResize = () => {
			setOffsetTop(
				//video section height
				document.querySelector(".nav").offsetHeight +
					document.querySelector(".video").offsetHeight
			);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [offsetTop]);

	return (
		<section
			id="what-is-fpv"
			className="what-is-fpv"
			style={{ top: offsetTop }}
		>
			<h2 className="what-is-fpv__title">Czym się zajmujemy</h2>
			<div className="what-is-fpv__paragraph-container">
				<p className="what-is-fpv__paragraph">
					Nasza firma specjalizuje się w filmowaniu za pomocą dronów FPV, czyli
					First Person View. Drony te pozwalają na lot widziany oczami pilota
					dzięki dodatkowej niewielkiej kamerze, która przesyła obraz na
					specjalne okulary lub ekran.
				</p>
				<ParallaxComp
					bgImgUrl="./landscape2.jpg"
					childImgUrl="./fpvdrone.png"
				/>
				<h3 className="what-is-fpv__subtitle">Profesjonalne nagrania</h3>
				<p className="what-is-fpv__paragraph">
					W naszych dronach korzystamy z najwyższej jakości komponentów i kamer
					renomowanych producentów. Sprzęt jest również na bieżąco
					modernizowany, co pozwala nam na ciągłe ulepszanie jakości naszych
					nagrań. <br />
					Dzięki temu jesteśmy w stanie sfilmować różnego rodzaju wydarzenia
					sportowe, reklamy, filmy dokumentalne, krajobrazy czy też wnętrza
					budynków w profesjonalny i unikatowy sposób.
				</p>
				<ParallaxComp bgImgUrl="./drift.jpg" />
				<h3 className="what-is-fpv__subtitle">Montaż filmów</h3>
				<p className="what-is-fpv__paragraph">
					W zależności od potrzeb oferujemy obróbkę materiału wideo w
					specjalistycznych programach graficznych, dzięki czemu nasze filmy są
					estetyczne i spełniają najwyższe standardy jakości a klient otrzymuje
					gotowe do użycia nagranie.
					<br />
					Możemy dostarczyć również surowy materiał wideo do dalszej obróbki we
					własnym zakresie.
				</p>

				<ParallaxComp bgImgUrl="./desk.jpg" />
				<CompareSlider />
				<h3 className="what-is-fpv__subtitle">Dlaczego FPV ?</h3>
				<p className="what-is-fpv__paragraph">
					Drony FPV oferują wiele korzyści w porównaniu do tradycyjnych dronów.
					Przede wszystkim pozwalają na bardziej precyzyjne i dynamiczne ujęcia.
					Są również mniejsze i lżejsze, co umożliwia lot w trudno dostępnych
					miejscach, w pobliżu ludzi i obiektów.
					<br /> Dzięki temu jesteśmy w stanie zapewnić naszym klientom filmy o
					najwyższej jakości, zrealizowane z zupełnie nowej perspektywy.
					<br />
					Zapraszamy do skorzystania z naszych usług i dołączenia do grona
					zadowolonych klientów.
				</p>
				<ParallaxComp bgImgUrl="./fpvset.png" />
			</div>
			<div></div>
		</section>
	);
};

export default WhatIsFPV;
