ArrayList<Balloon> balloons = new ArrayList<Balloon>();
ArrayList<Particle> particles = new ArrayList<Particle>();
int numBalloons = 30;
int cnt=0;

void setup() {
  fullScreen();
  for (int n = 0; n < numBalloons; n++) {
    Balloon b = new Balloon();
    b.init(random(width), height + random(50, 200));
    balloons.add(b);
  }
}

void draw() {
  background(240, 248, 255);

  for (int i = balloons.size() - 1; i >= 0; i--) {
    Balloon b = balloons.get(i);
    b.update();
    b.display();
  }

  for (int i = particles.size() - 1; i >= 0; i--) {
    Particle p = particles.get(i);
    p.update();
    p.display();
    if (p.isDead()) {
      particles.remove(i); //chat gpt를 사용하여 파티클이 터지는 것을 설정함.
    }
  }
}

void mousePressed() {
  for (int i = balloons.size() - 1; i >= 0; i--) {
    Balloon b = balloons.get(i);
    if (dist(mouseX, mouseY, b.pos[0], b.pos[1]) < b.size / 2) {
      explodeParticles(b.pos[0], b.pos[1], b.colors);
      balloons.remove(i);
      cnt++; //풍선 터지는 개수
    }
  }
}

void mouseReleased() {
  println(cnt); //풍선을 얼마나 터트렸는지 확인할 수 있게 함.
}
