import Nav from "../components/nav";
import Footer from "../components/footer";
import Categorys from "../components/Categorys";
import { useState } from "react";

const Home = () => {
	const [show, setShow] = useState(false);

	const toggleCategories = () => {
		setShow(!show);
	};

	return (
		<>
			{!show && <Nav />}
			<div
				style={{
					overflow: "hidden",
					maxHeight: show ? "100vh" : "0",
					transition: "max-height 1.5s",
				}}>
				{show && <Categorys />}
			</div>
			{!show && <Footer />}
			<button
				onClick={toggleCategories}
				style={{ position: "absolute", top: "25rem" }}>
				Show More
			</button>
		</>
	);
};

export default Home;
