//Create variables here
var dog;
var happyDog;
var foodStock;
var foodS;
var database;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  console.log(database);
  var dog = createSprite(200,200,20,20);
  dog.addImage(dogImg);
}


function draw() {  
  background(46,139,87);
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }
readStock();
writeStock();

  drawSprites();
}

//function to read the values from database
function readStock(data){
foodS = data.val();
}
function writeStock(x){
  if (x <= 0){
    x = 0;
   } else{
    x=x+1;
  }
 /* textSize(30);
  fill("black");
  stroke("pink");
  text("Note:Please Press the Up Arrow for feeding the dog ", 350,200);
*/
var foodS = database.ref('/').update({
  Food:x
})
};



