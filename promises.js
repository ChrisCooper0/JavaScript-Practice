// A Promise object represents the eventual completion (or failure) of an asynchronous operations and its resulting value

// A promise function passed two parameters (resolve and reject)
const myPromise = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

// .then() is used for the resolve, .catch is used for the reject
myPromise
  .then((message) => {
    console.log("This is in the then " + message);
  })
  .catch((message) => {
    console.log("This is in the catch " + message);
  });
