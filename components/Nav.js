import Link from "next/link";

const Nav = () => {
	return (
		<nav className="nav">
			<Link href="/">
				<img src="/logo-fpv-white.png" alt="" className="nav__logo" />
			</Link>
			<ul>
				<li>
					<Link href="#contact">
						<button className="nav__contact-btn">KONTAKT</button>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
