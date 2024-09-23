float speed=3;
float x=0;

void setup() {
  size(1000, 700);
}

void draw() {
  background(mouseX, mouseY, 0);
  x=x+speed;
  fill(255);
  circle(x-170, 700, 100); //꼬리
  ellipse(x, 700, 300, 700); //몸
  ellipse(x-10, 180, 70, 250); //귀
  ellipse(x+60, 180, 70, 250); //귀
  circle(x+30, 350, 300); //얼굴
  ellipse(x+40, 430, 200, 150); // 얼굴 앞
  circle(x+100, 320, 70); //눈
  circle(x-20, 320, 70); //눈
  fill(0);
  ellipse(x+50, 400, 40, 25); //코
  circle(x-10, 320, 50); //눈알
  circle(x+110, 320, 50); //눈알
}

void mousePressed (){
}
