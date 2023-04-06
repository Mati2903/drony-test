import "../styles/globals.scss";
//title should be here, not in _document - refer to nextjs docs (https://nextjs.org/docs/messages/no-document-title)
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>PROPWASH - Profesjonalne nagrania dronami FPV</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
