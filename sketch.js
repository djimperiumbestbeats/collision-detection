var movingrect,fixedrect



function setup() {
 createCanvas(1600,1600);
  fixedrect =createSprite(400, 200, 50, 50);
fixedrect.shapeColor="green"
  movingrect=createSprite(200,200,80,30)
movingrect.shapeColor="green"

}

function draw() {
  background(255,255,255);  
 movingrect.x=mouseX
 movingrect.y=mouseY
 if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&
  movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
  &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
 
    movingrect.shapeColor="red"
 fixedrect.shapeColor="red"
 }
 else{movingrect.shapeColor="green"
 fixedrect.shapeColor="green"
}
 
 
 
  drawSprites();


}