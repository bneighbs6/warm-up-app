import React, { useState } from "react";
import { generateThreeByThreeWarmUp, generateThreeByFourWarmUp, generateThreeByFiveWarmUp } from "../randomGenerator";
import WarmUpCard from "./WarmUpCard";

function WarmUpGenerator() {
    const [exercises, setExercises] = useState(null); // Initialize to null

    const handleFiveRandomize = () => {
        setExercises(generateThreeByFiveWarmUp());
    };

    const handleFourRandomize = () => {
        setExercises(generateThreeByFourWarmUp());
    }

    const handleThreeRandomize = () => {
        setExercises(generateThreeByThreeWarmUp());
    }

    return (
        <div>
            <h2>Warm Up Generator</h2>
            <button className="warmUpButton" onClick={handleThreeRandomize}>Randomize a 3x3 Warm Up</button>
            <button className="warmUpButton" onClick={handleFourRandomize}>Randomize a 3x4 Warm Up</button>
            <button className="warmUpButton" onClick={handleFiveRandomize}>Randomize a 3x5 Warm Up</button>
            {exercises ? ( // Check if exercises is not null
                Object.entries(exercises).map(([category, exerciseList]) => (
                    <div key={category}>
                        <WarmUpCard category={category} exercises={exerciseList} />
                    </div>
                ))
            ) : (
                <p>Welcome to THE Warm Up App. Click the button to randomize!</p> // Message when exercises are null
            )}
        </div>
    );
}

export default WarmUpGenerator;