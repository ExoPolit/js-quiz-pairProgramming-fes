import { useEffect, useState } from 'react';
import '../styles/footer.css';

const Footer = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsVisible(true);
		}, 300);

		return () => clearTimeout();
	}, []);

	return (

		<div className={`footer-container ${isVisible ? "slide-in" : ""}`}>
			<footer className="container sticky-bottom" >
				<div className="" id="footer-content">
					<a href="#" className="m-4">About</a>
					<a href="#" className="">Contact</a>
				</div>
			</footer>
		</div>


	)
}

export default Footer;