import Link from "next/link";
import ContactBtn from "../elements/ContactBtn";

const Nav = () => {
	return (
		<nav className="nav">
			<Link href="/">
				<img src="/logo-fpv-white.png" alt="" className="nav__logo" />
			</Link>
			<div className="nav__btn-container">
				<ContactBtn />
			</div>
		</nav>
	);
};

export default Nav;
