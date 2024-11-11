let tileNumX = 16;
let tileNumY = 12;

function setup() {
  createCanvas(640, 480); //void = function
  // size = createCanvas
}

function draw() {
  background(220);
  noStroke();
  fill('gray');
  // for (let column = 0; column < width; column += 40) {
  //   for (let row = 0; row < height; row += 40) {
  //     //f2 - 변수이름 rename
  //     //java는 int float 구분x, 무조건 let 사용
  //     let x = 20 + column;
  //     let y = 20 + row;
  //     let diameter = 30;
  //     circle(x, y, diameter);
  //   }
  // }
  for (let row = 0; row < tileNumY; row++) {
    for (let column = 0; column < tileNumX; column++) {
      let tileW = width / tileNumX;
      let tileH = height / tileNumY;
      let x = tileW * 0.5 + column * tileW;
      let y = tileH * 0.5 + row + tileH;
      ellipse(x, y, tileW, tileH);
    }
  }
}
