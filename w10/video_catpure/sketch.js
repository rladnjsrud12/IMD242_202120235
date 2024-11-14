let capture;

function setup() {
  createCanvas(400, 400);
  capture = createCapture(VIDEO); //createCamera는 3d작업할 때 쓰는것
  console.log(capture);
  capture.size(80, 80); //화질선택
  capture.hide();
}

function draw() {
  background(220);
  image(capture, 0, 0, width, height);
}
