var mainChr,sideChr;
var gamestate = "start";
var answer1, answer2;

function setup() {
  createCanvas(1200,800);
  sideChr = createSprite(400, 200, 30, 30);
  sideChr.shapeColor = "red";
  mainChr = createSprite(600,400,50,50)
  mainChr.shapeColor = "blue";
  answer1 = createSprite(1600,1000,20,20);
  answer2 = createSprite(1600,1000,20,20);
}

function draw() {
  background("black");
   
if(keyDown("UP_ARROW")) {
  sideChr.y = sideChr.y-5;
}
if(keyDown("DOWN_ARROW")) {
  sideChr.y = sideChr.y+5;
 }
 if(keyDown("LEFT_ARROW")) {
  sideChr.x = sideChr.x-5;
 }
 if(keyDown("RIGHT_ARROW")) {
  sideChr.x = sideChr.x+5;
 }

 if(mainChr.collide(sideChr) && gamestate === "start") {
  background("black");

   gamestate = "level1"; 
 }

 if(gamestate === "level1") {
  background("black");

  text("Hi, are you okay?",sideChr.x,sideChr.y-50);
  text("I hope you have a nice day!",sideChr.x,sideChr.y-100); 
  answer1 = createSprite(sideChr.x+200,sideChr.y-50,20,20);
  answer2 = createSprite(sideChr.x+200,sideChr.y-100,20,20);
 }

 if(mousePressedOver(answer1)&& gamestate === "level1") {
   background("black");
   gamestate = "level1A1";
 }

 if(gamestate === "level1A1") {
  background("black");

  answer1.destroy();
  answer2.destroy();
  text("I am doing ok",mainChr.x,mainChr.y-50);
}

 if(mousePressedOver(answer2)&& gamestate === "level1") {
  background("black");
  gamestate = "level1A2";
}

if(gamestate === "level1A2") {
  background("black");

  answer1.destroy();
  answer2.destroy();
  text("Thank you",mainChr.x,mainChr.y-50);
}

  drawSprites();
}