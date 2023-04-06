/*------------------------- Finding Occurrence of characters in a String -----------------------------*/
/*------------------------------Dated: 6th April 2023-------------------------------------------------*/


let string1 = "hippopotamus"

// First we need to convert the list into a string.

stringArray1 = Array.from(string1)

// Now convert the stringArray1 to a set so as to get the unique characters from the String

stringSet1 = new Set(stringArray1)

// And now convert the stringSet1 to an Array for easy comparison between the unique array and the 
// original array of characters.

stringArrayUnique1 = Array.from(stringSet1)

// Now we compare the two Arrays to get the count of the occurence of the characters in the original string
// So here two for loops, i.e a for loop inside a loop would give us the required occurence.

for(let i=0; i<stringArrayUnique1.length; i++){
    
    let x = 0;
    
    for(let j=0; j<stringArray1.length; j++){        

        if(stringArrayUnique1[i] == stringArray1[j]){
            x=x+1    
                   
        }
        else{
            continue
        }                   
               
    }
    console.log("The Occurrence of "+stringArrayUnique1[i]+" is "+x)         
    
}

