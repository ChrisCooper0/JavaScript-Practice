forLoop = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

forInLoop = (obj) => {
  for (let i in obj) {
    console.log(obj[i]);
  }
};

forOfLoop = (arr) => {
  for (let i of arr) {
    console.log(i);
  }
};

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
