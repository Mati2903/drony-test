import Nav from "../components/sections/Nav";
import Main from "../components/sections/Main";
import Footer from "../components/sections/Footer";
import Loader from "../components/elements/Loader";
import { useEffect, useState } from "react";

export default function Home() {
	return (
		<>
			{/* <Loader /> */}
			<Nav />
			<Main />
		</>
	);
}
