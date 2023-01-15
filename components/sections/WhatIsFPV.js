import Image from "next/image";
import TextAndImage from "../elements/TextAndImage";

const WhatIsFPV = () => {
	return (
		<section id="what-is-fpv">
			<TextAndImage
				title="CZYM SĄ DRONY FPV"
				paragraph="Drony FPV (First Personal View) to bezzałogowe statki powietrzne, które wyposażone są w system przesyłania wizji bezpośrednio z drona. Odbywa się to poprzez kamerę zainstalowaną na dronie, która następnie przekazuje obraz przy pomocy nadajnika do specjalnych gogli. Dzięki temu operator drona widzi dokładnie to co „widzi” dron."
				imgUrl="/gopro11.png"
				imgAlt="zdjęcie kamery gopro 11"
			/>
		</section>
	);
};

export default WhatIsFPV;
