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

// Alternative example where a function accepts a max value as an argument and should only print any numbers divisible by either 3 or 5 but not both 3 and 5
function fizzBuzz2(num) {
  for (let i = 0; i <= num; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      console.log(i);
    }
  }
}
fizzBuzz2(18); 
