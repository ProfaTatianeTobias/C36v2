var form, player, game;
var backgroundImg;

function preload(){
    backgroundImg = loadImage("./assets/planodefundo.png");
}

function setup(){
    
    createCanvas(windowWidth, windowHeight);
    game = new Game();
    game.start();
    
}

function draw(){
   background(backgroundImg);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

