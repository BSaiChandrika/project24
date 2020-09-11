
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,box1,box2,box3; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	  paper=new Paper(100,170,20);

	  ground=new Ground(400,200,800,20);

      box1=new Dustbin(600,170,150,20);
	  box2=new Dustbin(525,130,20,70);
	  box3=new Dustbin(675,130,20,70);

   	Engine.run(engine);

	console.log(ground);
  
}


function draw() {
  background(0);

	ground.display();
	
	box1.display();
  	box2.display();
	box3.display();

	paper.display();

	text (mouseX+","+mouseY,mouseX,mouseY);

  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
}



