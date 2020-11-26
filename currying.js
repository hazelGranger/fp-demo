const whoDoWhat = function(who) {
    return function(verb) {
        return function(what) {
            return `${who} ${verb} ${what}`;
        }
    }
} 

const PikachuDoWhat = whoDoWhat("pikachu");
const PikachuEatWhat = PikachuDoWhat("eat");
console.log(PikachuEatWhat("an apple"));
console.log(PikachuEatWhat("a berry"));
console.log(whoDoWhat("Ash")("throws")("a pokeball"));