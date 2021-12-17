var NOISE_SCALE = 0.004;
var STEP = 20;
var count;

function setup() {
  createCanvas (windowWidth, windowHeight);
  strokeWeight(1.5);
  noFill();
  count = round(width*1.5/STEP);
  count = round(height*4.5/STEP);
  background(255);
}

function drawPerlinCurve ( x, y, phase, step, count, myColour) {
  push();
  stroke(myColour);
  beginShape();
  for (var i=10; i<count; i++) {
    curveVertex(x, y);
    var angle = 1.4*PI*noise(x* NOISE_SCALE, y* NOISE_SCALE, phase* NOISE_SCALE);
    x += cos(angle)*step;
    y += sin(angle)*step;
  }
  endShape();
  pop();
}

function draw() {
  //background(255);
push();
fill(203, 191, 187);
rect(0,0,width, height);
pop();
 

var phase = frameCount / 2;

  for (var y = 0; y < height; y+=110) {
    var myColour = lerpColor(color(73, 56, 67), color(234, 189, 168), y / height);
    drawPerlinCurve(width+50, y, phase, STEP, count, myColour);
   

  }
}
