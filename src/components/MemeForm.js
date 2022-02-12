import React from "react";
import "./MemeForm.css";

const MemeForm = (props) => {
    const { topText, bottomText } = props;
    const handleChange = (event) => {
        const { name, value } = event.target;
        props.onChange(name, value);
    };
    const handleClick = (event) => {
        event.preventDefault();
        props.onSubmit();
    };
    return (
        <form className="meme-form" onSubmit={handleClick}>
            <div className="inputs">
                <input
                    type="text"
                    placeholder="Top text"
                    value={topText}
                    name="topText"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    value={bottomText}
                    name="bottomText"
                    onChange={handleChange}
                />
            </div>
            <button>Get a new meme image 🖼</button>
        </form>
    );
};

export default MemeForm;
