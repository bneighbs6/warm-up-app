const easyRaiseExercises = require("./data/raise/easyRaiseExercises");
const hardRaiseExercises = require("./data/raise/hardRaiseExercises");
const globalActivation = require("./data/activate/globalActivation");
const hipActivation = require("./data/activate/pelvicActivation");
const shoulderActivation = require("./data/activate/shoulderActivation");
const globalMobility = require("./data/mobility/globalMobility");
const potentiate = require("./data/potentiate/potentiate");
const skillDev = require("./data/skillDev/skillDev");
const highIntensityWarmUp = require("./data/presets/highIntensityWarmUp");
const lowIntensityWarmUp = require("./data/presets/lowIntensityWarmUp");
const recoveryWarmUp = require("./data/presets/recoveryWarmUp");
const beginnerAthleteWarmUp = require("./data/presets/beginnerAthleteWarmUp");

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
// Generates Warm Up as an object
function generateThreeByThreeWarmUp() {
    const warmUp = {};
    for (const [key, value] of Object.entries(exercises)) {
        const count = (key === 'potentiate' || key === "skillDev") ? 2 : 3;
        warmUp[key] = getRandomExercises(value, count).map(exercise => ({
            ...exercise,
            category: key // Add the category to each exercise
        }));
    }
    return warmUp;
}

// Will generate a warm up that gives 4 exercises for raise, activate, and mobilize. Potentiate and skillDev will always have 2 exercises
// Generates Warm Up as an object
function generateThreeByFourWarmUp() {
    const warmUp = {};
    for (const [key, value] of Object.entries(exercises)) {
        const count = (key === 'potentiate' || key === "skillDev") ? 2 : 4;
        warmUp[key] = getRandomExercises(value, count).map(exercise => ({
            ...exercise,
            category: key // Add the category to each exercise
        }));
    }
    return warmUp;
}

// Will generate a warm up that gives 5 exercises for raise, activate, and mobilize. Potentiate and skillDev will always have 2 exercises
// Generates Warm Up as an object
function generateThreeByFiveWarmUp() {
    const warmUp = {};
    for (const [key, value] of Object.entries(exercises)) {
        const count = (key === 'potentiate' || key === 'skillDev') ? 2 : 5;
        warmUp[key] = getRandomExercises(value, count).map(exercise => ({
            ...exercise,
            category: key // Add the category to each exercise
        }));
    }
    return warmUp; 
}

// Returns High Intensity Warm Up array as an object
function generateHighIntensityWarmUp() {
    const warmUp = {
        "High Intensity": highIntensityWarmUp.map((exercise, category) => ({
            ...exercise,
            ...category,
        }))
    };
    return warmUp;
}

// Returns Low Intensity Warm Up array as an object
function generateLowIntensityWarmUp() {
    const warmUp = {
        "Low Intensity": lowIntensityWarmUp.map((exercise, category) => ({
            ...exercise,
            ...category,
        }))
    };
    return warmUp; 
}

// Returns Recovery Warm Up array as an Objects
function generateRecoveryWarmUp() {
    const warmUp = {
        "Recovery": recoveryWarmUp.map((exercise, category) => ({
            ...exercise,
            ...category,
        })) 
    };
    return warmUp; 
}

// Returns Beginner Athlete Warm Up array as an Object
function generateBeginnerAthleteWarmUp() {
    const warmUp = {
        "Beginner Athlete": beginnerAthleteWarmUp.map((exercise, category) => ({
            ...exercise,
            ...category,
        }))
    };
    return warmUp; 
}



module.exports = {
    generateThreeByThreeWarmUp,
    generateThreeByFourWarmUp,
    generateThreeByFiveWarmUp,
    generateHighIntensityWarmUp,
    generateLowIntensityWarmUp,
    generateRecoveryWarmUp,
    generateBeginnerAthleteWarmUp,
};


