// DOM Manipulation

// Responsive Navbar
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// querySelector
let stringQuery = document.querySelector(".querySelector");
stringQuery.innerHTML += " - document.querySelector";

// querySelectorAll
let stringQueryAll = document.querySelectorAll("p")[0];
stringQueryAll.textContent += " - document.querySelectorAll";

// getElementById
let stringId = document.getElementById("testId");
stringId.textContent += " - documnent.getElementById";

// getElementsByClassName
let stringClass = document.getElementsByClassName("testClass");
stringClass[0].textContent += " - document.getElementsByClassName";

// getElementsByName
let stringName = document.getElementsByName("testName")[0];
stringName.textContent += " - document.getElementsByName";

// getElementsByTagName
let stringTagName = document.getElementsByTagName("H2")[0];
stringTagName.textContent += " - document.getElementsByTagName";
