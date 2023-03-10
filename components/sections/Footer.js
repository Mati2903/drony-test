import { useState, useEffect } from "react";
import { BsTelephone, BsFacebook, BsYoutube } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
	const [offsetTop, setOffsetTop] = useState();
	const year = new Date().getFullYear();

	//set initial offset top value after first render
	useEffect(() => {
		setOffsetTop(
			document.querySelector(".nav").offsetHeight +
				document.querySelector(".video").offsetHeight +
				document.querySelector(".what-is-fpv").offsetHeight +
				document.querySelector(".our-drones").offsetHeight +
				document.querySelector(".portfolio").offsetHeight
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
					document.querySelector(".what-is-fpv").offsetHeight +
					document.querySelector(".our-drones").offsetHeight +
					document.querySelector(".portfolio").offsetHeight
			);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [offsetTop]);

	return (
		<footer className="footer" style={{ top: offsetTop }}>
			<h2 className="footer__header">
				Zachęcamy do kontaktu i obserwowania naszego profilu w mediach
				społecznościowych
			</h2>
			<div className="footer__container">
				<div className="footer__company-info">
					{/* <p className="footer__column-title">Dane Firmy</p> */}
					<address>
						<Link href="/">
							<img
								src="/logo-fpv-white.png"
								alt="logo firmy z nazwą Propwash i literą S ze strzałką"
								className="footer__logo"
							/>
						</Link>
						<p>Jabłonna Pierwsza 138</p>
						<p>23-114 Jabłonna, Polska</p>
						<p>NIP: 7133015122</p>
					</address>
				</div>
				<div className="footer__contact">
					<p className="footer__column-title">Kontakt</p>
					<a href="tel:+48662038866">
						<BsTelephone />
						+48 662 038 866
					</a>
					<a href="mailto:propwash.info@gmail.com">
						<MdAlternateEmail />
						propwash.info@gmail.com
					</a>
				</div>

				<div className="footer__company-socials">
					<p className="footer__column-title">Social media</p>
					<a
						href="https://www.facebook.com/people/Propwash-Nagrania-Dronem-FPV/100089365263051/"
						target="_blank"
						rel="noreferrer"
					>
						<BsFacebook />
						PROPWASH na Facebooku
					</a>
					<a
						href="https://www.youtube.com/@propwash"
						target="_blank"
						rel="noreferrer"
					>
						<BsYoutube />
						PROPWASH na YouTube
					</a>
				</div>
			</div>
			<p className="footer__copyright">Copyright © {year} | PROPWASH</p>
		</footer>
	);
};

export default Footer;
