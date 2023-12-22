// Write a function that takes a string as input and returns the string reversed.
// Input = 'apple'
// Output = 'elppa'

function stringReversed(str){
    let left = 0;
    let right = str.length-1;
    let reversedStr = []
    
    while(left<=right){
        reversedStr.push(str[right])
        right--;
    }
    return reversedStr.join('')
}
var input = 'apple'
console.log(`string Reversed: ${stringReversed(input)}`);


function otherMethod(str){
    return str.split("").reverse().join("");
}
  
var input = 'apple'
console.log(`otherMethod Reversed: ${otherMethod(input)}`);