import Nav from "../components/nav";
import Footer from "../components/footer";
import Categorys from "../components/Categorys";
import MainModule from "../components/main";
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
					overflow: "auto",
					height: show ? "100vh" : "0",
					transition: "height 1.5s",
				}}>
				{show && <Categorys />}
			</div>
			{!show && <MainModule toggleCategories={toggleCategories} />}
			{!show && <Footer />}
		
		</>
	);
};

export default Home;
