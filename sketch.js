var  paperSprite;
var paperBody,ground,groundSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1,wall2,ground1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	wall1=createSprite(500,590,20,100)
	wall2=createSprite(300,590,20,100)

	paperSprite=createSprite(width/2, 80, 10,10);
	paperSprite.scale=3
	paperSprite.shapeColor=color("white");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	paperBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, paperBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	
	
	ground1=new Ground(400,630,200,20);
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  wall1.shapeColor=color("gray");
  wall2.shapeColor=color("gray");
  Engine.update(engine);
  paperSprite.x= paperBody.position.x
  paperSprite.y= paperBody.position.y 

 
  ground1.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
			Matter.Body.setStatic(paperBody,false) 
	}
}