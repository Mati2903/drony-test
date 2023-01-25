import { useState, useEffect } from "react";
import ParallaxComp from "../elements/ParallaxComp";

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

	//set top value for section based on above section height
	// useEffect(() => {
	// 	const handleResize = () => {
	// 		setElementOffsetBottom(
	// 			document.querySelector(".our-drones").offsetTop +
	// 				document.querySelector(".our-drones").offsetHeight
	// 		);
	// 	};

	// 	//listener for window resize event, e.g. when user is changing view from portrait to landscape
	// 	window.addEventListener("scroll", handleResize);
	// 	window.addEventListener("resize", handleResize);
	// 	return () => {
	// 		window.removeEventListener("scroll", handleResize);
	// 		window.removeEventListener("resize", handleResize);
	// 	};
	// }, [elementOffsetBottom]);

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
					dzięki niewielkiej kamerze, która przesyła obraz na specjalne okulary
					lub ekran.
				</p>
				<ParallaxComp imgUrl="./landscape3.jpg" header="Napis" />
				<p className="what-is-fpv__paragraph">
					Dzięki naszym dronom FPV, jesteśmy w stanie sfilmować różnego rodzaju
					wydarzenia sportowe, reklamy, filmy dokumentalne, krajobrazy czy też
					wnętrza budynków. Nasze filmy są nie tylko estetyczne, ale również
					innowacyjne i oryginalne. Zapraszamy do skorzystania z naszych usług i
					dołączenia do grona zadowolonych klientów.
				</p>
				<p className="what-is-fpv__paragraph">
					W zależności od potrzeb oferujemy profesjonalną obróbkę materiału
					wideo w specjalistycznych programach graficznych, dzięki czemu nasze
					filmy są estetyczne i spełniają najwyższe standardy jakości.Możemy
					dostarczyć również surowy materiał video do dalszej obróbki przez
					klienta.
				</p>
				<h3 className="what-is-fpv__subtitle">Czym wyróżniają się drony FPV</h3>
				<p className="what-is-fpv__paragraph">
					Drony FPV oferują wiele korzyści w porównaniu do zwykłych dronów.
					Przede wszystkim pozwalają na bardziej precyzyjne i dynamiczne ujęcia,
					co jest szczególnie ważne w przypadku filmowania sportów czy akrobacji
					lotniczych. Dodatkowo, drony FPV są zwykle mniejsze i lżejsze, co
					pozwala na lot w trudno dostępnych miejscach czy też w pobliżu ludzi i
					obiektów.
				</p>
			</div>
			<div></div>
		</section>
	);
};

export default WhatIsFPV;
