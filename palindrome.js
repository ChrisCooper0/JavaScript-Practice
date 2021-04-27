// Checks is str is a palindrome
isPalindrome = (str) => {
  let newStr = str.replace(/\W+|_/g, "").toLowerCase();
  return newStr === newStr.split("").reverse().join("") ? true : false;
};
console.log(isPalindrome("Racecar"));

// Same as above but uses template strings
isPalindrome = (str) => {
  let newStr = str.replace(/\W+|_/g, "").toLowerCase();
  if (newStr === newStr.split("").reverse().join("")) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
};

isPalindrome("Rotator");


// Checks if str is a palindrome without built in methods
isPalindrome = (str) => {
  let lowerStr = str.toLowerCase();
  let newStr = "";

  for (let i = lowerStr.length - 1; i >= 0; i--) {
    for (let j = newStr.length - 1; i >= 0; i--) {
      newStr += lowerStr[i];
    }
    if (newStr === lowerStr) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(isPalindrome("Racecar")); // Returns true
console.log(isPalindrome("Notapalindrome")); // Returns false
