import TextAndImage from "../elements/TextAndImage";

const OurDrones = () => {
	return (
		<section className="our-drones">
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
				direction="row-reverse"
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
				title="Urządzenia nagrywające"
				paragraph="Kamery zamontowane na dronach to GoPro 11 oraz GoPro 10. Umożliwiają one zapis obrazu w formacie 5,3k - 4k – 2,7k w dowolnym klatkażu oraz w 10 bitowym systemie kolorów."
				imgUrl="/gopro11.png"
				imgAlt="zdjęcie kamery gopro 11"
				direction="row-reverse"
				id={4}
				img2Url="/gopro11.png"
			/>
		</section>
	);
};

export default OurDrones;
