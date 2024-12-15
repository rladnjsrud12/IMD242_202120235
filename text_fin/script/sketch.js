let vid;
let w = 64;
let h = 48;
let scl = 10;

function setup() {
  createCanvas(w * scl * 2, h * scl * 2);
  vid = createCapture(VIDEO);
  vid.size(w, h);
  vid.hide();
}

function draw() {
  background(220);
  vid.loadPixels();

  //chat gpt로 화면 4분할 참고
  image(vid, 0, 0, w * scl, h * scl, 0, 0, w, h);
  image(vid, w * scl, 0, w * scl, h * scl, w, 0, w, h);
  image(vid, 0, h * scl, w * scl, h * scl, 0, h, w, h);
  image(vid, w * scl, h * scl, w * scl, h * scl, w, h, w, h);

  for (let i = 0; i < vid.width; i++) {
    for (let k = 0; k < vid.height; k++) {
      let index = (k * vid.width + i) * 4;
      let r = vid.pixels[index + 0];
      let g = vid.pixels[index + 1];
      let b = vid.pixels[index + 2];
      let a = vid.pixels[index + 3];

      let c = (r + g + b) / 3;
      let s = map(c, 0, 255, 0, 20);

      //chat gpt로 영역마다 색상 정하는 법 참고
      fill(r, g, b);
      ellipse(scl / 2 + i * scl, scl / 2 + k * scl, s, s);
      fill(255, 0, 0);
      ellipse(scl / 2 + (i + w) * scl, scl / 2 + k * scl, s, s);

      fill(50, g, b);
      ellipse(scl / 2 + i * scl, scl / 2 + (k + h) * scl, s, s);

      fill(10);
      ellipse(scl / 2 + (i + w) * scl, scl / 2 + (k + h) * scl, s, s);
    }
  }
}
