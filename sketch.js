var bgImg;
var chao;
var kleiton, kleitonImg;
var kleitonShooter;
var zombieImg, zumbiGroup, balaGroup;
var isLeft = false;
var score = 0;
var life = 3, heartImg;
var gameState = "play";

function preload() {
  bgImg = loadImage("assets/bg.jpeg");
  kleitonImg = loadAnimation("assets/correndo1.png", "assets/correndo2.png");
  kleitonImg.frameDelay = 10;
  kleitonShooter = loadAnimation("assets/atirando1.png", "assets/atirando2.png")
  zombieImg = loadImage("assets/zumbi.png");
  explosionSound = loadSound("assets/explosion.mp3");
  lose = loadSound("assets/lose.mp3");
  winning = loadSound("assets/win.mp3");
  heartImg = loadImage("assets/heart_1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  chao = createSprite(width / 2, height - height / 6, width, height / 3);
  chao.shapeColor = "black";
  kleiton = createSprite(100, height / 2 + 200, 20, 60);
  kleiton.addAnimation("normal", kleitonImg);
  kleiton.addAnimation("shooter", kleitonShooter);
  kleiton.scale = 0.5;
  zumbiGroup = new Group();
  balaGroup = new Group();
}

function draw() {
  background(bgImg);
  textSize(20);
  fill("white");

  text("Pontuação = " + score, displayWidth - displayWidth * 0.10, 200);
  if (gameState == "play") {
    if (score == 100) {
      winning.play();
      gameState = "won";
    }
    if (life == 0) {

      lose.play();
      gameState = "lost";
    }
    if (kleiton.y > height - 60) {
      kleiton.y = height - 60;
    }
    if (kleiton.y < height - chao.height) {
      kleiton.y = height - chao.height;
    }
    if (keyDown("UP_ARROW")) {
      kleiton.y = kleiton.y - 30;
    }
    if (keyDown("DOWN_ARROW")) {
      kleiton.y = kleiton.y + 30;
    }
    if (keyWentDown("space")) {
      shoot();
      kleiton.changeAnimation("shooter");
    }
    if (keyWentUp("space")) {
      kleiton.changeAnimation("normal");
    }
    createZombie();
    zumbiDestroy();
    lostLife();
  }
  else if (gameState == "lost") {
    textSize(100);
    fill("red");
    text("Você Perdeu ", 400, 400);
    zumbiGroup.destroyEach();
    kleiton.destroy();
  } else if (gameState == "won") {
    textSize(100);
    fill("yellow");
    text("Você Venceu", 400, 400);
    zumbiGroup.destroyEach();
    kleiton.destroy();
  }
  displayLife(life);
  drawSprites();
}

function createZombie() {
  if (frameCount % 150 == 0) {
    var zombie = createSprite(width, random(height - chao.height, height), 40, 40);
    zombie.addImage(zombieImg);
    zombie.velocityX = -3;
    zombie.scale = 0.5;
    zombie.lifetime = width / zombie.velocityX;
    zumbiGroup.add(zombie);
  }
}

function shoot() {

}

function zumbiDestroy() {
  if (zumbiGroup.isTouching(balaGroup)) {
    for (var i = 0; i < zumbiGroup.length; i++) {
      if(zumbiGroup[i].isTouching(balaGroup)) {
     
      }
    }
  }
}

function displayLife(life) {
  for (i = 1; i <= life; i++) {
    image(heartImg, width - 100 * i, 50, 80, 80);
  }
}

function lostLife() {
  if (zumbiGroup.isTouching(kleiton)) {
    lose.play();

    for (var i = 0; i < zumbiGroup.length; i++) {
      if (zumbiGroup[i].isTouching(kleiton)) {
        zumbiGroup[i].destroy();
        life = life - 1;
      }
    }
  }
}