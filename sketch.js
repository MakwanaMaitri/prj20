var tom ,tomImg;
var jerry, jerryImg;


function preload() {
    //load the images here
    tomImg = loadAnimation("images/tomTwo.png","images/tomThree.png");

    jerryImg = loadAnimation("images/jerryTwo.png","images/jerryThree.png");

    gardenImg = loadImage("images/garden.png");


                     
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here


    garden = createSprite(200,300);
    garden.addImage("garden", gardenImg);

    tom = createSprite(620,430,30,60);
    tom.addAnimation("tom",tomImg);
    tom.scale = 0.2;
    tom.velocityX = -3;

    jerry = createSprite(100,500,30,50);
    jerry.addAnimation("jerry",jerryImg);
    jerry.scale = 0.2;

  
   

   
}

function draw() {

    background(255);

  

    //Write condition here to evalute if tom and jerry collide
     if(jerry.x - tom.x < (jerry.width - tom.width)/2){
        
        jerry.addAnimation("jerryFour.png",jerryImg);
        jerry.changeAnimation("jerryFour.png");
        
     }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    tom.velocityX = 0;
     tom.addAnimation("tomRunning", tomImg);
     tom.changeAnimation("tomFour.png");

    }

}


