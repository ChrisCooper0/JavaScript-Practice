// Classes are a template for creating objects.
// They encapsulate data with code to work on that data.
// Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.
// Must declare a class before declaring as they are not hoisted like functions

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Class Expression
// The class expression is one way to define a class in ECMAScript 2015.
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
};

console.log(new Rectangle(5, 8).area());
// expected output: 40

// Class Declaration
//The class declaration creates a new class with a given name using prototype-based inheritance.
class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}

console.log(new Polygon(4, 3).area);
// expected output: 12
