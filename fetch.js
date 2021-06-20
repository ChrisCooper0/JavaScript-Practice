// Fetch API -  Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promise

const url = "https://jsonplaceholder.typicode.com/users";

// Basic Fetch request
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// console.log(fetch(url));

// Fetch request via function call
const apiCall = () => {
  const result = document.getElementById("result");

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        result.innerHTML += `<p><strong>Name:</strong> ${element.name}, <br> <strong>Email:</strong> ${element.email}</p>`;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

apiCall();
