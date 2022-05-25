var bgImg;
var chao;
var kleiton, kleitonImg;
var kleitonShooter;
var zombieImg;

function preload() {
  bgImg = loadImage("assets/bg.jpeg");
  kleitonImg = loadImage("assets/shooter_1.png");
  kleitonShooter = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  chao = createSprite(width / 2, height - height / 6, width, height / 3);
  kleiton = createSprite(100, height / 2 + 200, 20, 60);
  kleiton.addImage("imagem1", kleitonImg);
  kleiton.addImage("imagem2", kleitonShooter);
  kleiton.scale = 0.2;
}

function draw() {
  background(bgImg);
  if (kleiton.y > height - 60) {
    kleiton.y = height - 60;
  }
  if (kleiton.y < height - chao.height){
    kleiton.y = height - chao.height;
  }
  if (keyDown("UP_ARROW")) {
    kleiton.y = kleiton.y - 30;
  }
  if (keyDown("DOWN_ARROW")) {
    kleiton.y = kleiton.y + 30;
  }
  if (keyWentDown("space")){
    kleiton.changeImage("imagem2");
  }
  if (keyWentUp("space")){
    kleiton.changeImage("imagem1");
  }
  createZombie();
  drawSprites();
}
function createZombie(){
  if (frameCount%150 == 0){
    var zombie = createSprite(width,random(height-chao.height,height),40,40);
    zombie.addImage(zombieImg)
    zombie.velocityX = -3
    zombie.scale = 0.12

  }
}
