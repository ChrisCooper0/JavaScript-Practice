// Concatenation before template literals were added with ES6
const word1 = "Chris";
const word2 = "Cooper";
const fullName = word1 + " " + word2;
console.log(fullName); //Chris Cooper

// Template literals
const templateFullName = `${word1} ${word2}`;
console.log(templateFullName); // Chris Cooper

// Multi-line string before template literals
const example = "Hello \n" + "World";
console.log(example); // Hello
// World

// Multi-line with template literals
const templateExample = `${word1}  
${word2}`;
console.log(templateExample); // Prints "Chris Cooper" on separate lines
