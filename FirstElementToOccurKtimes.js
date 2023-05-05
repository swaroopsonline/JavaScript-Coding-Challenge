/*Given an array of N integers. Find the first element that occurs at least K number of times.*/
/*Dated: 5th May 2023*/


function find_the_first_occurrence(occurring_array, reversed_array){
    for(var x=0;x<reversed_array.length;x++){

        if(occurring_array[0]==reversed_array[x]){
            console.log(occurring_array[1]+" is first that occurs "+K+" times")
            break
        }else if(occurring_array[1]==reversed_array[x]){
            console.log(occurring_array[0]+" is first that occurs "+K+" times")
            break
        }

    }

}

function reverse_and_compare(origin_array, occur_array){
    let len_origin_array = origin_array.length
    var z = len_origin_array - 1

    while(z>=0){
        reverse_array.push(origin_array[z])
        z = z - 1
    }
    find_the_first_occurrence(occur_array, reverse_array)

}

function compare_the_two_arrays(unique_array, original_array){

    for(var i=0;i<unique_array.length;i++){
        counter = 0
        for(var j=0;j<original_array.length;j++){

            if(unique_array[i]==original_array[j]){
                counter = counter + 1
            }else{
                continue
            }
        }
        if(counter >= 2){
            occurence_array.push(unique_array[i])
        }

    }
    reverse_and_compare(original_array, occurence_array)

}


/*------------------------------Actual Statements start here--------------------------------------*/

let N = 8
let K = 2

array1 = [1,7,4,3,4,8,7,9]
console.log("The given array is ",array1)

let set_array = new Set(array1)
// console.log(set_array)

let array_unique = Array.from(set_array)
// console.log(array_unique)

occurence_array = []
reverse_array = []

compare_the_two_arrays(array_unique, array1)

/*-------------------------------------------Sample Output-------------------------------------------*/

// [Running] node "/home/swaroop/Downloads/JavaScript Coding Challenge/FirstElementToOccurKtimes.js"
// The given array is  [
//   1, 7, 4, 3,
//   4, 8, 7, 9
// ]
// 4 is first that occurs 2 times

// [Done] exited with code=0 in 0.186 seconds



