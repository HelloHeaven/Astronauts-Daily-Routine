var bg,sleep,brush,gym,eat,drink,move,bath
var spaceShipBackground,wall1,wall2,wall3,wall4;

function preload(){

  bg = loadAnimation("iss.png")
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
  bath =loadAnimation("bath1.png","bath2.png");
}


function setup(){
  createCanvas(980,620);

  astronaut = createSprite(500,300,20,20);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.10;
  
  spaceShipBackground=createSprite(490,300,20,20);
  spaceShipBackground.addAnimation("background",bg);
  spaceShipBackground.scale=0.2;

  //right wall
  wall1 = createSprite(980,310,40,700);
  wall1.visible = false;
  //left wall
  wall2 = createSprite(0,310,40,700);
  wall2.visible = false;
  //top wall
  wall3 = createSprite(490,0,1000,40);
  wall3.visible = false;
  //bottom wall
  wall4 = createSprite(490,620,1000,40);
  wall4.visible = false;

}

function draw() {
  background(0); 
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 450;
    astronaut.x = 500;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 490;
    astronaut.x = 500;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 450;
    astronaut.x = 500;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 450;
    astronaut.x = 500;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("SPACE")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 450;
    astronaut.x = 500;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
  astronaut.bounceOff(wall1);
  astronaut.bounceOff(wall2);
  astronaut.bounceOff(wall3);
  astronaut.bounceOff(wall4);

  astronaut.depth = spaceShipBackground.depth;
  astronaut.depth = astronaut.depth + 1;

  wall1.depth = spaceShipBackground.depth;
  wall1.depth = wall1.depth +1;

  wall2.depth = spaceShipBackground.depth;
  wall2.depth = wall2.depth +1;

  wall3.depth = spaceShipBackground.depth;
  wall3.depth = wall3.depth +1;

  wall4.depth = spaceShipBackground.depth;
  wall4.depth = wall4.depth +1;

  createEdgeSprites();
  drawSprites();
}