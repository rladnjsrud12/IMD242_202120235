int randomSeed = int(random(100000));

void setup() {
  size(800, 800);
  colorMode(HSB, 360, 100, 100);
}

void mousePressed() {
  randomSeed = int(random(10000000));
  println(randomSeed);
}

void draw() {
  randomSeed(randomSeed);
  background(230, 0, 0);

  float starCount = random(40, 100);
  for (int k=0; k<starCount; k++) {
    pushMatrix();
    noStroke();
    fill(61, 15, 100);
    circle(random(width), random(height), 4);
    popMatrix();
  }


  for (int z=0; z<40; z++) {
    float lineX = random(width);
    float lineY = random(height);
    stroke(61, 15, 100, 90);
    line(lineX, lineY, lineX+20, lineY+20);
  }


  noStroke();
  fill(112, 16, 100);
  rect(0, 700, width, 800);

  for (int n=0; n<6; n++) {
    house(random(10, 700), 0,
      random(100, 200), random(100, 400));
  }
}

void house(float x, float y, float w, float h) {

  stroke(random(36), 80, 80);


  pushMatrix();
  translate(0, height);
  scale(1, -1); //chatgpt 사용
  fill(random(360), 50, 100);
  rect(x, y, w, h, 10);
  popMatrix();

  float windowN = random(1, 3);
  for (int i=0; i<windowN; i++) {
    float windowW = random(20, 50);
    float windowH = random(40, 70);

    float windowX = x+random(10, w-windowW-10);
    float windowY = y+random(10, h-windowH-10);
    //chatgpt 사용

    pushMatrix();
    translate(0, height);
    scale(1, -1); //chatgpt 사용
    fill(random(360), 20, 100);
    rect(windowX, windowY, windowW, windowH, 5);
    popMatrix();
  }
}
