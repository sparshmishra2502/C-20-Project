var cat,mouse,catImage,mouseImage,backgroundImage;

function preload() {
    //load the images here

    catImage = loadImage("tomOne.png")
    mouseImage = loadImage("jerryOne.png")
    backgroundImage = loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(250,250,30,10) 
    cat.scale = 0.2;

    mouse = createSprite(200,250,10,10)
    mouse.scale = 0.1;
 
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x<(cat.width- mouse.width)/2){
       cat.addAnimation("catLastImage",catImg3);
       cat.changeAnimation("catLastImage");
    }

    Text(mouseX + ',' + mouseY,10,45);

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    
  if(keyCode === LEFT_ARROW){
     cat.velocityX = -5;
     cat.addAnimation("catRunning",catImg2);
     cat.changeAnimation("catRunning");
  }



}
