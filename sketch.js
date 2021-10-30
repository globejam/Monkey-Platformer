const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground,player,invisibleGround,invisibleGround2,ground2,ground3,invisibleGround3,spikeImg,spike,spike2,spike3
var sawImg,saw
var sawTrue = true
var monekyImg
var monekyWalk
var monkeyIdle
var monkeyIdle2
var backgroundImg
var backgroundBox
function preload(){
spikeImg = loadImage("RegularSpike01.png")
sawImg = loadImage("saw.png");
monekyImg= loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
monekyWalk= loadAnimation("monkey_8.png","monkey_7.png","monkey_6.png","monkey_5.png","monkey_4.png","monkey_3.png","monkey_2.png","monkey_1.png","monkey_0.png")
monkeyIdle=loadImage("monkey_6.png");
monkeyIdle2=loadImage("monkey_6.png");
backgroundImg = loadImage("background.png");
}

function setup(){
createCanvas(1000,1000)

engine = Engine.create();
  world = engine.world;

ground = new Ground(200,450,2000,50,"green")
ground3 = new Ground(1230,450,70,70,"red")
ground2 = new Ground(2270,450,2000,50,"green")
invisibleGround = createSprite(200,415,2000,50);
invisibleGround.visible=false;

invisibleGround2 = createSprite(2270,415,2000,50);
invisibleGround2.visible=false;

invisibleGround3 = createSprite(1230,415,70,70);
invisibleGround3.visible=false;

spike = createSprite(350,415,25,20);
spike.addImage(spikeImg);
spike.scale = 0.5;

spike2 = createSprite(550,415,25,20);
spike2.addImage(spikeImg);
spike2.scale = 0.5;

spike3 = createSprite(650,415,25,20);
spike3.addImage(spikeImg);
spike3.scale = 0.5;


saw = createSprite(1500,415,25,20);
saw.addImage(sawImg);
saw.scale = 0.25;



player = createSprite(1170,380,50,50);
player.addAnimation("run",monekyImg);
player.addAnimation("walk",monekyWalk);
player.addAnimation("idle",monkeyIdle);
player.addAnimation("idle2",monkeyIdle2);
player.scale = 0.10;
//image(backgroundImg,0,0,width,height)
}

function draw(){
  saw.rotation +=20
  //camera.position.y = player.position.y;
  camera.position.x = player.position.x;
  background(50)
  
  Engine.update(engine);
ground.display();
ground2.display();
ground3.display();
Down()
player.setCollider("rectangle",0,0,50,50);
player.collide(invisibleGround);
player.collide(invisibleGround2);
if(keyWentDown("space")&& player.position.y >= 300){
  player.position.y -=75
  
}
if(player.position.y != 480){
  player.position.y +=1

 }
if(keyIsDown(LEFT_ARROW)){
  player.x -=5 
}

if(keyIsDown(RIGHT_ARROW)){
 player.x +=5 
}

if(keyIsDown(UP_ARROW)){
  player.y -=5 
}

if(keyIsDown(DOWN_ARROW)){
 player.y +=5 
}

if(player.isTouching(invisibleGround3)){
  player.position.x=200;
  
}

if(player.isTouching(spike)){
  player.position.x=200;
  
}

if(player.isTouching(saw)){
  player.position.x=200;
  
}

if(!keyIsDown(RIGHT_ARROW)){
  player.changeImage("idle",monkeyIdle);
}

if(!keyIsDown(LEFT_ARROW)){
  player.changeImage("idle2",monkeyIdle2);
}

if(keyIsDown(LEFT_ARROW)){
  player.changeImage("walk",monekyWalk);
}
if(keyIsDown(RIGHT_ARROW)){
  player.changeImage("run",monekyImg);
}

drawSprites();
}

function Down(){
  if(sawTrue == true){
    saw.position.y-=3
  }
  if(saw.position.y<230){

 saw.position.y= 415
  }

  

}