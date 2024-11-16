class Balloon {
  float[] pos;
  float[] vel;
  float[] colors;
  float size;

  Balloon() {
    pos = new float[2];
    vel = new float[2];
    colors = new float[3];
    size = 60;
  }

  void init(float x, float y) {
    pos[0] = x;
    pos[1] = y;

    vel[0] = 0;
    vel[1] = -random(1, 3);
    //풍선의 속도 조절 코드를 쓰고싶어서 chat gpt사용하였다.

    colors[0] = random(0, 255);
    colors[1] = random(0, 255);
    colors[2] = random(0, 255);
  }

  void update() {
    pos[1]+=vel[1];

    if (pos[1]<-size) {
      pos[1]=height+size;
    }
  }

  void display() {
    push();
    translate(pos[0], pos[1]);
    noStroke();
    fill(colors[0], colors[1], colors[2]);
    ellipse(0, 0, size, 70);
    //fill(0);
    triangle(-20, 40, 20, 40, 0, 10);
    stroke(255);
    strokeWeight(2);
    line(0, 40, 0, 120);
    fill(255, 80);
    noStroke();
    circle(8, -15, 20);
    pop();
  }
}
