function greet(name) {
    console.log("Hello "+name+ "!")
}

greet("Harry");

console.log("-------------------------")

const greet1 = function(name) {
    console.log("Hello "+name+ "!") 
}

greet1("Ron")

console.log("-------------------------")

const greet2 = (name) => {
    console.log(`Hello ${name}`)    
}

greet2("Hermione")

console.log("-------------------------")

// Immediately Invoked Function Expression (IIFE):

// (function(name) {
//     console.log("Hello "+name+"!");
// })("Haguid");
// ----------------------------------------

// Functions with Default Parameters:

function greet3(name = "World") {
    console.log("Hello "+name+ "!")
}

greet3()
greet("Dumbledore")

console.log("-------------------------")

// Functions with Rest Parameters:
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num);
}

console.log(sum(1,2,3))
console.log(sum(4,5,6,7))


