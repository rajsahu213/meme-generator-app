import React from "react";
import "./Meme.css";

const Meme = (props) => {
    return (
        <div className="meme">
            <img
                src={props.imageUrl}
                className="meme--image"
                alt="Random Meme"
            />
            <h2 className="meme--text top">{props.topText}</h2>
            <h2 className="meme--text bottom">{props.bottomText}</h2>
        </div>
    );
};

export default Meme;
