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
        setView("preset");
        setBoldButton(null);
    }
    
    const handleRandomClick = () => {
        setView("random");
        setBoldButton(null);
    }

    const handleHomeClick = () => {
            setView("welcome"); // Sets view = welcome screen
            setExercises(null); // Removes all previously clicked warm ups from the screen
            setBoldButton(null); // Removes all bold buttons previously clicked
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
        {(() => {
            if (view === "welcome") {
                return (
                  <>
                    <h2>Choose an Option</h2>
                    <button className="homeButton" onClick={handleHomeClick}>
                      Home
                    </button>
                    <button
                      className="presetButton"
                      onClick={handlePresetClick}
                    >
                      Preset
                    </button>
                    <button
                      className="randomButton"
                      onClick={handleRandomClick}
                    >
                      Random
                    </button>
                  </>
                );
            } else if (view === "preset") {
                return (
                  <>
                    <button
                    onClick={handleHomeClick}
                    className="homeButton"
                    >Home</button>
                    <PresetWarmUpGenerator
                      exercises={exercises}
                      boldButton={boldButton}
                      handleHighIntensityWarmUpClick={
                        handleHighIntensityWarmUpClick
                      }
                      handleLowIntensityWarmUpClick={
                        handleLowIntensityWarmUpClick
                      }
                      handleRecoveryWarmUpClick={handleRecoveryWarmUpClick}
                      handleBeginnerAthleteWarmUpClick={
                        handleBeginnerAthleteWarmUpClick
                      }
                    />
                  </>
                );
            } else if (view === "random") {
                return (
                  <>
                    <button
                    className="homeButton"
                    onClick={handleHomeClick}>Home</button>
                    <RandomWarmUpGenerator
                      exercises={exercises}
                      boldButton={boldButton}
                      handleThreeRandomize={handleThreeRandomize}
                      handleFourRandomize={handleFourRandomize}
                      handleFiveRandomize={handleFiveRandomize}
                    />
                  </>
                );
            }
        })()}
                {/* Conditional rendering of WarmUpCard */}
                {exercises && (
            Object.entries(exercises).map(([category, exerciseList]) => (
                <div key={category}>
                    <WarmUpCard category={category} exercises={exerciseList} />
                </div>
            ))
        )}
        {/* <Footer /> */}
      </>
    );
}

export default Layout;