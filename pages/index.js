import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

export default function Home() {
	return (
		<>
			<Loader />
			<Nav />
			<Main />
		</>
	);
}
