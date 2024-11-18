let gradientText = ' .:-=+*#%@';

let canvasSize = [640, 480];
let scale = 0.1;
let captureSize = [canvasSize[0] * scale, canvasSize[1] * scale];
let tileWidth = canvasSize[0] / captureSize[0];

let capture;

function setup() {
  createCanvas(canvasSize[0], canvasSize[1]);
  capture = createCapture(VIDEO, { flipped: true }); //카메라 좌우반전
  capture.size(captureSize[0], captureSize[1]);
  capture.hide();
}

function draw() {
  background(0);
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  // text(gradientText.charAt(3), 20, 20);
  capture.loadPixels();
  for (let idx = 0; idx < capture.pixles.length / 4; idx++) {
    let r = capture.pixles[4 * idx + 0];
    let g = capture.pixles[4 * idx + 1];
    let b = capture.pixles[4 * idx + 2];
    let a = capture.pixles[4 * idx + 3];
    let bright = brightness([r, g, b]);
    let gridentIdx = map(bright, 0, 255, 0, gradientText.length - 1);
    gridentIdx = floor(gridentIdx);
    let asciiText = gradientText.charAt(gridentIdx);
    let column = idx % captureSize[0];
    let row = idx / captureSize[0];
    let x = column * tileWidth + tileWidth * 0.5;
    let y = row * tileWidth + tileWidth * 0.5;
    text(asciiText, x, y);
  }
}
