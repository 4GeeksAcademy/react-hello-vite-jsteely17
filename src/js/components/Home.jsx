import React from "react";
import Nav from "./Nav";
import Jumbo from "./Jumbo";
import Cards from "./Cards";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <Nav/>
			<Jumbo/>
			<Cards/>
			<Footer/>
		</div>
	);
};

export default Home;