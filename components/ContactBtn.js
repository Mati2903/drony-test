import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const ContactBtn = () => {
	const handleBtnClick = () => {
		document.querySelector(".nav__contact-list").classList.toggle("open");
	};

	useEffect(() => {
		document
			.querySelector(".nav__contact-list")
			.addEventListener("click", () => {
				document.querySelector(".nav__contact-list").classList.remove("open");
			});
	});

	return (
		<div className="nav__contact-list">
			<button className="nav__contact-btn" onClick={handleBtnClick}>
				KONTAKT
			</button>
			<div className="nav__contact-group">
				<a href="tel:123-456-7890">
					<BsTelephone />
					123-456-7890
				</a>
				<a href="mailto:mail@test.pl">
					<MdAlternateEmail />
					info@propwash.com
				</a>
				<div className="nav__contact-group-close">
					<GrClose />
				</div>
			</div>
		</div>
	);
};

export default ContactBtn;
