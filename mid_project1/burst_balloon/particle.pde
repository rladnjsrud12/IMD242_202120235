class Particle {
  float x, y;
  float vx, vy;
  float size;
  float lifespan;
  float[] colors;

  Particle(float x, float y, float[] colors) {
    this.x = x;
    this.y = y;
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
    this.size = random(5, 10);
    this.lifespan = 255;
    this.colors= colors;
  }

  void update() {
    x += vx;
    y += vy;
    lifespan -= 5;
  }

  void display() {
    noStroke();
    fill(colors[0],colors[1],colors[2],lifespan);
    rect(x, y, size, size);
  }

  boolean isDead() {
    return lifespan <= 0;
  }
}

void explodeParticles(float x, float y, float[] colors){
  int numParticles = 15; 
  for (int i = 0; i < numParticles; i++) {
    particles.add(new Particle(x, y, colors));
  }
}
