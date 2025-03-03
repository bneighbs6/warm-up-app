import React from "react";
import { fiveExercsises } from "../randomGenerator"; // Need to adjust the algorithm to get random warm ups

function WarmUpGenerator() {
    return (
        <div>
            <h2>Warm Up Generator</h2>
            {Object.entries(fiveExercsises).map(([category, exercises]) => (
                <div key={category}>
                    <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <ul>
                        {exercises.map((exercise, index) => ( // Maps the exercise array taken from Object.entries(fiveExercises)
                            <li key={index}>{exercise.exercise}</li> // {exercise.exercise} takes the exercise from data folders and displays to f/e
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default WarmUpGenerator;