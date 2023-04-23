/*Description: Given an array of size N-1 such that it only contains distinct integers in 
the range of 1 to N. Find the missing Element*/
//Dated: 22nd April 2023

function find_the_missing_integer(){
    // console.log("We are in the process of finding the missing integer")
    // Let's form an array of size 8 with integers from 1 to 8. And compare it with the original Array.
    empty_array = []

    for(let i=1;i<=8;i++){
        empty_array.push(i)        
    }
    // console.log(empty_array)
    
    for(let x=0;x<=length;x++){
        if(array1[x]!=empty_array[x]){
            console.log("The missing integer is ",empty_array[x])
            break
        }

    }


}

/*-------------------------------------Code Statements begin below------------------------------*/

let N = 8
array1 = [5,2,8,1,6,7,3]
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
