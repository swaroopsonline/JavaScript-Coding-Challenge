/*---------------This simple code will differentiate between var & let in JavaScript-----------------*/
/*---------------------------------------Dated: 7th April 2023---------------------------------------*/

// Here we can see that we can redefine a variable using var in a Code.
var a = 10
console.log(a)

var a = "John"
console.log(a)

console.log("------------------")

// The below example proves that we can define a let variable only once as it will definitely error out.
let b = 20
console.log(b)

let b = "Harry"
console.log(b)

console.log("------------------")

//The below example proves that if we print the 'var' variable before defining it, it'll show the output as undefined.
console.log(x)
var x = 50

// The below example proves that if we print the 'let' variable before defining it, it'll error out.
console.log(y)
let y = 60