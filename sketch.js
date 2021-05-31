var  dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
  dogImg = loadImage("dogImg.png");
  dogImg1 = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  dog = createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale = 0.15;
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

    
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  fill(255,255,254);
  stroke("black");

  text("Food Remaining:" + foodS, 170,200);
}

function readStock(data){
  foodS=data.val();
}

function writeStock (x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food: x 
  })
}

