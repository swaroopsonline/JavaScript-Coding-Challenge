// This Code aims to slice a given Array until it's length is not less than two.
// Note: The slicing will be done on the very first elements of the initial Array and thereafter on every 
// array that will be formed on each iteration.
// Dated: 15th April 2023

function slicing_operation(array_length){
    k = 1

    while(array_length>2){

        array_x = arr1.slice(k)
        k = k + 1
        array_length = array_length - 1
        printing_array(array_x)
    }

}

function printing_array(array_p){

    console.log(array_p)

}

let arr1 = [1,2,3,7,5]
console.log(arr1)

/*Finding the length of the Array*/
arrayLength1 = arr1.length

slicing_operation(arrayLength1)