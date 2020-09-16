var fixedRect, movingRect,box1,box2,box3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1 = createSprite(40, 280,80,30);
  box2 = createSprite(89, 10,80,30);
 box2.velocityY=4;

  box3 = createSprite(400, 200,80,30);

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

 bounceOff(box2,box1);

 
  
  drawSprites();
}

