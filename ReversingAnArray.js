/*----------------------This Code will reverse the items in a given Array--------------------------*/
/*-------------------------------------Dated: 9th April 2023---------------------------------------*/

let Array1 = ["Harry", "Hermoine","Hagrid","Ron","Dumbledore","Snape","Sherlock"]
console.log(Array1)

let j = Array1.length - 1

let Array2 = []

// for(let i = 0; i<Array1.length;i++){
    
//     Array2.push(Array1[j])
//     j = j - 1
   
// }

// console.log("Array2 output using a for loop is "+Array2)

console.log("----------------------------")

while(j<Array1.length){

    Array2.push(Array1[j])
    j = j - 1

    if(j<0){
        break
    }
}

console.log("Array2 output using a while loop is "+Array2)
console.log(Array2)

