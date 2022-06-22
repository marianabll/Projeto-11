var mar, marImg;
var barco, barcoImg;


function preload(){
  marImg = loadImage("sea.png");
  barcoImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);

  mar = createSprite(400, 200);
  mar.addImage(marImg);
  mar.scale = 0.3;
  mar.velocityX = -3;

  barco = createSprite(200,250);
  barco.addAnimation("barquinho", barcoImg)
  barco.scale = 0.3
  
}

function draw() {
  background("blue");

  if (mar.x < 0) {
    mar.x = 400
  }

  drawSprites();
}
