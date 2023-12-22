// Convert nested array to flat array
// Input = [1, [[2]], [], [[[3, 4]]], [5], []]
// Output = [1,2,3,4,5]

function printFlatArray(Input) {
  return Input.reduce((acu, item) => {
    return acu.concat(Array.isArray(item) ? printFlatArray(item) : item);
  }, []);
}

var Input = [1, [[2]], [], [[[3, 4]]], [5], []];
console.log(`Flat Array ${printFlatArray(Input)}`);

// function printNestArray(nestarr) {
//   return (
//     nestarr.reduce((acu, initval) => {
//       return acu.concat(
//         Array.isArray(initval) ? printNestArray(initval) : initval
//       );
//     }),
//     []
//   );
// }
