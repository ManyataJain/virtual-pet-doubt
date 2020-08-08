//Create variables here
var dog, dogIMG;
var happyDog, happyDogIMG;
var database;
var foodS,foodStock;




function preload()
{
  //load images here
  dogIMG=loadImage("Dog.png");
  happyDogIMG=loadImage("happydog.png");
}

function setup() {
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  createCanvas(500,500);
  dog=createSprite(250,250);
  dog.addImage(dogIMG);
  dog.scale=0.2;
  
}


function draw() {  
  //backGround(46,139,87);

  if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  foodStock=foodStock-1;
  dog.addImage(happyDogIMG)
}else{
  dog.addImage(dogIMG);
}

//  foodStock.update('Food')
  drawSprites();
  //add styles here
  textSize(20);
  text("press up arrow key to feed Drago milk!",120,100);
  


}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}





