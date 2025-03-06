import React from "react";
import "./index.css";
import data from "./data";

const Card = ({ person }) => {
    return (
        <div className="card">
            <img src={person.image} alt={person.name} className="card-image" />
            <h2>{person.name}</h2>
            <p>{person.class}</p>
            <p>{person.hobbies}</p>
        </div>
    );
};

const App = () => {
    return (
        <div className="app">
            {data.map((person, index) => (
                <Card key={index} person={person} />
            ))}
        </div>
    );
};

export default App;

