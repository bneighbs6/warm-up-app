// WarmUpGenerator.jsx

import React, { useState } from "react";
import { generateFiveExercises } from "../randomGenerator";

function WarmUpGenerator() {
    const [exercises, setExercises] = useState(null); // Initialize to null

    const handleRandomize = () => {
        setExercises(generateFiveExercises());
    };

    return (
        <div>
            <h2>Warm Up Generator</h2>
            <button 
            onClick={handleRandomize}
            >Randomize Exercises</button>
            {exercises ? ( // Check if exercises is not null
                Object.entries(exercises).map(([category, exerciseList]) => (
                    <div key={category}>
                        {/* Displays each Category of Warm Up */}
                        <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3> 
                        <ul>
                            {exerciseList.map((exercise, index) => (
                                <li key={index}>{exercise.exercise}</li> // Displays each exercise -> gotten from exercise data in the data folder
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>Welcome to THE Warm Up App. Click the button to randomize!</p> // Message when exercises are null
            )}
        </div>
    );
}

export default WarmUpGenerator;