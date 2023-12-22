// Write a function that counts the number of vowels in a given string.
// input = 'Mangoes'
// output = 3

function countVowels(str){
    const vowels = ['a','e','i','o','u']
    const cleanedStr = str.toLowerCase().split("");
    let findVowel = 0
    cleanedStr.forEach(element => {
        if(vowels.includes(element)){
            findVowel++;
        }
    })
    return findVowel;

}
const input = 'Where are you?'
console.log(`Count Vowels: ${countVowels(input)}`);