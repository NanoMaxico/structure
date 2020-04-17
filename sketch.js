const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var wall1;

function setup() {
  
  
  var canvas = createCanvas(1200,400); 
  engine = Engine.create();
  world = engine.world;

 // createSprite(400, 200, 50, 50);

//wall1 = new Wall(50,400,40,360);
wall1 = new Wall(700,320,70,70);
wall2 = new Wall(920,320,70,70);
wall3 = new Wall(810,260,300, PI/2);
wall4 = new Wall(700,240,70,70);
wall5 = new Wall(920,240,70,70);
wall6 = new Wall(810,180,300, PI/2);
wall7 = new Wall(810,160,70,70);
wall8 = new Wall(760,120,150, PI/7);
wall9 = new Wall(870,120,150, -PI/7);
}

function draw() {
  

  background("cyan");  
  Engine.update(engine);
  
  wall1.display();
  wall2.display(); 
  wall3.display(); 
  wall4.display(); 
  wall5.display(); 
  wall6.display(); 
  wall7.display(); 
  wall8.display(); 
  wall9.display(); 
  
  //wall1.display();
}

