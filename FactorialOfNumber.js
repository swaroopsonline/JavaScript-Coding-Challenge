/*-------------------This Simple Code will turn out the Factorial of a Number-----------------------*/
/*----------------------------------Dated: 7th April 2023-------------------------------------------*/

let Num = 9

let i = 1

list1 = [Num]

for(let j=0; j<list1.length;j++){

    list1.push(Num - i)
    i = i + 1

    if(Num == i){
        break
    }
}

factorial = 1

console.log(list1)

for(let k=0;k<list1.length;k++){

    factorial = factorial * list1[k]

}

console.log("Factorial of "+Num+" is "+factorial)