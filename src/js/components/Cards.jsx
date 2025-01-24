import React from "react";
import pracImage from "../../img/prac.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";


const Cards = () => {
    return (
    <div className="container">
        <div className="card_container">
            <div className="card">
                <div className="img_container">   
                    <img src={pracImage}></img>
                </div>
                <div className="card_text">
                    <h2 className="card_title">Card Title</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim vitae ipsam itaque?</p>
                </div>
                <div className="btn_background">
                    <button type="button" class="btn btn-primary">Find Out More!</button>
                </div>
            </div>
            <div className="card">
                <div className="img_container">
                <img src={pracImage}></img>
                </div>
                <h2 className="card_title">Card Title</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim vitae ipsam itaque?</p>
                <div className="btn_background">
                    <button type="button" class="btn btn-primary">Find Out More!</button>
                </div>
            </div>
            <div className="card">
                <div className="img_container">
                <img src={pracImage}></img>
                </div>
                <h2 className="card_title">Card Title</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim vitae ipsam itaque?</p>
                <div className="btn_background">
                    <button type="button" class="btn btn-primary">Find Out More!</button>
                </div>
            </div>
            <div className="card">
                <div className="img_container">
                <img src={pracImage}></img>
                </div>
                <h2 className="card_title">Card Title</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim vitae ipsam itaque?</p>
                <div className="btn_background">
                    <button type="button" class="btn btn-primary">Find Out More!</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Cards;