//Create variables here
var dog,dogImg,dogImg1;
var database,foodStock,foodS;


function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg.png");
  dogImg1=loadImage("images/dogImg1.png");

}

function setup() {
  database=firebase.database();

	createCanvas(500, 500);
  dog=createSprite(350,250);
  dog.addImage(dogImg);
  dog.scale=0.2;
  
  foodStock=database.ref('food');
  foodStock.on("value",readStock);

 
  
}


function draw() {  
  background("green");

  if(keyWentDown(UP_ARROW)){
   
   dog.addImage(dogImg1);
   writeStock(foodS);
  }

  

  drawSprites();
  //add styles here
  textSize(20);
  fill("white");
  text("press UP_ARROW key to feed drago milk",100,30);


}
//function to read values from Db
function readStock(data){
  foodS=data.val();
}
//function to write values in Db
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}



