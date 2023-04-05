//  This Code will check if two arrays are equal in content and size.
// Dated: 5th April 2023

// Description: Given two arrays A and B of equal size N, the task is to find if given arrays are equal or not.
// Two arrays are said to be equal if both of them contain same set of elements, arrangements (or permutation)
// of elements may be different though.
// Note: If there are repetitions, then counts of repeated elements must also be same for two array to be equal.

/*Declare two Arrays*/

let array1 = [2, "Logan", "Fiat", true, "volvo", 3, 4]
let array2 = ["volvo", true, "Fiat", "Logan", 2, 3, 3]

/*Converting the two Arrays to two corresponding Sets*/

let set1 = new Set(array1)
let set2 = new Set(array2)

/*Now converting the two sets back to Arrays as the Set is unordered*/

let setArray1 = Array.from(set1)
let setArray2 = Array.from(set2)

/*This New Set will store all the common elements in both the Arrays*/
let newArray = []

/*Now we've to compare the length of the two newly formed Arrays to check for their size*/

if(array1.length== array2.length){
    
    commonElements()

    console.log("Both the Arrays are equal in size")
    console.log("Common elements for the same sized Arrays are : " +newArray)
}
else if(array1.length!= array2.length){
   
    commonElements()

    console.log("Both the Arrays are not equal in size")
    console.log("Common elements for the varied sized Arrays are : " +newArray)

}

/*Now the next few lines of code will determine if the Arrays are equal in content*/

if(setArray1.length==newArray.length && newArray.length == setArray2.length){

    console.log("Both the Arrays are equal in content")

}
else{

    console.log("Both the Arrays are not equal in content")
}


/*Function to create an Array of common elements comprising of the elements of both the Arrays*/

function commonElements(){

    console.log("Inside the Function of commonElements")

    for(let i=0; i<setArray1.length; i++){
        for(let j=0; j<setArray2.length; j++){
            if(setArray1[i] == setArray2[j]){
                newArray.push(setArray1[i])
            }
        }
    }
}