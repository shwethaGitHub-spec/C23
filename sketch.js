const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    
    ground = new Ground(200,height,400,20);

   
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log( "X POS: " + box2.body.position.x);
    console.log("Y POS: " + box2.body.position.y);
    console.log("angle: " + box2.body.angle);
    //rectMode(CENTER);
    //rect(ground.position.x,ground.position.y,400,20);

    //ellipseMode(RADIUS);
    //ellipse(ball.position.x, ball.position.y, 20, 20);
    box1.display();
    box2.display();
    ground.display();
}