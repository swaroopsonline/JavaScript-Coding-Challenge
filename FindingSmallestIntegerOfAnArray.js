/*-------------This is a simple code to find out the smallest integer of an unsorted Array---------------*/
/*----------------------------------------Dated: 1st May 2023------------------------------------------*/

//Note: In the below if statement the occurence of the smallest integer will always be
    //length of (array-1)
    //And the length of emp_list will denote the occurence.

function printing_operation(emp_list){
    if(emp_list.length > array1.length - 2){
        let integer_set = new Set(emp_list)
        let smallNoArray = Array.from(integer_set)
        console.log("The smallest integer of the Array is ",smallNoArray)
    }
}

function comparison_of_each_extracted_array_integer(y){
    empty_list = []
    for(let j=0;j<array1.length;j++){
        if(y<array1[j]){
            empty_list.push(y)
        }else if(y>array1[j]){
            empty_list = []
        }
    }
    printing_operation(empty_list)
}

function extraction_of_each_array_integer(){

    for(let i=0;i<array1.length;i++){
        y = array1[i]
        comparison_of_each_extracted_array_integer(y)
    }

}

/*----------------------------------Actual Statements start here-----------------------------------*/

array1 = [5,2,7,11,8,6,9]
length_of_array1 = array1.length_of_array1

// Extract the Integers of the Array to an empty_list
extraction_of_each_array_integer()

//---------------------------------- The Sample Output is as shown below:-------------------------------
// [Running] node "/home/swaroop/Downloads/JavaScript Coding Challenge/FindingSmallestIntegerOfAnArray.js"
// The smallest integer of the Array is  [ 2 ]

// [Done] exited with code=0 in 0.153 seconds