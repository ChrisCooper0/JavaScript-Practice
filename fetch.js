// Fetch

const apiCall = () => {
  const result = document.getElementById("result");

  fetch("https://jsonplaceholder.typicode.com/users")
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
