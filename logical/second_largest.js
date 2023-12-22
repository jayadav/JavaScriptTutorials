function secondLargestElement(arr) {
    let sort = arr.sort();
    return sort[sort.length-2];
}

const input = [1, 2, 3, 5, 4, 7, 9, 6, 8];
console.log(secondLargestElement(input));


// for string
function secondLargestElementForString(arr) {
    let sort = arr.sort();
    let first = "";
    let second = "";
    sort.forEach((element) => {
      second = element.length > second.length ? first : second;
      if (first.length < element.length) {
        console.log(element);
        first = element;
      }
    });
    return { first, second };
  }
  
  const inputstr = [
    "test7tt",
    "abc",
    "abcd",
    "abhhh",
    "cd",
    "adadad",
    "cfdsfsdfd",
    "fwfewrewrwerwerw",
    "dsds",
  ];
  console.log(secondLargestElementForString(inputstr));
  