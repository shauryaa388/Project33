var snow1;
var engine, world;

var snow=[];
//var snowflake;

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

function preload() {
 snow1 = loadImage("snow1.jpg")
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;


  }

function draw() {
  Engine.update(engine);
  background(snow1); 
 
  
  for(var i=0;i<100;i++){
    console.log("hey")
    var snowflake=new Snowflake(random(0,800),random(-100,0));
    snow[i]=snowflake;
    
  }

  for(var i=0;i<snow.length;i++){
    snow[i].display();
  }
  
}