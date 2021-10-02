function setup() {
  createCanvas(windowWidth, windowHeight);
  background('black');
}

function draw() {
  if(mouseIsPressed) {
    fill('white');
    textSize(150);
    textFont('Helvetica');
    stroke('white');
    strokeWeight(6);
    text('WORLD', mouseX, mouseY);
  } else {
      fill('black');
      textSize(150);
      textFont('Helvetica');
      stroke('white');
      strokeWeight(6);
      text('HELLO', mouseX, mouseY);
  }
}
