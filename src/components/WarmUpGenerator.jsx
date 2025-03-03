import React from "react";
import { fiveExercsises } from "../randomGenerator";
function WarmUpGenerator() {
    return (
        <div>
            <h2>Warm Up Generator</h2>
            {Object.entries(fiveExercsises).map(([category, exercises]) => (
                <div key={category}>
                    <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <ul>
                        {exercises.map((exercise, index) => (
                            <li key={index}>{exercise.exercise}</li> // Adjust this if exercise is an object
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default WarmUpGenerator;