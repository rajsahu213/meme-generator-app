import React from "react";
import "./App.css";
import Header from "./components/Header";
import MemeForm from "./components/MemeForm";
import Meme from "./components/Meme";

function App() {
    const initFormData = {
        topText: "",
        bottomText: "",
        imageUrl: "https://i.imgflip.com/1g8my4.jpg",
    };

    const [formData, setFormData] = React.useState(initFormData);
    const [allMemeImages, setAllMemeImages] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((response) => response.json())
            .then((apiData) => setAllMemeImages(apiData.data.memes));
    }, []);

    const handleChange = (name, value) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    };

    const handleSubmit = () => {
        const randIndex = Math.floor(Math.random() * allMemeImages.length);
        handleChange("imageUrl", allMemeImages[randIndex].url);
    };

    return (
        <div>
            <Header />
            <div className="main-content">
                <MemeForm
                    topText={formData.topText}
                    bottomText={formData.bottomText}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
                <Meme
                    imageUrl={formData.imageUrl}
                    topText={formData.topText}
                    bottomText={formData.bottomText}
                />
            </div>
        </div>
    );
}

export default App;
