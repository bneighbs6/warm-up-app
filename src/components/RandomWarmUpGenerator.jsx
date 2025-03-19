import React from "react";
import { Modal } from "react-bootstrap";

function RandomWarmUpGenerator({ 
  exercises, 
  boldButton, 
  handleHighIntensityWarmUpClick, 
  handleLowIntensityWarmUpClick, 
  handleRecoveryWarmUpClick, 
  handleBeginnerAthleteWarmUpClick, 
  handleThreeRandomize, 
  handleFourRandomize, 
  handleFiveRandomize 
}) {
    return (
      <div>
        <Modal.Dialog className="warmUpGenerator">
          <div>
            <h2>Random Warm Up Generator</h2>
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
          </div>
        </Modal.Dialog>
      </div>
    );
}

export default RandomWarmUpGenerator;