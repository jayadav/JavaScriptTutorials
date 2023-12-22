// Check string is plaindrome or not
// input = 'abcddcba'
// input = 'abcdadcba'
// output = true

function checkPlaindrome(str) {
  var cleanedStr = str.toLowerCase(); //.replace(/[^A-Za-z0-9]/g).toLowerCase();
  let left = 0;
  let right = cleanedStr.length - 1;
  console.log(left, right);
  while (left < right) {
    console.log(cleanedStr[left] + "!==" + cleanedStr[right]);
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

var input = "Abcdadcba";
console.log(checkPlaindrome(input));

function checkPlaindromeStr(str) {
  var left = 0;
  var right = 0;

  while (left < str.length - 1) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }
  return true;
}
