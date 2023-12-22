// Write a function that calculates the factorial of a given number.

function genFact(num) {
    const fact = [];
    for (let index = 1; index <= num; index++) {
      if (num % index === 0) {
        fact.push(index);
      }
    }
    return fact;
  }
  
  console.log(`Factorial of num: ${genFact(20)}`);
  