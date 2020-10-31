var line;
var arc;
hr=hour();
mn=minute();
sc=seconds();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
 
}

function draw() {
  background(255,255,255); 

  stroke(255,0,0);
  strokeWeight(7);
  line(200,200,100,200);
  line(200,200,100,300);
  scAngle=map(sc,0,60,0,360);
  hrAngle=map(hr,0,60,0,360);

 push();
 rotate(scAngle);
 stroke(255,0,0);
 strokeWeight(7);
 line(0,0,100,0);
 pop();
  drawSprites();


}