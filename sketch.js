const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
 //polygon_img=new polygon(290,100,20,20);
  
  
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //level 1
box1 = new Block(640,155,30,40);
box2 = new Block(672,155,30,40);
box3 = new Block(704,155,30,40);
box4 = new Block(736,155,30,40);
box5 = new Block(768,155,30,40);

//level2

box6= new Block(736,100,30,40);
box7 = new Block(704,100,30,40);
box8 = new Block(672,100,30,40);

//top

box9 = new Block(704,50,30,40)

ball = Bodies.circle(50 , 200 ,  20);
  World.add(world , ball);

  slingShot = new SlingShot(this.ball , 
     {x:100 , y:200});
 }


function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  
//stand 2 blocks display
fill("skyblue")
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
fill("turqoise")
box6.display();
box7.display();
box8.display();
fill("pink")
box9.display();


//polygon
//polygon_img.display();









  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 
  imageMode(CENTER)
  image(polygon_img , ball.position.x , ball.position.y , 40 , 40);

  slingShot.display();
 }

 function mouseDragged(){
   Matter.Body.setPosition(this.ball , {x:mouseX , y:mouseY});
 }

 function mouseReleased(){
   slingShot.fly();  
 }

 function keyPressed(){

	if(keyCode===32){
	slingShot.attach(polygon.body);
	
	}
}
  

