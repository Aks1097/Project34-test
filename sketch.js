const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function preload() {
Superhero=loadImage("Images/Superhero-02.png");
bg=loadImage("Images/GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
    engine = Engine.create();
    world = engine.world;

     ground = new Ground(600,380,1200,20);
     hero = new Hero(200,450,40);
     fly = new Fly(pos1,pos2);
}

function draw() {
background(bg);
  Engine.update(engine);
  hero.display();
  fly.display();
  ground.display();

  
}

function mouseReleased(){
  fly.fly();
  gameState = "launched";
}
