var font;
var occhio;
var error;

var duration;

var password;

function preload() {
  font = loadFont("../assets/Cygnito Mono.ttf");
  occhio = loadImage("../assets/occhio.png");
  error = loadImage("../assets/error.png")
}

function setup() {
  var endTime = second();
  var startTime = 10;
  var tempo = endTime - startTime;
  duration = ("000" + tempo).slice(-4);
  console.log(startTime);
  console.log(endTime);
  console.log(duration);

  var score = localStorage.getItem("score");
  console.log(score);

  document.getElementById('mamt').innerHTML = ">"+score+"AB"+duration;
}

function draw() {
}
