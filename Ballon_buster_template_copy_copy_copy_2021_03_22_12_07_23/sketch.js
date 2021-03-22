var red_Balloon,redBalloonImage; 
var blue_Balloon, blueBalloonImage; 
var green_Balloon, greenBalloonImage;
var bow, bowImage;
var backgroundground, backgroundgroundImage;
var arrow, arrowImage;


function preload(){
 //load your images here 
 red_BalloonImage = loadImage("red_balloon0.png");
 blue_BalloonImage = loadImage("blue_balloon0.png");
 green_BalloonImage = loadImage("green_balloon0.png");
 bowImage = loadImage("bow0.png");
 backgroundImage = loadImage("background0.png");
 arrowImage = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
  
  createEdgeSprites();
  
 //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  background.x = background.width/2;
  //background.velocityX=-4;
  
  //ground.x = ground.width /2;
  
  /*for (var i = 60; i<390;i = i+60){
    redBalloon = createSprite(50,i,1,1);
    redBalloon.addImage(redBalloonImage);
    redBalloon.scale = 0.05;
  }*/
  
  //create line of red balloons using for loop
  for(var i=60;i<390;i=i+60){
  red_Balloon = createSprite(50, i, 1, 1);
  red_Balloon.addImage(red_BalloonImage);
  red_Balloon.scale = 0.1;
}
  
  //create line of green balloons using for loop
  for(var i=110;i<390;i=i+60){
  green_Balloon = createSprite(100, i, 1, 1);
  green_Balloon.addImage(green_BalloonImage);
  green_Balloon.scale = 0.1;
}
 
  for(var i=110;i<390;i=i+60){
  blue_Balloon = createSprite(150, i, 1, 1);
  blue_Balloon.addImage(blue_BalloonImage);
  blue_Balloon.scale = 0.1;
}
  
  bow = createSprite(300,200,20,100);
  bow.addImage(bowImage);
  bow.scale = 1.4;

}

function draw() {
  
  bow.y = World.mouseY;

  //add code here
   drawSprites();
}

