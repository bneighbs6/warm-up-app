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

function generateFiveExercises() {
    const warmUp = {};

    for (const [key, value] of Object.entries(exercises)) {
        warmUp[key] = getRandomExercises(value, 5);
    }
    return warmUp; 
}

module.exports = {
    generateFiveExercises
};


