/*-------This Code demonstrates as to how do we sort an unsorted array of positive Integers--------*/
/*-------------------------------------Dated: 27th April 2023--------------------------------------*/

function print_the_sorted_array(array_sorted){
    last_int =array_sorted[0]
    sorted_array.push(last_int)
    console.log("The Sorted Array is shown below")
    console.log(sorted_array)
}

function do_the_splicing_operation(get_array, get_int){
    // console.log("displaying array for splice operation",get_array)
    // console.log(get_int)

    for(var i=0;i<get_array.length;i++){

        if(get_array[i]===get_int){

            get_array.splice(i, 1)
        }
    }
    // console.log("get_array after splicing",get_array)
    extraction_of_each_array_integer(get_array)

}

function forming_the_sorted_array(acquired_int, new_array){
    for(i=0;i<acquired_int.length;i++){
        for(j=0;j<new_array.length;j++){
            if(acquired_int[i]==new_array[j]){
                num1 = new_array[j]                
                sorted_array.push(num1)
                // console.log(sorted_array)

                // Now we've to use the splicing method to remove the smallest integer from the original Array.
                do_the_splicing_operation(new_array, num1)
            }
        }
    }
}

function finding_the_smallest_integer_operation(emp_list, new_array){
    length_of_array = new_array.length
    if(emp_list.length > length_of_array - 2){
        integer_set = new Set(emp_list)
        required_int = Array.from(integer_set)
        forming_the_sorted_array(required_int, new_array)
    }
}

function comparison_of_each_extracted_array_integer(y, array_for_comparison){
    empty_list = []
    for(i=0;i<array_for_comparison.length;i++){
        if(y<array_for_comparison[i]){
            empty_list.push(y)
        }else if(y>array_for_comparison[i]){
            empty_list = []
        }
    }
    finding_the_smallest_integer_operation(empty_list, array_for_comparison)

}

function extraction_of_each_array_integer(array_received){
    if(array1.length == 1){
        print_the_sorted_array(array_received)
    }

    for(x=0; x<array1.length; x++){
        y = array_received[x]
        comparison_of_each_extracted_array_integer(y, array_received)

    }

}



/*-----------------------------------Actual statements start here-----------------------------------*/

array1 = [5,2,7,1,201,47,13,88,151,89, 15]
console.log("The unsorted array is ",array1)
length_of_array1 = array1.length

sorted_array = []

// Extract the integers of the array to an empty_list
extraction_of_each_array_integer(array1)