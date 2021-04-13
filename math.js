console.log(Math);
console.log(Math.PI); // PI
console.log(Math.E); // Euler's Number

const area = 7.7;
console.log(Math.round(area)); // Rounds number up or down to nearest integer
console.log(Math.floor(area)); // Rounds down number to the nearest integer
console.log(Math.ceil(area)); // Round number up to the nearest integer
console.log(Math.trunc(area)); // Takes away any decimal and leaves the integer

// Random numbers
const random = Math.random(); // Random number is always a decimal between 0 and 1
console.log(random);
console.log(Math.round(random)); // Random number either 1 or 0
console.log(Math.round(random * 100)); // Randon number between 1 and 100

// Max & Min numbers
console.log(Math.max(1, 3, 2)); // Logs 3
console.log(Math.min(1, 3, 2)); // Logs 1
