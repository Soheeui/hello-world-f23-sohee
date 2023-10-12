let totalPts = 200;
let steps = totalPts + 2;

function setup() {
  createCanvas(700, 700, WEBGL); 


  
}

function draw() {
  background(214,213,196);
  fill(255,255,255,200)
  stroke(255, 0, 0);
  strokeWeight(1);
  
  rotateX(second());
  rotateY(frameCount * 0.01);

  box(350);
  

  
  let rand = 1;
  for (let i = 1; i < steps; i++) {
    point((width / steps) * i, height / 2 + random(-rand, rand));
    
    rand += random(-10, 100);
      strokeWeight(5);

  }

  

}