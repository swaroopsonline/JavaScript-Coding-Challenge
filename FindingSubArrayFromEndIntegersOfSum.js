/*This code aims to find the End-Integers pertaining to the given Sum and the relevant Sub-Array*/
/*-------------------------------Dated: 18th April 2023-----------------------------------------*/

function do_the_sub_array_operation(end_integer_array){
    // console.log(end_integer_array)
    // console.log(arr1_duplicate)

    new_empty_list = []

    for(i=0;i<end_integer_array.length;i++){
        for(j=0;j<arr1_duplicate.length;j++){
            if(end_integer_array[i]==arr1_duplicate[j]){
                new_empty_list.push(j)
            }
        }
    }
    // console.log(new_empty_list)

    x = new_empty_list[0]
    y = new_empty_list[1]
   
    sub_array = []
    k = x
   
   while(k<y+1){
    sub_array.push(arr1_duplicate[k])
    k = k + 1
   }
    console.log("And the Sum could be derived by adding the integers from the Sub_array", sub_array)
    console.log("----------------------------------Good Job!------------------------------------")
}


function check_for_summation_equality(array_s){

    let i = 0
    let j = 1

    empty_list = []

    array_length = array_s.length
    // console.log(array_length)
    empty_list.push(array_s[i])

    while(j<array_length){
        
        summation = array_s[i] + array_s[j]
        if(summation == S){
            empty_list.push(array_s[j])
            console.log("Following are the end integers of the Sub-array from left & right",empty_list)            
            
            do_the_sub_array_operation(empty_list)
            
            throw new Error("Program terminated after giving the desired result")
        }else if (summation!=S){

            array_s[i] = summation
            j = j + 1
        }

    }

}

function slicing_operation(array_length){
    k = 1

    
    while(array_length>=2){
        array_x = array1.slice(k)
        k = k + 1
        array_length = array_length - 1
        check_for_summation_equality(array_x)
        console.log("array_x is ",array_x)       
    }


}

/*---------------------------------------------------------------------------------------------------*/

let S = 12
console.log("The declared Sum, i.e., S is ",S)
arr1 = [1,2,3,7,5]
arr1_duplicate = [1,2,3,7,5]

array1 = arr1
console.log("The given Array is ",array1)
console.log("--------------------------")

// Do the required operation on the Array
check_for_summation_equality(array1)
arrayLength1 = array1.length
slicing_operation(arrayLength1) //----> We are feeding arrayLength1 to function slicing_operation
