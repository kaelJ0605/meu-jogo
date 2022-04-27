var bgImg;
var chao;
var kleiton,kleitonImg;

function preload(){
  bgImg = loadImage("assets/bg.jpeg")
  kleitonImg = loadImage("assets/shooter_1.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  chao = createSprite(width/2,height-140,width,270);
  kleiton = createSprite(40,height/2+200,20,60);
  kleiton.addImage("imagem1",kleitonImg);
  kleiton.scale = 0.3;
}

function draw() {
  background(bgImg); 
 


  drawSprites();
}
