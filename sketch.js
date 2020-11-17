
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

var stone,boyImg,boy,slingshot;

function preload(){
boyImg=loadImage("Img/boy.png")

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(400,650,800,20);
	tree=new Tree(610,360,30,100)
	mango1=new Mango(540,230);
	mango2=new Mango(590,250);
	mango3=new Mango(630,180);
	mango4=new Mango(530,300);
	mango5=new Mango(670,280)
	mango6=new Mango(740,250)
	mango7=new Mango(600,230)
	mango8=new Mango(690,200)


	stone=new Stone(65,545);

	slingshot=new SlingShot(stone.body,{x:65,y:545})

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
  Engine.update(engine)

  ground.display()
  tree.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  imageMode(CENTER);
  image(boyImg,110,595,140,240);
  
   slingshot.display()


stone.display()

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
detectCollision(stone,mango7);
detectCollision(stone,mango8);


  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	}
	
	function mouseReleased(){
	slingshot.fly()
	}

	function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.position;
stoneBodyPosition=lstone.position;

var distance=dist(lstone.body.position.x,lstone.body.position.y,lmango.body.position.x,lmango.body.position.y);
if(distance<=lmango.r+lstone.r){
Matter.Body.setStatic(lmango,false);
}


	}
