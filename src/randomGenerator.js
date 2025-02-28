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

const threeExercises = {};

for (const [key, value] of Object.entries(exercises)) {
    threeExercises[key] = getRandomExercises(value, 3);
}

const fourExercises = {};

for (const [key, value] of Object.entries(exercises)) {
    fourExercises[key] = getRandomExercises(value, 4);
}

const fiveExercsises = {};

for (const [key, value] of Object.entries(exercises)) {
    fiveExercsises[key] = getRandomExercises(value, 5);
}

// Output the selected exercises
// console.log(threeExercises); 
// console.log(fourExercises);
console.log(fiveExercsises)


