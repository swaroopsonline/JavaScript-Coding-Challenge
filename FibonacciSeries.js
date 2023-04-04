// This code will implement the Fibonacci series in Python. And a list of fibonacci series for up to 22
// occurrences will be printed.
// Dated: 4th April 2023

let x = 0
let y = 1

let arr1 = [x, y]
console.log(arr1.length)

for (let i = 0; i<10; i++){

    x = x + y
    y = x + y

    arr1.push(x)
    arr1.push(y)

}

console.log(arr1)



