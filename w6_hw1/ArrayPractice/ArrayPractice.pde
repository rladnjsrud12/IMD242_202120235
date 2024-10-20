int[] fruitAmts;
String[] fruitNames = {
  "Orange", "Peach", "Lemon", "Plum", "KiWi", "Plum"};

float barGap = width/0.8;
float barWidth = width/2;
float x = width/0.6;
int total;
int average;

void setup() {
  size(1280, 720);
  colorMode(HSB, 360, 100, 100, 100);

  fruitAmts = new int[fruitNames.length];
  for (int n = 0; n < fruitAmts.length; n++) {
    fruitAmts[n] = int(random(5, 100));
    total += fruitAmts[n];
  }
  average=total/fruitNames.length;
}

void draw() {
  background(0, 13, 100);

  strokeWeight(barWidth);

  for (int n = 0; n < fruitNames.length; n++) {
    stroke(0, 59, 100);
    //strokeCap(SQUARE);
    textAlign(CENTER);
    textSize(30);
    fill(0, 55, 55);
    line(x + barGap * n, height * 0.5,
      x + barGap * n, height * 0.5 - 2 * fruitAmts[n]);
    text(fruitNames[n],
      x + barGap * n, height * 0.56 + 30);
    text(fruitAmts[n],
      x + barGap * n, height * 0.46 - 2 * fruitAmts[n] - 20);

    fill(0, 76, 28);
    text("Fruit total: "+total, width/2, height/1.28);
    text("Fruit average: "+average, width/2, height/1.18);
  }
}
