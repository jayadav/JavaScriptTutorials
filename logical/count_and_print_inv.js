// Count Duplicate item from array and print
// Input = ['apple','apple','banana','cherry','kiwi', 'apple', 'mango', 'kiwi']
// Output = ['apple_4','banana_1','cherry_1','kiwi_2','mango_1']

function countInventry(items) {
    var count = {};
    items.forEach((element) => {
      if (count[element]) {
        count[element] = count[element] + 1;
      } else {
        count[element] = 1;
      }
    });
  
    return count;
  }
  
  function printInventory(countResult) {
    var resultArray = []
    for( var key in countResult){
      console.log(key);
      if(countResult.hasOwnProperty(key)){
          resultArray.push(`${key}_${countResult[key]}`)
      }
    }
    return resultArray;
  }
  
  var items = [
    "apple",
    "apple",
    "banana",
    "cherry",
    "kiwi",
    "apple",
    "mango",
    "kiwi",
  ];
  // console.log(countInventry(items));
  
  var countResult = countInventry(items);
  var printedResult = printInventory(countResult);
  console.log(printedResult);
  