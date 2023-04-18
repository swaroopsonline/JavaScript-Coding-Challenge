/*-------------Finding the Sub-Array from a Greater Array when the end-integers are known-------------*/

function find_the_sub_array_from_greater_array(Greater_array,end_integer_array){
      
        new_empty_list = []

        for(i=0;i<end_integer_array.length;i++){
            for(j=0;j<Greater_array.length;j++){
                if(end_integer_array[i]==Greater_array[j]){
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
        sub_array.push(Greater_array[k])
        k = k + 1
       }
        console.log("And the Sum could be derived by adding the integers from the Sub_array", sub_array)

}

let Greater_array = [1,2,3,7,5]
let end_integer_array = [2,7]

find_the_sub_array_from_greater_array(Greater_array,end_integer_array)