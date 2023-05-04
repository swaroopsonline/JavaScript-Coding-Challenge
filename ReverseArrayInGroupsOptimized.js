/*Given an array arr[] of positive integers of size N. Reverse every sub-array group of size K.*/
/*Note: If at any instance, there are no more subarrays of size greater than or equal to K, then reverse the*/
/*last subarray (irrespective of its size). You shouldn't return any array, modify the given array in-place.*/
// Dated: 4th May 2023

function append_the_remaining_integers_in_reverse_order(sub_array){    

    var length_subarray = sub_array.length
    var x = length_subarray - 1
    while(x>=0){
        empty_list.push(sub_array[x])

        x = x - 1
    }
    console.log("Reversed every sub-array group of size "+K+" is ", empty_list)
}

function do_the_splicing_operation(array_for_splicing, num){

    for(let i=0;i<array_for_splicing.length;i++){
        
        if(array_for_splicing[i]==num){            
            array_for_splicing.splice(i, 1)            
        }
    }
    return array_for_splicing

}

function check_for_length_of_extracted_array(array_for_length_verification){    
    
    if(array_for_length_verification.length>=K){
        extract_and_reverse_the_subarray(array_for_length_verification)
    }else if(array_for_length_verification.length<K){
        append_the_remaining_integers_in_reverse_order(array_for_length_verification)
    }

}


function extract_and_reverse_the_subarray(array_for_reversing){

    j = K - 1
    while(j>=0){
        empty_list.push(array_for_reversing[j])        
        var num1 = array_for_reversing[j]        
        do_the_splicing_operation(array_for_reversing, num1)       

        j = j - 1
    }
    
    check_for_length_of_extracted_array(array_for_reversing)

}

//-----------------------------------------Actual Statements start here---------------------------------------

let N = 5
let K = 3

empty_list = []
array1 = [1,2,3,4,5,6,7,8]

console.log("The given Array is ",array1)
extract_and_reverse_the_subarray(array1)

//-----------------------------Sample Output for the given Array is--------------------------------------------
// [Running] node "/home/swaroop/Downloads/JavaScript Coding Challenge/ReverseArrayInGroupsOptimized.js"
// The given Array is  [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]
// Reversed every sub-array group of size 3 is  [
//   3, 2, 1, 6,
//   5, 4, 8, 7
// ]

// [Done] exited with code=0 in 0.161 seconds
