// this references the object executing the function

const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func()); // returns 42

// method -> object
const video = {
  title: "a",
  play() {
    console.log(this);
  },
};
video.play();

// function -> global (window, global)

function playVideo() {
  console.log(this); // global window
}

playVideo();
