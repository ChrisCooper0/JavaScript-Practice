// Regular Expressions

// Validation
const p = /colou?r/;
console.log("The color green".search(p)); // returns 4
console.log("abc".search(p)); // return -1 if not found

// Extraction
const pattern = /weighs (\d+(\.\d+)?) (\w+)/;
console.log(pattern.exec("The thing weighs 2.5 kilograms or so."));
// [ 'weighs 2.5 kilograms',
//   '2.5',
//   '.5',
//   'kilograms',
//   index: 10,
//   input: 'The thing weighs 2.5 kilograms or so.' ]

const r = /((\d{3})(?:\.|-))?(\d{3})(?:\.|-)(\d{4})/g;
const m = r.exec("Call 1.800.555-1212 for info");
console.log(m.index); // 7
console.log(JSON.stringify(m)); // ["800.555-1212", "800.", "800", "555", "1212"];

// Substitution

console.log("Rascally Rabbit".replace(/[RrLl]/g, "w"));
