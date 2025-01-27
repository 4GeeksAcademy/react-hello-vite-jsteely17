import React from "react";

const Nav = () => {
    return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid bg-black">
            <a class="navbar-brand text-white" href="#">Start Bootstrap</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                <a class="nav-link text-white" href="#">About</a>
                <a class="nav-link text-white" href="#">Services</a>
                <a class="nav-link text-white" href="#">Contact</a>
            </div>
            </div>
        </div>
    </nav>
    );
};

export default Nav;