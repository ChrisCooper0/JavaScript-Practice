// Solution looping over a range of numbers
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log(i + " FizzBuzz");
  } else if (i % 5 === 0) {
    console.log(i + " Buzz");
  } else if (i % 3 === 0) {
    console.log(i + " Fizz");
  } else {
    console.log(i);
  }
}

// Solution where a function takes in one number
fizzBuzz = (num) => {
  let result = "";
  if ((num % 3 === 0) & (num % 5 === 0)) {
    return (result += "FizzBuzz");
  } else if (num % 5 === 0) {
    return (result += "Buzz");
  } else if (num % 3 === 0) {
    return (result += "Fizz");
  } else {
    return result;
  }
};
console.log(fizzBuzz(15)); // Prints 'FizzBuzz'
