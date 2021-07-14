
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)
  object=Bodies.rectangle(100,100,50,50,{isStatic:true})
  World.add(world,object)
}
function draw()
{
  background(0);
  rectMode(CENTER);
  console.log(object.position.x)
    rect(object.position.x,object.position.y,50,50);
    circle(200,object.position.y,50,50);
    rect(300,object.position.y,50,50);
  
}
