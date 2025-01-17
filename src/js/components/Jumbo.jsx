import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbo = () => {
    return (
    <div className="container">
        <div className="jumbo_background">
        <h1 className="title">A Warm Welcome!</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur vitae voluptate numquam? Reiciendis deleniti voluptas dignissimos quisquam quaerat consequuntur rem dolores aliquam fugiat aliquid est assumenda ex, alias ut!</p>
        <button type="button" class="btn btn-primary">Call to action!</button>
        </div>
    </div>
    );
};

export default Jumbo;