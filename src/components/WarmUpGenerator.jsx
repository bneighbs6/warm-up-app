import React from "react";
import { Modal } from "react-bootstrap";

function WarmUpGenerator({ 
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
            <h2>Warm Up Generator</h2>
            <button
              className="warmUpButton"
              onClick={handleHighIntensityWarmUpClick}
              style={{
                fontWeight: boldButton === "highIntensity" ? "bold" : "normal",
                border: boldButton === "highIntensity" ? "5px solid black" : "none",
              }}
            >
              High Intensity Warm Up
            </button>
            <button
              className="warmUpButton"
              onClick={handleLowIntensityWarmUpClick}
              style={{
                fontWeight: boldButton === "lowIntensity" ? "bold" : "normal",
                border: boldButton === "lowIntensity" ? "5px solid black" : "none",
              }}
            >
              Low Intensity Warm Up
            </button>
            <button 
              className="warmUpButton"
              onClick={handleRecoveryWarmUpClick}
              style={{
                fontWeight: boldButton === "recovery" ? "bold" : "normal",
                border: boldButton === "recovery" ? "5px solid black" : "none",     
              }}
            >
              Recovery Warm Up
            </button>
            <button 
              className="warmUpButton"
              onClick={handleBeginnerAthleteWarmUpClick}
              style={{
                fontWeight: boldButton === "beginner" ? "bold" : "normal",
                border: boldButton === "beginner" ? "5px solid black" : "none",     
              }}
            >
              Beginner Athlete Warm Up
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
          </div>
        </Modal.Dialog>
      </div>
    );
}

export default WarmUpGenerator;