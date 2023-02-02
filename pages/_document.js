import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="pl">
			<Head>
				{/* <link rel="canonical" href="url strony" />
				 */}
				{/* change to index,follow in production */}
				<meta name="robots" content="noindex,nofollow" />
				<meta property="og:locale" content="pl_PL" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Profesjonalne nagrania dronami FPV"
				/>
				<meta
					property="og:description"
					content="Firma PROPWASH specjalizuje się w filmowaniu dronami FPV. Oferujemy wysokiej jakości usługi filmowe dla klientów indywidualnych i biznesowych."
				/>
				<meta
					name="description"
					content="Firma PROPWASH specjalizuje się w filmowaniu dronami FPV. Oferujemy wysokiej jakości usługi filmowe dla klientów indywidualnych i biznesowych."
				/>
				{/* <meta property="og:url" content="url strony" /> */}
				<meta property="og:site_name" content="PROPWASH FPV" />
				<meta
					name="keywords"
					content="fpv, nagrania fpv, nagrania dronem, filmy dronem, filmy z drona, nagrania z drona, filmy z drona fpv, filmy fpv, filmowanie fpv, usługi dronem, usługi filmowania dronem, profesjonalne usługi filmowania dronem, profesjonalne filmy z drona fpv, nagrania i montaż filmów z drona, drony first person view, Lublin, lubelskie, podkarpackie, Rzeszów, Kraków, mazowieckie, Warszawa"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Quicksand:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
