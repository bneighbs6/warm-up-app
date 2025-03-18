import React, { useState } from "react";
import { generateThreeByThreeWarmUp, generateThreeByFourWarmUp, generateThreeByFiveWarmUp, generateHighIntensityWarmUp } from "../randomGenerator";
import WarmUpCard from "./WarmUpCard";
import { Modal } from "react-bootstrap";

function WarmUpGenerator() {
    const [exercises, setExercises] = useState(null); // Initialize to null
    const [boldButton, setBoldButton] = useState(null); // Track which button is bold

    // Randomizes a 3x5 warm up
    const handleFiveRandomize = () => {
        setExercises(generateThreeByFiveWarmUp());
        toggleBold('five');
    };

    // Randomizes a 3x4 warm up
    const handleFourRandomize = () => {
        setExercises(generateThreeByFourWarmUp());
        toggleBold('four');
    };

    // Randomizes a 3x3 warm up
    const handleThreeRandomize = () => {
        setExercises(generateThreeByThreeWarmUp());
        toggleBold('three');
    };

    // Toggles button to bold
    const toggleBold = (button) => {
        setBoldButton(prevButton => (prevButton === button ? prevButton : button)); // Keep the same button bold or switch to the new one
    };

    const handleHighIntensityWarmUpClick = () => {
        setExercises(generateHighIntensityWarmUp()); // Set exercises to the array
        setBoldButton("highIntensity");
    }

    return (
      <div>
        <Modal.Dialog className="warmUpGenerator">
          <div>
            <h2>Warm Up Generator</h2>
            <button
              className="warmUpButton"
              onClick={handleHighIntensityWarmUpClick}
              style={{
                fontWeight: boldButton === "highIntensity" ? "bold" : "normal",
                border:
                  boldButton === "highIntensity" ? "5px solid black" : "none",
              }}
            >
              High Intensity Warm Up
            </button>
            <button
              className="warmUpButton"
              onClick={handleThreeRandomize}
              style={{
                fontWeight: boldButton === "three" ? "bold" : "normal",
                border: boldButton === "three" ? "5px solid black" : "none",
              }}
            >
              Randomize a 3x3 Warm Up
            </button>
            <button
              className="warmUpButton"
              onClick={handleFourRandomize}
              style={{
                fontWeight: boldButton === "four" ? "bold" : "normal",
                border: boldButton === "four" ? "5px solid black" : "none",
              }}
            >
              Randomize a 3x4 Warm Up
            </button>
            <button
              className="warmUpButton"
              onClick={handleFiveRandomize}
              style={{
                fontWeight: boldButton === "five" ? "bold" : "normal",
                border: boldButton === "five" ? "5px solid black" : "none",
              }}
            >
              Randomize a 3x5 Warm Up
            </button>
            {/* If exercises exists, and is an array, then it maps over the exercises array directly and displays it */}
            {/* If exercises exists, and is an object, then it using the Object.entries of the exercises to map over it and display it */}
            {/* If exercises ! exists, then it dispalys a message */}
            {exercises ? (
              // If exercises is an object, iterate over its entries
              Object.entries(exercises).map(([category, exerciseList]) => (
                <div key={category}>
                  <WarmUpCard category={category} exercises={exerciseList} />
                </div>
              ))
            ) : (
              <p>Welcome to THE Warm Up App. Click a button to randomize!</p>
            )}
          </div>
        </Modal.Dialog>
      </div>
    );
}

export default WarmUpGenerator;