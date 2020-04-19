
var r = 0;
var g = 0;
var b=255;
var x;
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
createCanvas(1400,700);
}


function draw(){
  x=mouseX
  background(rgb(r,g,b));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  if (r<-5) {
    r=r+1
  }
  else if (r>260) {
    r=r-1
  }
  else if (g<-5) {
    g=g+1
  }
  else if (g>260) {
    g=g-1
  }
  else if (b<-5) {
    b=b+1
  }
  else if (b>260) {
    b=b-1
  }
  else if ((b=>0||b<=255)&&(g=>0||g<=255)&&(r=>0||r<=255)) {
    if (x+1) {
      r=r+0.5;
      g=g+0.3;
      b=b-0.5;
    }
    else if (x-1) {
      r=r-0.7;
      g=g-0.3;
      b=b+0.4;
    } 
  }
  fill("white")
  ellipse(x,340,20,20); 
}