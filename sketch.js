var bgImg;



function preload(){
  bgImg = loadImage("assets/bg.jpeg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  background(bgImg); 



  drawSprites();
}
