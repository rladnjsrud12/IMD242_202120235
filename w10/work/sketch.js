let colours = [0xff257180, 0xfff2e5bf, 0xfffd8b51, 0xffcb6040];
let gravity = [0, 0.1];
let friction = 0.99;
let cnt = 0;
let mouse = [0, 0];

let confetties = [];

function setup() {
  createCanvas(800, 800);
}

function gen(x, y, n) {
  for (let idx = 0; idx < n; idx++) {
    let randomW = random(4, 20);
    let randomH = random(4, 20);
    let randomForce = random(1, 10);
    let randomAngForce = random(-30, 30);
    let newConfetti = new Confetti(
      x,
      y,
      randomW,
      randomH,
      colours[int(random(colours.length))],
      randomForce,
      randomAngForce
    );
    confetties.add(newConfetti);
  }
}

function mousePressed() {
  cnt = 0;
  mouse[0] = mouseX;
  mouse[1] = mouseY;
}

function mouseReleased() {
  println('gen: ' + cnt);
  gen(mouse[0], mouse[1], cnt);
}

function keyPressed() {
  if (key == 'p' || key == 'P') println('confetties: ' + confetties.size());
}

function draw() {
  if (mousePressed) {
    cnt++;
  }
  background(255);
  for (let idx = confetties.size() - 1; idx >= 0; idx--) {
    let aConfetti = confetties.get(idx);
    aConfetti.update(gravity, friction);
    if (aConfetti.isOutOfScreen()) {
      confetties.remove(idx);
    }
  }
  for (let idx = 0; idx < confetties.size(); idx++)
    confetties.get(idx).display();
}
