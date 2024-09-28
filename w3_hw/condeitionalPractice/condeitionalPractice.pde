void setup() {
  size(360, 640);
}

void draw() {
  background(0);
  
  if(mouseY>height/4*3){
    circle(width*0.5, height*0.87, 100);
  } else if(mouseY>height/4*2){
    rect(width*0.3, height*0.54, 150, 100);
  } else if(mouseY>height/4){
      square(width*0.35, height*0.3, 100);
  } else{
    line(width*.5-50, 30, width*.5+50, 120);
  }
  
  line(0, height/4, width, height/4);
  line(0, height/4*2, width, height/4*2);
  line(0, height/4*3, width, height/4*3);
  stroke(127);
  strokeWeight(4);
}
