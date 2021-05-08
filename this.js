// A function's this keyword behaves a little differently in JavaScript compared to other languages.
// It also has some differences between strict mode and non-strict mode.

const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func()); // returns 42
