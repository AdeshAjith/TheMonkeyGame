
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  
 
}


function draw() {
  background("white");
    
  textSize(20);  
  score = Math.ceil(frameCount/30);
  text("Survival Time: "+score, 130, 50);
  
  fruits();
  obstacles();
  
  if(ground.x>0){
    ground.x = ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY+0.5;
  
  monkey.collide(ground);
    
  drawSprites();
}

function fruits(){
  if(frameCount%80 === 0){
    var a = Math.round(random(120, 200));
    banana = createSprite(400, a, 20, 20);
    banana.addImage(bananaImage);
    banana.scale = 0.08;
    banana.velocityX = -3;
    banana.lifetime = 150;
    bananaGroup.add(banana);
    
    monkey.depth = banana.depth;
    monkey.depth = monkey.depth+1;
    
  }
}

function obstacles(){
  if(frameCount%100 === 0){
    obstacle = createSprite(400, 325, 20, 20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.lifetime = 150;
    obstacle.scale = 0.15;
    obstacleGroup.add(obstacle);
  }
}





