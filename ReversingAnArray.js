/*----------------------This Code will reverse the items in a given Array--------------------------*/
/*-------------------------------------Dated: 9th April 2023---------------------------------------*/

let Array1 = ["Harry", "Hermoine","Hagrid","Ron","Dumbledore","Snape"]
console.log(Array1)

let j = Array1.length - 1

let Array2 = []

for(let i = 0; i<Array1.length;i++){
    
    Array2.push(Array1[j])
    j = j - 1
   
}

console.log(Array2)

