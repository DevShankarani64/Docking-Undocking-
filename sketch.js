var spaceCraft, spaceCraftImg;
var backgroundImg;
var capsule, capsuleImg;
var capsuleImg3, capsuleImg4, capsuleImg2;



function setup() {
createCanvas(800,500);
 spaceCraft =createSprite(400, 200, 50, 50);
 capsule = createSprite(400, 400, 50, 50);
}

function preload(){
spaceCraftImg = loadImage("iss.png");
backgroundImg = loadImage("spacebg.jpg");
capsuleImg = loadImage("spacecraft1.png");
capsuleImg4 = loadImage("spacecraft4.png");
capsuleImg3 = loadImage("spacecraft3.png");
capsuleImg2 = loadImage("spacecraft2.png");
}

function draw() {
  background(backgroundImg);  
  spaceCraft.addImage(spaceCraftImg);
  capsule.addImage(capsuleImg);
  capsule.scale= 0.25;

  if (keyIsDown(LEFT_ARROW)){
    capsule.addImage(capsuleImg4);
    capsule.x = capsule.x-3;
    
  }

  if (keyIsDown(RIGHT_ARROW)){
    capsule.addImage(capsuleImg3);
    capsule.x = capsule.x+3;
  }

  if (keyIsDown(UP_ARROW)){
    capsule.y = capsule.y- 3;
  }

  if (keyIsDown(DOWN_ARROW)){
    capsule.addImage(capsuleImg2);
  }
 
 
  if (capsule.isTouching(spaceCraft)){
    fill("White");
    text("Docking successfully", 600,150);
  } 
  else{
  hide(text);
  }
  
  drawSprites();
}

