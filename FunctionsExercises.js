// 1 Create a function that takes 2 arguments that are numbers and returns the sum of those numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

let me = {
    name: "Luke",
    age: 19
};

console.log(me);
console.log("Luke goes to university");
me.age = addNumbers(me.age, 4);
console.log(me);

// 2 Create a function that takes 2 arguments that are numbers and returns the largest of those numbers
function getMaxNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}

let biggestNumber = getMaxNumber(12, 19);
console.log(biggestNumber);

// 3 Create a function that takes 1 argument that is an array and prints each of the elements in that array to the console
function myArrayPrinter(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        let myItem = myArray[i];
        console.log(myItem);
    }
}

let names = [
    "Jim",
    "Bob",
    "Luke"
];

myArrayPrinter(names);

let dogs = [
    "Rex",
    "Scooby"
]
myArrayPrinter(dogs);

// 4 Create a function that takes 2 arguments, name and age, and returns an object with properties name and age set to the values passed in
function createPerson(name, age) {
    return {
        name: name,
        age: age
    }
}

let luke = createPerson("Luke", 23);

console.log(luke);

