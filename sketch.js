var fixedrect;
var Movingrect;
function setup() {
  
  createCanvas(800,400);
 fixedrect= createSprite(100, 200, 50, 50);
 Movingrect= createSprite(400,200,50,50);
 fixedrect.shapeColor="red";
 Movingrect.shapeColor="red";
 fixedrect.velocityX=4;
 Movingrect.velocityX=-3;
 
}

function draw() {
  background(0,0,0);  
  drawSprites();
 // Movingrect.x=mouseX;
//Movingrect.y=mouseY;
if(Movingrect.x-fixedrect.x<Movingrect.width/2+fixedrect.width/2
  && fixedrect.x-Movingrect.x<Movingrect.width/2+fixedrect.width/2
 && Movingrect.y-fixedrect.y<Movingrect.height/2+fixedrect.height/2
 && fixedrect.y-Movingrect.y<fixedrect.height/2+fixedrect.height/2){
  fixedrect.shapeColor="blue";
 Movingrect.shapeColor="blue";
 fixedrect.velocityX=fixedrect.velocityX*(-1);
 Movingrect.velocityX=Movingrect.velocityX*(-1);
}
else{
  fixedrect.shapeColor="red";
 Movingrect.shapeColor="red";
}
}