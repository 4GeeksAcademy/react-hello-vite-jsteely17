import React from "react";
import Nav from "./Nav";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <Nav/>
		</div>
	);
};

export default Home;