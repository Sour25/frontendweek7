import React from "react";
import "./index.css";
import cakes from "./data";

const CakeCard = ({ cake }) => {
    return (
        <div className="card">
            <img src={cake.image} alt={cake.name} className="card-image" />
            <h2>{cake.name}</h2>
            <p className="type">{cake.type}</p>
            <p>{cake.description}</p>
        </div>
    );
};

const App = () => {
    return (
        <div className="app">
            <h1>Delicious Cakes 🍰</h1>
            <div className="card-container">
                {cakes.map((cake, index) => (
                    <CakeCard key={index} cake={cake} />
                ))}
            </div>
        </div>
    );
};

export default App;

