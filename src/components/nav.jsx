import "../styles/nav.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/init";
import Banano from "../assests/Banano.svg";
import AuthButtons from "../auth/AuthButtons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ cat }) => {
	const [user] = useAuthState(auth);
	const [userName, setUserName] = useState("");
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsVisible(true);
		}, 300);

		return () => clearTimeout();
	}, []);

	useEffect(() => {
		if (user) {
			const displayName = user.displayName || user.email[0].toUpperCase();
			setUserName(displayName);
		} else {
			setUserName("Who is Knocking?");
		}
	}, [user]);

	return (

		<div className={`nav-container ${isVisible ? "slide-in" : ""}`}>
			<nav className="navbar navbar-expand-lg sticky-top">
				<div
					className="navbar-container container-fluid">
					<figure id="img-wrapper">
						<img
							src={Banano}
							alt="banano"
							width={80}
							height={100}
							id="banano"
						/>
						<span className="greet"><Link to='/'>Home</Link></span>
					</figure>
					<h1 className="nav-title">{cat ? `${cat}` : "BananaScript"}</h1>
					<div className="" id="btn">
						<AuthButtons />
					</div>
				</div>
			</nav>
		</div>

	);
};

export default Nav;
