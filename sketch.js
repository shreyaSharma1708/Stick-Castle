const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var log1;

function setup() {
    rectMode(CENTER);
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,400,600,20); 

    log1 = new logs(160, 340, 20, 100);
    log2 = new logs(200, 340, 20, 100);
    log3 = new logs(180, 290, 20, 50);
    log4 = new logs(220, 327.5, 20, 125);
    log5 = new logs(140, 327.5, 20, 125);
    log6 = new logs(240, 340, 20, 100);
    log7 = new logs(120, 340, 20, 100);
    log8 = new logs(90, 290, 40, 200);
    log9 = new logs(270, 290, 40, 200);

    rooftop1 = new rooftops(55, 190, 125, 190, 90, 130);
    rooftop2 = new rooftops(235, 190, 305, 190, 270, 130);
}

function draw() {
    background(255,255,255);  

    ground.display();
    log1.display();
    log2.display();
    log3.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();
    log9.display();
    rooftop1.display();
    rooftop2.display();
}