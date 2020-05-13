function logMyArray(myArray){
    for (let i = 0; i < myArray.length; i++) {
        const element = myArray[i];
        console.log(element);
    }
}

let array = ["Hello", "World"];
logMyArray(array);

logMyArray(["Hello", "World"]);



let people = [
    {
        name: "Jane",
        age: 25
    },
    {
        name: "Bob",
        age: 40
    },
    {
        name: "Dana",
        age: 46
    },
    {
        name: "Jade",
        age: 19
    },
    {
        name: "Jim",
        age: 12
    }
]

function getOldest(peopleArray){

}

getOldest(people) // Expected output: Dana