import React from "react";
import "./Meme.css";

const Meme = () => {
    return (
        <div className="meme">
            <form action="" className="meme-form">
                <div className="inputs">
                    <input type="text" placeholder="Top text" />
                    <input type="text" placeholder="Bottom text" />
                </div>
                <button type="submit">Get a new meme image 🖼</button>
            </form>
        </div>
    );
};

export default Meme;
