// Pollyfill for forEach()
const names = ["jay", "shankar", "yadav"];
function consoleFn(x) {
  console.log(x);
}

Array.prototype.MyForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};
console.log("forEach filter:");
names.MyForEach(consoleFn);

// Write pollyfill for Map function
Array.prototype.MyMap = function (callback) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i]));
  }
  return newArr;
};

const res = names.MyMap((item) => {
  return item;
});

console.log("Map Filter", res);

// Write a pollyfill for Filter Method

Array.prototype.MyFilter = function (callback) {
  let output = [];
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index])) {
      output.push(this[index]);
    }
  }
  return output;
};
const logicAlbums = [
  {
    name: "Bobby Tarantino",
    rating: 5,
  },
  { name: "The Incredible True Story", rating: 4.5 },
  {
    name: "Supermarket",
    rating: 4.9,
  },
  {
    name: "Neon",
    rating: 4.2,
  },
  { name: "Under Pressure", rating: 5 },
];

const test = logicAlbums.MyFilter((item) => {
  return item.rating >= 5;
});

console.log(test);

// write pollyfill for reduce() method
Array.prototype.MyReduce = function (callback, initVal) {
  var acu = initVal === undefined ? undefined : initVal;
  for (var index = 0; index < this.length; index++) {
    if (acu !== undefined) {
      acu = callback.call(undefined, acu, this[index], index, this);
    } else {
      acu = this[index];
    }
  }
  return acu;
};


function additionFunction(accumulator, current) {
  accumulator = accumulator + current;
  return accumulator;
}
const numbers = [1, 2, 3, 4, 5, 6];
const test2 = numbers.MyReduce((acu, cur)=>{
    return acu + cur
}, 0);
console.log(test2);
