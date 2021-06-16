

var zombie1, zombie2, zombie3;
var player;
var Bullet;
var zombie1img, zombie2img, zombie3img, playerimg, bulletimg;
var backgroundimg, background1;
var zombie1G, zombie2G, zombie3G, bulletG;
var gameState="play"
  
  function preload(){
    zombie1img=loadImage("zombie1.png")
    zombie2img=loadImage("zombie2.png")
    zombie3img=loadImage("zombie3.png")
    playerimg=loadImage("player.png")
    bulletimg=loadImage("bullet.png")
    backgroundimg=loadImage("BG.jpg")
    }
function setup() {
  createCanvas(1200,600);
  
  //creating background
  background1 = createSprite(900,400,1200,600);
  background1.addImage(backgroundimg);
  background1.scale = 2.5
  
  // creating bow to shoot arrow
  player = createSprite(480,220,20,50);
  player.addImage(playerimg); 
  player.scale = 0.1;
   score = 0  
  zombie1G= new Group();
  zombie2G= new Group();
  zombie3G= new Group();
  bulletG= new Group();
}

function draw() {
background(0);
  if(gameState==="play"){
    background1.velocityX = -3 
    
  if (background1.x < 300){
     background1.x = 900;
    }

    if(keyDown("UP_ARROW")){
      player.y=player.y-5
    }
    
    if(keyDown("DOWN_ARROW")){
      player.y=player.y+5
    }
    
    if(keyDown("RIGHT_ARROW")){
      player.x=player.x+5
    }
    
    if(keyDown("LEFT_ARROW")){
      player.x=player.x-5
    }

    if (keyDown("space")) {
      createBullet();
    }
    var select_zombie = Math.round(random(1,3));
  
    if (World.frameCount % 100 == 0) {
      if (select_zombie == 1) {
        spawnzombie1();
      } else if (select_zombie == 2) {
        spawnzombie2();
      } else{ 
        spawnzombie3();
      }
    }

    if (bulletG.isTouching(zombie1)) {
      gameState= "end"
      zombie1G.destroyEach();
      bulletG.destroyEach();
        score=score+1;
    }
    
    
     if (bulletG.isTouching(zombie2)) {
      gameState= "end"
      zombie2G.destroyEach();
      bulletG.destroyEach();
      score=score+3;
    }
    
    
     if (bulletG.isTouching(zombie3)) {
        zombie3G.destroyEach();
      bulletG.destroyEach();
      score=score+2;
    }

if(player.isTouching(zombie1) || player.isTouching (zombie2) || player.isTouching(zombie3)){
  gameState="end;"
}

  }

  if(gameState==="end"){
  background1.velocityX=0;

  zombie3G.destroyEach();
  zombie3G.setVelocityXEach(0);

  zombie2G.destroyEach();
  zombie2G.setVelocityXEach(0);;

  zombie1.destroyEach();
  zombie1G.setVelocityXEach(0);

  player.velocityX=0;
  player.velocityY=0;

  }

  drawSprites();
    text("Score: "+ score, 500,50);
}


function spawnzombie1() {
  var zombie1 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  zombie1.addImage(zomie1img);
  zombie1.velocityX = 3;
  zombie1.lifetime = 400;
  zombie1.scale = 0.1;
  zombie1G.add(zombie1);
}

function spawnzombie2() {
  var zombie2 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  zombie2.addImage(zombie2img);
  zombie2.velocityX = 3;
  zombie2.lifetime = 400;
  zombie2.scale = 0.1;
  zombie2G.add(zombie2);
}

function spawnzombie3() {
  var zombie3 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  zombie3.addImage(zombie3img);
  zombie3.velocityX = 3;
  zombie3.lifetime = 400;
  zombie3.scale = 0.1;
  zombie3G.add(zombie3);
}



// Creating  arrows for bow
 function createBullet() {
  var Bullet= createSprite(100, 100, 60, 10);
  Bullet.addImage(bulletimg);
  Bullet.x = 360;
  Bullet.y=bow.y;
  Bullet.velocityX = 4;
  Bullet.scale = 0.3;
  bulletG.add(Bullet);
   
}
