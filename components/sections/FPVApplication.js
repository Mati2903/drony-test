import TextAndImage from "../elements/TextAndImage";
const FPVApplication = () => {
	return (
		<section id="fpv-application">
			<TextAndImage
				title="GDZIE ZNAJDUJĄ ZASTOSOWANIE DRONY FPV"
				// 				paragraph="Drony FPV znajdują zastosowanie przede wszystkim w:
				// - prezentacji nieruchomości i ogrodów
				// - reklamach restauracji, hoteli, siłowni, salonów samochodowych i wiele innych.
				// - nagrywaniu specjalnych wydarzeń takich jak eventy, koncerty czy też wydarzenia okolicznościowe
				// - nagrywaniu scen za dynamicznie przemieszczającymi się obiektami jak na przykład samochody, motocykle…
				// Jest to również świetne urozmaicenie materiału filmowego rejestrowanego „z ziemi”.
				// "
				paragraph={
					<ul>
						Drony FPV znajdują zastosowanie przede wszystkim w:
						<li>prezentacji nieruchomości i ogrodów,</li>
						<li>
							reklamach restauracji, hoteli, siłowni, salonów samochodowych i
							wiele innych,
						</li>
						<li>
							nagrywaniu specjalnych wydarzeń takich jak eventy, koncerty czy
							też wydarzenia okolicznościowe,
						</li>
						<li>
							nagrywaniu scen za dynamicznie przemieszczającymi się obiektami
							jak na przykład samochody, motocykle, rowery itp.
						</li>
						Jest to również świetne urozmaicenie materiału filmowego
						rejestrowanego „z ziemi”.
					</ul>
				}
				imgUrl="/dron-5-freestyle.png"
				imgAlt="zdjęcie drona freestyle"
			/>
		</section>
	);
};

export default FPVApplication;
