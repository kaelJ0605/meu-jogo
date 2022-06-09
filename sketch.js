var bgImg;
var chao;
var kleiton, kleitonImg;
var kleitonShooter;
var zombieImg,zombieGroup;
var lifes = 3;
var coracaoImg;

function preload() {
  bgImg = loadImage("assets/bg.jpeg");
  kleitonImg = loadImage("assets/shooter_1.png");
  kleitonShooter = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png");
  coracaoImg = loadImage("assets/heart_1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  chao = createSprite(width / 2, height - height / 6, width, height / 3);
  kleiton = createSprite(100, height / 2 + 200, 20, 60);
  kleiton.addImage("imagem1", kleitonImg);
  kleiton.addImage("imagem2", kleitonShooter);
  kleiton.scale = 0.2;
  // criação de um grupo
  zombieGroup = new Group();
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
  perderVida();
  createZombie();
  showLifes();
  drawSprites();
}
function createZombie(){
  if (frameCount%150 == 0){
    var zombie = createSprite(width,random(height-chao.height,height),40,40);
    zombie.addImage(zombieImg);
    zombie.velocityX = -3;
    zombie.scale = 0.12;
    zombie.lifetime = -width/zombie.velocityX; 
    zombieGroup.add(zombie);
  }
}
function showLifes(){
for (var i = 1;i<=lifes;i = i+1){
  // multiplicação *
  // divisão /
  // pontência **
  // raiz quadrada **1/2

  image(coracaoImg,width - 100*i,50,50,50);
}
}
function perderVida(){
  // o if é o SE
  if (zombieGroup.isTouching(kleiton)){
    // vetor = ["kael", "mariana"]
    // vetor[0]
    // vetor.length comprimento do array
    // 2 
    for (var i = 0;i < zombieGroup.length;i = i+1){
      if (zombieGroup[i].isTouching(kleiton)){
        zombieGroup[i].destroy();
        lifes = lifes-1;
      }
    }
  }
}