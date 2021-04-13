// Checks is str is a palindrome
isPalindrome = (str) => {
  let lowerStr = str.toLowerCase();
  if (lowerStr === lowerStr.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome("Racecar"));

// Same as above but uses template strings
isPalindrome = (str) => {
  let lowerStr = str.toLowerCase();
  let reverseLowerStr = lowerStr.split("").reverse().join("");
  if (lowerStr === reverseLowerStr) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
};

isPalindrome("Rotator");
