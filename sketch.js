var fixedrect,movingrect;

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(400, 400, 50, 50);
  movingrect = createSprite(600,600,70,40);
  fixedrect.shapeColor = "orange";
  movingrect.shapeColor = "orange";
}

function draw() {
  background(255,255,255);
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2
    && fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2
    && movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2
    && fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2)
  {
    fixedrect.shapeColor = "blue";
   movingrect.shapeColor = "blue";
  }  
  else
  {
    fixedrect.shapeColor = "orange";
    movingrect.shapeColor = "orange";
  }
  drawSprites();
}