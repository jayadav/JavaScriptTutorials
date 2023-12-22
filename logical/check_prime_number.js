//First Method
function checkPrimeNum(num) {
  if (num < 2) {
    return `${num} should be greater than 2`;
  }
  for (let index = 2; index < num; index++) {
    if (num % index === 0) {
      return `Not a Prime Number ${num}`;
    }
  }
  return `it is a Prime Number ${num}`;
}
console.log( checkPrimeNum(10));
console.log( checkPrimeNum(13));
console.log( checkPrimeNum(19));
console.log( checkPrimeNum(23));
console.log( checkPrimeNum(25));
