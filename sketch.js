
//Global Variables
var player;
var gameover,restart,banana,jungle,stone,ground,t1,t2,ground4,stone3,jungle2,banana1;

var ingroud;
var foodGroup1,obstacleGroup1;


function preload(){
 
 player = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  t1 = loadImage("gameOver.png");
  t2 = loadImage("restart.png");
  banana1 = loadImage("Banana.png");
  jungle2 = loadImage("jungle.jpg");
  stone3 = loadImage("stone.png");
  ground4 = loadImage("ground.jpg");
  
  foodGroup1 = new Group();
   obstaclesGroup1 = new Group();
  
}


function setup() {
  createCanvas(600,300);
  
  
    
  jungle = createSprite(300,420,600,400);
  jungle.addImage(jungle2);
  
  gameover = createSprite(300,100,150,20);
  gameover.addImage( t1);
  gameover.visible = false;
   restart = createSprite(300,150,20,20);
  restart.addImage(t2);
  restart.visible = false;
  ground = createSprite(280,270,650,20);
  ground.addImage(ground4);
  ground.scale = 0.2;
  player = createSprite(100,200,20,50);
 // palyer.addAnimation(player);
  ingroud = createSprite(300,270,650,20);
  ingroud.visible = false;
var score = 0;
}


function draw(){
 background(255); 
  
  
  if(keyDown("space")) {
    player.velocityY = -10;
  }
  
  player.velocityY = player.velocityY + 0.8;
  
  player.collide(ingroud);
  obstacleGroup();
  foodGroup();
 drawSprites();
}
function obstacleGroup(){
  if(World.frameCount % 180 === 0) {
  stone = createSprite(200,250,20,20);
  stone.addImage(stone3);
  stone.velocityX = -2;
  stone.scale = 0.2;
   obstaclesGroup1.add(stone);
  }
}
 function foodGroup(){
  if (World.frameCount % 150 === 0) {
    banana = createSprite(300,100,40,10);
    banana.addImage(banana1);
    banana.scale = 0.1;
    banana.velocityX = -5;
    foodGroup1.add(banana);
  }
 }