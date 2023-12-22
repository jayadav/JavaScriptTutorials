function outer() {
  let name = "Jay";
  console.log("Outer func");
  function inner() {
    console.log(`Hello ${name}`);
  }
  return inner;
}

const res = outer();
setTimeout(() => {
  res();
}, 3000);

function counter() {
  let count = 0;

  function increment() {
    return count++;
  }

  function decrement() {
    return count--;
  }

  function show_count() {
    console.log("Count: " + count);
  }

  return {
    increment,
    decrement,
    show_count,
  };
}

const coun_var = counter();
coun_var.increment();
coun_var.increment();
coun_var.increment();
coun_var.increment();
coun_var.decrement();
coun_var.decrement();
coun_var.show_count();
