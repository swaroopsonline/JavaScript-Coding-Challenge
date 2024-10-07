let fname = "Harry Potter"
console.log(typeof fname)

// let lname = new String("Potter")
// console.log(typeof lname)

console.log(fname.length)
console.log(fname[1])

console.log(fname.includes("Potter"))
console.log(fname.includes("potter"))
console.log(fname.startsWith("H"))
console.log(fname.endsWith("otter"))
console.log(fname.endsWith("potter"))

console.log(fname.split(" "))

let arr=fname.split(" ")
console.log(arr[0])
console.log(arr[2])

console.log(fname.toUpperCase())
console.log(fname.toLowerCase())

console.log(fname.trim())

console.log(fname.replace("Harry","Larry"))

console.log(fname)

let finalMsg="Total price is 500 USD"

let value=finalMsg.split(" ")[3]

console.log(typeof value)

let price=parseInt(value)

console.log(typeof price)
console.log(price)

if (price==500) {
    console.log("Pass")
}
else {
    console.log("Fail")
}

let msg='Final \tamount is \'600\' \nUSD'
console.log(msg)

let newMsg = `Final amount is '600' USD`
console.log(newMsg)

let x=700
let newMsg2= `Final amount is ${x} USD`
console.log(newMsg2)