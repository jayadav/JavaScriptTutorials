function findMissingNumber(nums) {
    const n = nums.length + 1; // Since there is one missing number
    const expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    const actualSum = nums.reduce((sum, num) => sum + num, 0); // Sum of elements in the array
  
    return expectedSum - actualSum;
  }
  
  // Example usage:
  const numbers = [3, 0, 1];
  const missingNumber = findMissingNumber(numbers);
  console.log(`Missing Number: ${missingNumber}`);
  