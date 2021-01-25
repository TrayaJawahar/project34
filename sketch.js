//Create variables here
var dog , hdog , database , foodS , foodstock ;
var dogs ;
function preload()
{
  //load images here
  dog = loadImage("images/Dog.png");
  hdog = loadImage ("images/happydog.png");
}

function setup() {
	createCanvas(500, 500);
  
  var dogs = createSprite(250,350,2,2);
  dogs.addImage(dog);
  dogs.scale=0.3;

  database = firebase.database();
  foodstock = database.ref('Food');
  foodstock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dogs.addImage(hdog);
}


  drawSprites();
  //add styles here
text("Food Remaining:"+foodstock,100,100);
text("Note: Press UP_ARROW Key To Feed Drago Milk")
textSize (5) ;
fill("white");
stroke("black");
}

function readStock(){
  foodS = data.val();
}

function writeStock(){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
