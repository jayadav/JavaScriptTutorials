// Print Factorial Number
// Input 10
// Output 1, 2, 5, 10

function factorialNum(num){
    let factNum = []
    for (let index = 1; index <= num; index++) {
        if(num%index===0){
            factNum.push(index)
        }
    }
    return factNum;
}

console.log(`Factorial of ${factorialNum(10)}`);
console.log(`Factorial of ${factorialNum(55)}`);