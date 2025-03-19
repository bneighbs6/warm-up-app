import React, { useState } from "react";
import Footer from "./Footer";
import Header from './Header';
import RandomWarmUpGenerator from './RandomWarmUpGenerator';
import PresetWarmUpGenerator from "./PresetWarmUpGenerator";
import { generateThreeByThreeWarmUp, generateThreeByFourWarmUp, generateThreeByFiveWarmUp, generateHighIntensityWarmUp, generateLowIntensityWarmUp, generateRecoveryWarmUp, generateBeginnerAthleteWarmUp } from "../randomGenerator";
import WarmUpCard from "./WarmUpCard";

function Layout() {
    const [exercises, setExercises] = useState(null); // Initialize to null
    const [boldButton, setBoldButton] = useState(null); // Track which button is bold
    const [view, setView] = useState("welcome"); // Begins each view state as the welcome page 

    const handlePresetClick = () => {
        setView("presets");
    }
    
    const handleRandomClick = () => {
        setView("random");
    }

    const handleWelcomeClick = () => {
        setView("generatorView");
    }

    // Define the randomization functions here
    const handleFiveRandomize = () => {
        setExercises(generateThreeByFiveWarmUp());
        toggleBold('five');
    };

    const handleFourRandomize = () => {
        setExercises(generateThreeByFourWarmUp());
        toggleBold('four');
    };

    const handleThreeRandomize = () => {
        setExercises(generateThreeByThreeWarmUp());
        toggleBold('three');
    };

    const handleHighIntensityWarmUpClick = () => {
        setExercises(generateHighIntensityWarmUp());
        setBoldButton("highIntensity");
    };

    const handleLowIntensityWarmUpClick = () => {
        setExercises(generateLowIntensityWarmUp());
        toggleBold("lowIntensity");
    };

    const handleRecoveryWarmUpClick = () => {
        setExercises(generateRecoveryWarmUp());
        toggleBold("recovery");
    };

    const handleBeginnerAthleteWarmUpClick = () => {
        setExercises(generateBeginnerAthleteWarmUp());
        toggleBold("beginner");
    };

    const toggleBold = (button) => {
        setBoldButton(prevButton => (prevButton === button ? prevButton : button));
    };

    return (
      <>
        <Header />
        {view === "welcome" ? (
          <>
            <button onClick={handlePresetClick}>Preset</button>
            <button onClick={handleRandomClick}>Random</button>
          </>
        ) : (
          <>
            <RandomWarmUpGenerator
              exercises={exercises}
              boldButton={boldButton}
              handleThreeRandomize={handleThreeRandomize}
              handleFourRandomize={handleFourRandomize}
              handleFiveRandomize={handleFiveRandomize}
            />
            <PresetWarmUpGenerator
              exercises={exercises}
              boldButton={boldButton}
              handleHighIntensityWarmUpClick={handleHighIntensityWarmUpClick}
              handleLowIntensityWarmUpClick={handleLowIntensityWarmUpClick}
              handleRecoveryWarmUpClick={handleRecoveryWarmUpClick}
              handleBeginnerAthleteWarmUpClick={
                handleBeginnerAthleteWarmUpClick
              }
            />
            {/* Conditional rendering of WarmUpCard */}
            {exercises ? (
              Object.entries(exercises).map(([category, exerciseList]) => (
                <div key={category}>
                  <WarmUpCard category={category} exercises={exerciseList} />
                </div>
              ))
            ) : (
              <p>Welcome to THE Warm Up App. Click a button to randomize!</p>
            )}
          </>
        )}
      </>
    );
}

export default Layout;