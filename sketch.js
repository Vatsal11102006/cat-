var tom1,tom2,tom3
var jerry1,jerry2,jerry3
var bgimage
function preload() {
    //load the images here
    bgimage=loadImage("images/garden.png");
    tom1=loadAnimation("images/cat1.png");
    tom2=loadAnimation("images/cat2.png","images/cat3.png");
    tom3=loadAnimation("images/cat4.png");

    jerry1=loadAnimation("images/mouse1.png");
    jerry2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(870,600);
tom.addAnimation("sittingcat",tom1);
tom.scale=0.2;

jerry=createSprite(200,600);
jerry.addAnimation("sittingmouse",jerry1);
jerry.scale=0.15;

}

function draw() {

    background(bgimage);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX=0;
        tom.addAnimation("sittingcat",tom3);
        tom.scale=0.2;
        tom.changeAnimation("sittingcat",tom3);

        jerry.addAnimation("sittingcat",jerry3);
        jerry.scale=0.15;
        jerry.changeAnimation("sittingcat",jerry3);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
     tom.addAnimation("mouseTeasing",tom2);
      tom.changeAnimation("mouseTeasing");
    // tom.frameDelay = 25;
    tom.velocityX=-5;

     jerry.addAnimation("mouseTeasing",jerry2);
     jerry.changeAnimation("mouseTeasing");
    jerry.frameDelay = 25;

  }

}
