// Write a function that checks whether two strings are anagrams of each other.
// like 'listen' word rearange 'silent'

function anagrams(str, checkStr) {
    let cleanedStr = str.replace(/[^A-Za-z0-9/s]/g, "");
    let cleanedStr2 = checkStr.replace(/[^A-Za-z0-9/s]/g, "");
    let left = 0;
    while (left < cleanedStr2.length) {
      if (!cleanedStr.includes(cleanedStr2[left])) {
        return false;
      }
      left++;
    }
    return true;
  }

  function checkAnagram(str, checkStr){
    var str1 = str.replace(/[^A-Za-z0-9/s]/g, "")
    var str2 = str.replace(/[^A-Za-z0-9/s]/g,"")
    var left = 0;
    while(left<str2.length){
      if(!str1.includes(str2[left])){
        return false;
      }
      left++
      return true;
    }
  }
  const input = "listen";
  const checkInput = "silent";
  console.log("anagrams check: ", anagrams(input, checkInput));
  
  // Second method
  function areAnagrams(str1, str2) {
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");
  
    return sortedStr1 === sortedStr2;
  }
  
  const string1 = "listen";
  const string2 = "silent";
  
  if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
  } else {
    console.log(`${string1} and ${string2} are not anagrams.`);
  }
  

  // function checkAnagram(str1, str2){
  //   let str_1 = str1.replace(/[^A-Za-z0-9/s]/g,"").split("").sort().join();
  //   let str_2 = str2.replace(/[^A-Za-z0-9/s]/g,"").split("").sort().join();
  //   return str_1 === str_2
  // }