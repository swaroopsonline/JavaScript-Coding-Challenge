/*Description: Given an array of size N-1 such that it only contains distinct integers in the range of
1 to N, find the missing Element*/
//Dated: 22nd April 2023

function find_the_missing_integer(){


}

/*-------------------------------------Code Statements begin below------------------------------*/

let N = 8
array1 = [5,2,6,1,4,7,3]
console.log(array1)

// Firstly check if N(i.e., 8) is the missing integer in the given array.
array1.sort()
length = array1.length

if(N==array1[length-1]){
    find_the_missing_integer()
}else{

    console.log("The missing integer is, ",N)
    throw console.error("We're exiting the Code");
}
