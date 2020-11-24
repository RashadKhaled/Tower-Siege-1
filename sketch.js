const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var score=0
function setup() {
  createCanvas(1300,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground= new Ground(650,390,1300,20);
  platform= new Ground(700,200,200,20);
  box1= new Box(640,175,35,40);
  box2= new Box(675,175,35,40);
  box3= new Box(710,175,35,40);
  box4= new Box(745,175,35,40);
  box5= new Box(780,175,35,40);
  box6= new Box(675,135,35,40);
  box7= new Box(710,135,35,40);
  box8= new Box(745,135,35,40);
  box9= new Box(710,95,35,40);
  polygon= new Polygon(50,200,30)
  slingshot= new Slingshot(polygon.body,{x:100,y:200})
  
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  text(mouseX+","+mouseY,mouseX,mouseY);
  ground.display()
  platform.display()
  box1.display()
  box1.score()
  box2.display()
  box2.score()
  box3.display()
  box3.score()
  box4.display()
  box4.score()
  box5.display()
  box5.score()
  box6.display()
  box6.score()
  box7.display()
  box7.score()
  box8.display()
  box8.score()
  box9.display()
  box9.score()
  polygon.display()
  slingshot.display()
  textSize(20);
  text("Score:"+score,20,20)
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
if(keyCode==32){
  slingshot.attach(polygon.body)
}

}