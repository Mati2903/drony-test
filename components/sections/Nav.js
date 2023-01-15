import Link from "next/link";
import ContactBtn from "../elements/ContactBtn";

const Nav = () => {
	return (
		<nav className="nav">
			<Link href="/">
				<img src="/logo-fpv-white.png" alt="" className="nav__logo" />
			</Link>
			<ul>
				<li>
					<ContactBtn />
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
