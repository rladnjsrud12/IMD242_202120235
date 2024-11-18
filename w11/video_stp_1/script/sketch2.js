let cp;
let canvasW, canvasH;
let scale;
let cpW, cpH;

function setup() {
  canvasW = 640;
  canvasH = 480;
  createCanvas(canvasW, canvasH);

  scale = 0.1;
  cpW = canvasW * scale;
  cpH = canvasH * scale;
  cp = createCapture(VIDEO);
  cp.size(cpW, cpH);
  cp.hide();
}

function draw() {
  background(255, 0, 0);
  cp.loadPixels();
  for (let idx = 0; idx < cp.pixels.length / 4; idx++) {
    // let colour = cp.pixels[idx];
    let r = cp.pixels[idx * 4];
    let g = cp.pixels[idx * 4 + 1];
    let b = cp.pixels[idx * 4 + 2];
    let a = cp.pixels[idx * 4 + 3];
    let br = brightness([r, g, b]);
    let dia = map(br, 0, 255, 20);
    let x = idx % cpW;
    let y = floor(idx / cpW);
    fill(255);
    circle(x * 10 + 5, y * 10 + 5, dia);
  }
}
