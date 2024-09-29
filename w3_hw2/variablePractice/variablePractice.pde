float x1 = random(width);
float y1 = random(height);
float x2 = random(width);
float y2 = random(height);
float size = random(80, 200);

void setup() {
  size(1280, 720);
  background(0);
}

void draw() {
  x1 = random(width);
  y1 = random(height);
  x2 = random(width);
  y2 = random(height);
  size = random(20, 100);
  
  strokeWeight(2);
  stroke(255, 36, 180, 50);
  fill(255, 30);
  circle(x1, y1, size);
  square(x2, y2, size);
}
