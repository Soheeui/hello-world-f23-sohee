let x = 0; 
let y = 0; 
let len = 7; 
let buttonSize = 60; 
let colorOptions = ["#000000", "#FFFFFF", "#434343"]; 

function setup() {
  createCanvas(500, 500);
  background("#E0e0E0");

  createButton("Play").position(random(width - buttonSize), random(height - buttonSize)).size(buttonSize, buttonSize).mousePressed(playButtonPressed);
  createButton("Love").position(random(width - buttonSize), random(height - buttonSize)).size(buttonSize, buttonSize).mousePressed(loveButtonPressed);
  createButton("Friend").position(random(width - buttonSize), random(height - buttonSize)).size(buttonSize, buttonSize).mousePressed(friendButtonPressed);

  backgroundText();
}


function backgroundText() {
  textSize(20);
  fill(0);
  text('Tell me more, Give me attention.', 10, height + 40);
}

function draw() {
  let randomColor = random(colorOptions);
  stroke(randomColor);
  fill(randomColor);

  ellipseMode(CENTER);

  ellipse(x, y, len, len);

  x += len;

  if (x > width) {
    x = 0;
    y += len;
  }

  if (y > height) {
    x = 0;
    y = 0;
  }
}



function playButtonPressed() {
  colorOptions = ["#31FF6F", "#3FB6FF"];
}

function loveButtonPressed() {
  colorOptions = ["#FF42A1", "#FF4264"];
}

function friendButtonPressed() {
  colorOptions = ["#F66000", "#FFD542"];
}
