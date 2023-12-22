// remove Duplicate element from array
// Input = ['apple','apple','banana','cherry','kiwi', 'apple', 'mango', 'kiwi']
// Output = ['apple','banana','cherry','kiwi','mango']

var Input = [
  "apple",
  "apple",
  "banana",
  "cherry",
  "kiwi",
  "apple",
  "mango",
  "kiwi",
];

// Method 1
function set_sample(items) {
  return [...new Set(items)];
}

console.log(`Set: ${set_sample(Input)}`);

// Method 2
function filter_sample(items) {
  return items.filter((element, index, Input) => {
    return Input.indexOf(element) === index;
  });
}

console.log(`Filter: ${filter_sample(Input)}`);

// Method 3
function reduce_sample(items) {
  return items.reduce((acu, item) => {
    if (!acu.includes(item)) {
      acu.push(item);
    }
    return acu;
  }, []);
}
console.log(`Reduce: ${reduce_sample(Input)}`);

// Method 4
function foreach_sample(items) {
  var uniq = [];
  items.forEach((element) => {
    if (!uniq.includes(element)) {
      uniq.push(element);
    }
  });
  return uniq;
}
console.log(`Unique: ${foreach_sample(Input)}`);
