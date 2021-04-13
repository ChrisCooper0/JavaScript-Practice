// = Assignment operator
let x = 1;
y = x;

console.log(x) // 1
console.log(y) // 1

// == Equality operator (checks value)
let x = 3;
let y = "3";
if (x == y) {
console.log("Same value")
} else {
console.log("Not same value")}



// === Equality operator (checks value & type)

let x = 3;
let y = "3";
if (x === y) {
console.log("Same value and type")
} else {
console.log("Not same value or type")}


20 === "20";
>> false // Same as the earlier example given above
20 === 20;
>> true // Both values and types are the same
1 === 2;
>> false // Same type but different values
"1" === "12";
>> false // Both strings but different values
false === true;
>> false // Both of type Boolean but different values
null === undefined;
>> false // They both mean 'nothingness' but in different ways.
// null = Represents the intentional absence of any object value
// undefined = A variable that has not been assigned a value is of type undefined