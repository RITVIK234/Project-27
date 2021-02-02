
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1, bob2,bob3,bob4,bob5;
var string1,string2,string3,string4,string5;
var rod;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1= new Bob(280,400,30);
	bob2= new Bob(340,400,30);
	bob3= new Bob(400,400,30);
	bob4= new Bob(460,400,30);
	bob5= new Bob(620,450,30);

	string1=new String(bob1.body,{x:280,y:200});
	string2=new String(bob2.body,{x:340,y:200});
	string3=new String(bob3.body,{x:400,y:200});
	string4=new String(bob4.body,{x:460,y:200});
	string5=new String(bob5.body,{x:520,y:200});

	rod=new Rod(400,200,300,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rod.display();
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode === 38){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-600,y:-600});

}

}

