// Write a function that capitalizes the first letter of each word in a sentence.
// input = 'hello world, my name is jay shankar'
// output = ''

function capitalizeFirstChar(str) {
  let cleanedStr = str
    .replace(/[^A-Za-z0-9\s]/g, "")
    .toLowerCase()
    .split(" ");
  let captStr = "";
  cleanedStr.forEach((element) => {
    captStr += element.charAt(0).toUpperCase() + element.slice(1) + " ";
  });
  return captStr.trim();
}

function capStr(str){
  var str1 = str.toLowerCase().split(" ");
  var capStr = ''
  str1.forEach((item)=>{
    capStr += item.charAt[0].toUpperCase() + item.slice(1) + " "
  })
  return capStr;
}

const input = "hello world, my name is jay shankar";
console.log(`capitalizeFirstChar: ${capitalizeFirstChar(input)}`);


// let cleanedStr = str.replace(/[^A-Za-z0-9\s]/g, "").toLowerCase().split(" ")
// let capStr = "";
// cleanedStr.forEach((element)=>{
//   capStr += element.charAt(0).toUpperCase() + element.slice(1)
// })
// return capStr.trim();