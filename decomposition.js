// snippet 1

let flim = function () {
  console.log("leak");
  flam();
  console.log("geek");
};

let flam = function () {
  console.log("beak");
  console.log("sneak");
};

flim();
// leak
// beak
// sneak
// geek

// snippet 2

let alice = function (n) {
  for (let i = 0; i <= n; i++) {
    bob(i);
  }
};

let bob = function (n) {
  if (n % 2 === 0) {
    console.log("good");
  } else {
    console.log("bad");
  }
};

alice(4);
// good
// bad
// good
// bad
// good

// snippet 3

let foo = function () {
  for (let i = 0; i < 5; i++) {
    console.log("i = " + i);
    bar();
  }
};

let bar = function () {
  for (let j = 0; j < 5; j++) {
    console.log("  j = " + j);
  }
};

foo();
// i = 0
//   j = 0
//   j = 1
//   j = 2
//   j = 3
//   j = 4
// i = 1
//   j = 0
//   j = 1
//   j = 2
//   j = 3
//   j = 4
// i = 2
//   j = 0
//   j = 1
//   j = 2
//   j = 3
//   j = 4
// i = 3
//   j = 0
//   j = 1
//   j = 2
//   j = 3
//   j = 4
// i = 4
//   j = 0
//   j = 1
//   j = 2
//   j = 3
//   j = 4
