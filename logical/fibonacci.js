// Input = 10
// Output = 0,1,1,2,3,5,8,13,21,34

function printFibonacci(num){
    let Output = [0,1]
    for(let i=2; i<=num; i++){
        Output.push(Output[i-1]+Output[i-2])
    }
    return Output;
}

console.log(printFibonacci(10));

// function printFibb(num){

//     var output = [0, 1]
//     for(let i=2; i<=num; i++){
//         output.push(output[i-1]+output[i-2])
//     }
//     return output;
// }