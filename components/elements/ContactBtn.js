import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const ContactBtn = () => {
	const [open, setOpen] = useState(false); // state of the button

	//handle opening and closing button after click
	useEffect(() => {
		const contactBtn = document.querySelector(".nav__contact-btn");
		const closeBtn = document.querySelector(".nav__contact-group-close");
		const section = document.querySelector(".video");

		const handleContactOpen = () => {
			setOpen(true);
		};

		const handleContactClose = () => {
			setOpen(false);
		};

		contactBtn.addEventListener("click", handleContactOpen);
		closeBtn.addEventListener("click", handleContactClose);
		section.addEventListener("click", handleContactClose);
		//for accessibility purposes
		contactBtn.addEventListener("focus", handleContactOpen);
		closeBtn.addEventListener("keydown", handleContactClose);

		return () => {
			contactBtn.removeEventListener("click", handleContactOpen);
			closeBtn.removeEventListener("click", handleContactClose);
			section.removeEventListener("click", handleContactClose);
			contactBtn.removeEventListener("focus", handleContactOpen);
			closeBtn.removeEventListener("keydown", handleContactClose);
		};
	}, [open]);

	return (
		<div className={`nav__contact-list ${open ? "open" : ""}`}>
			<button className="nav__contact-btn" tabIndex={0}>
				KONTAKT
			</button>
			<div className="nav__contact-group">
				<a href="tel:+48662038866">
					<BsTelephone />
					+48 662 038 866
				</a>
				<a href="mailto:propwash.info@gmail.com">
					<MdAlternateEmail />
					propwash.info@gmail.com
				</a>
				<div className="nav__contact-group-close" tabIndex={0}>
					<GrClose />
				</div>
			</div>
		</div>
	);
};

export default ContactBtn;
