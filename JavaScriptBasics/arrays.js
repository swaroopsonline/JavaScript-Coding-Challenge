let mixArray = [1, 'Oct', true, null, {user:"Harry", age: "14"}]
console.log(mixArray)
console.log(mixArray[1])
console.log(mixArray[4]['user'])
console.log(mixArray[4]['age'])

mixArray.push('Sunday')
console.log(mixArray)

mixArray.unshift('Sunday')
console.log(mixArray)

mixArray = mixArray.filter(mxArray => mxArray !== 'Sunday')
console.log(mixArray);

console.log('index of null is '+mixArray.indexOf(null))

let today = "Today is Sunday"
let arrayToday = today.split(" ");
console.log(arrayToday)
console.log(arrayToday.indexOf("is"))