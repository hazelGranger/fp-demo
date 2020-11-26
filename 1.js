const stars = [
    {
        name: "Sun",
        type: "sun"
    },
    {
        name: "Jupiter",
        type: "planet"
    }
];

const isPlanet = function(star, index, abc) {
    return star.type === "planet";
};

const planets = stars.filter(isPlanet);
console.log(planets)