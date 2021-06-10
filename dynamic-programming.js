// Lecture https://www.youtube.com/watch?v=oBt53YbR9Kk

// Memoization
// Fibonacci sequence - recursive function
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21
console.log(fib(42)); // See console for long time complexity
// Poor time complexity as n increases

// Fibonacci sequence - memoization
