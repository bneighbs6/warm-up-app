const easyRaiseExercises = require("./data/raise/easyRaiseExercises");
const hardRaiseExercises = require("./data/raise/hardRaiseExercises");
const globalActivation = require("./data/activate/globalActivation");
const hipActivation = require("./data/activate/pelvicActivation");
const shoulderActivation = require("./data/activate/shoulderActivation");
const globalMobility = require("./data/mobility/globalMobility");
const potentiate = require("./data/potentiate/potentiate");
const skillDev = require("./data/skillDev/skillDev");

// Combining all exercises into one object
const exercises = {
    raise: [...easyRaiseExercises, ...hardRaiseExercises],
    activate: [...globalActivation, ...hipActivation, ...shoulderActivation],
    mobility: [...globalMobility],
    potentiate: [...potentiate],
    skillDev: [...skillDev]
};

// Shuffles through array and selects a count of each exercise
function getRandomExercises(exerciseArray, count) {
    const shuffled = exerciseArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Will generate a warm up that gives 3 exercises for raise, activate, and mobilize. Potentiate and skillDev will always have 2 exercises
function generateThreeByThreeWarmUp() {
    const warmUp = {};
    // Determine the number of exercises to generate based on the category
    for (const [key, value] of Object.entries(exercises)) {
        const count = (key === 'potentiate' || key === "skillDev") ? 2 : 3;
        warmUp[key] = getRandomExercises(value, count) 
    }
    return warmUp;
}

// Will generate a warm up that gives 4 exercises for raise, activate, and mobilize. Potentiate and skillDev will always have 2 exercises
function generateThreeByFourWarmUp() {
    const warmUp = {};
    // Determine the number of exercises to generate based on the category
    for (const [key, value] of Object.entries(exercises)) {
        const count = (key === 'potentiate' || key === "skillDev") ? 2 : 4;
        warmUp[key] = getRandomExercises(value, count) 
    }
    return warmUp;
}

// Will generate a warm up that gives 5 exercises for raise, activate, and mobilize. Potentiate and skillDev will always have 2 exercises
function generateThreeByFiveWarmUp() {
    const warmUp = {};

    for (const [key, value] of Object.entries(exercises)) {
        // Determine the number of exercises to generate based on the category
        const count = (key === 'potentiate' || key === 'skillDev') ? 2 : 5;
        warmUp[key] = getRandomExercises(value, count);
    }
    return warmUp; 
}

module.exports = {
    generateThreeByThreeWarmUp,
    generateThreeByFourWarmUp,
    generateThreeByFiveWarmUp
};


