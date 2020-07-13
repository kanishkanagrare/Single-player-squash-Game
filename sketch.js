                                                                   var ball,img,paddle;
var song;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
  //song=loadSound("s.mp3");
}
function setup() {
  createCanvas(400, 400);
 // song.play();
  ball=createSprite(40,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=9;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg);
  
  song=loadSound("s.mp3");
  }


function playit(){

}
function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle,explosion);
  paddle.collide(edges);
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  
   
if(ball.x>400){
  
  ball.x=200;
  ball.y=200;
  ball.velocityY=0;
  ball.velocityX=0;
  song.play();
  textSize(20);
  text("Game Over",100,100);
        
  }
  drawSprites();
  
  
}

function explosion()
{
  ball.velocityY=random(-8,8);
}

