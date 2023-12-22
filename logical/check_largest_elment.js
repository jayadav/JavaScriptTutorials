// Write a function that finds and returns the largest element in an array.
// input = ['apple', 'banana', 'kiwi','chiku','mangoes']
// output = 'mangoes'

function printLargestElement(arr) {
    let prevElementy = "";
    arr.forEach((element) => {
      if (prevElementy.length < element.length) {
        prevElementy = element;
      }
    });
    return prevElementy;
  }
  const input = ["apple", "banana", "kiwikiwikiwikiwi", "chiku", "mangoes"];
  console.log(`printLargestElement: ${printLargestElement(input)}`);
  