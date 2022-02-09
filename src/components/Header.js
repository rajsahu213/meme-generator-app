import React from "react";
import trollFace from "../images/troll-face.png";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header-main">
                <img src={trollFace} alt="Troll Face" height="50px" />
                <h1>Meme Generator</h1>
            </div>
            <p>React Course - Project 3</p>
        </header>
    );
};

export default Header;
