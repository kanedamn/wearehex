var font;
var occhio;

var x = window.innerWidth;
var y = window.innerHeight;

var sketch = function(p){

p.preload = function() {
  font = loadFont("./assets/Cygnito Mono.ttf");
  occhio = loadImage("./assets/occhio.png");
}

p.setup = function() {
  var myCanvas =  p.createCanvas(700, 500);
  myCanvas.position(500, 500);
  p.background(255);
}

p.draw = function() {
}
}
