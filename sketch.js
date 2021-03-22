
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeObj, stoneObj,groundObj, sling;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var world,boy;

function preload () {
	boy = loadImage ("boy.png")
}

function setup() {
	createCanvas(1370, 610);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	treeObj = new Tree (1050,580);
	stoneObj = new Stone (235,420,30);

	mango1 = new Mango(1170,130,30);
    mango2 = new Mango(1100,100,30);
    mango3 = new Mango(1140,150,40);
    mango4 = new Mango(1000,70,30);
    mango5 = new Mango(1100,70,30);
    mango6 = new Mango(1000,230,30);
    mango7 = new Mango(900,230,40);
    mango8 = new Mango(900,160,40);
    mango9 = new Mango(1010,140,30);
    mango10 = new Mango(1200,200,40);
    mango11 = new Mango(1120,50,40);

	groundObj = new Ground(width/2,600,width,20);
    sling = new SlingShot(stoneObj.body,{x:240,y:380})  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  textSize(30);
  fill('grey');
  text("Press Space to get a second Chance to Play!!",50,50);
  image (boy,200,300,200,380);

  treeObj.display();
  stoneObj.display();
  groundObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  sling.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);
  detectCollision(stoneObj,mango11);
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
		sling.attach(stoneObj.body);
	}
}

function detectCollision(stone,mango) {
	mangoBodyPosition=mango.body.position
    stoneBodyPosition=stone.body.position

    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if (distance<=mango.r+stone.r) 
	{
   Matter.Body.setStatic(mango.body , false);
    } 
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}
function mouseReleased(){
	sling.fly();
}