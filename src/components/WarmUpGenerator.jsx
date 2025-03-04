import React, { useState } from "react";
import { generateThreeByFiveWarmUp } from "../randomGenerator";
import WarmUpCard from "./WarmUpCard";

function WarmUpGenerator() {
    const [exercises, setExercises] = useState(null); // Initialize to null

    const handleRandomize = () => {
        setExercises(generateThreeByFiveWarmUp());
    };

    return (
        <div>
            <h2>Warm Up Generator</h2>
            <button onClick={handleRandomize}>Randomize Exercises</button>
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