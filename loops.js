// For loop
forLoop = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

// For In loop
forInLoop = (obj) => {
  for (let i in obj) {
    console.log(obj[i]);
  }
};

// For Of loop
forOfLoop = (arr) => {
  for (let i of arr) {
    console.log(i);
  }
};

// While loop
whileLoop = (arr) => {
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i]);
    i++;
  }
};

forLoop([1, 2, 3]);
forInLoop({
  4: "Four",
  5: "Five",
  6: "Six",
});
forOfLoop([7, 8, 9]);
whileLoop([10, 11, 12]);
