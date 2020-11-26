var pets = [{
    name: "Bob",
    type: "cat",
    age: 3
},{
    name: "Max",
    type: "dog",
    age: 5,
},{
    name: "Rex",
    type: "lizard",
    age: 2
}];

var number = 30;

var mammals = ["cat", "dog"];
var reptiles = ["lizard"];

function getAllMammalPets(pets) {
    //console.log("before", pets)
    pets = pets.filter(pet => mammals.includes(pet.type));
    //console.log("after", pets)
    return pets;
}

function sayHello(pets) {
    for (let index = 0; index < pets.length; index++) {
        pets[index]['hello'] = "I am " + pets[index]['type'] + " " + pets[index]['name'];
    }
    return pets;
}

function getLastPet(pets) {
    return pets.pop();
}

function sortByAge(pets) {
    return pets.sort(function(a, b){
        return a.age - b.age;
    })
}

function sortByAgeNoMutate(pets) {
    return [...pets].sort(function(a, b){
        return a.age - b.age;
    })
}

function AddOne(number) {
    number = number + 1;
    return number;
}

console.log(number, AddOne(number));
console.log(number, "after")

console.log(pets);
var sayHelloPets = sayHello(pets);

console.log(pets, "pets");
console.log(sayHelloPets, "sayHelloPets");


// var lastPet = getLastPet(pets);
// console.log(pets, "pets");
// console.log(lastPet, "lastPet");


var sortByAgePets = sortByAgeNoMutate(pets);
console.log(pets, "pets");
console.log(sortByAgePets, "sortByAgePets");






