var car;
var wall;
var Speed;
var Weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  Speed=random(50,180);
  Weight=random(1400,2800);

  car = createSprite(50,200,50,50);
  car.shapeColor = "white";
  car.velocityX = Speed;

  wall = createSprite(1100,200,60,height/2);
  wall.shapeColor=color(80,80,80)

  
}

function draw() {
  background(0,0,0); 
  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX = 0;
    deformation= 0.5*Weight*Speed*Speed/22500

    if(deformation<100) {
      car.shapeColor="green";
    }
    if(deformation>100 && deformation<180) {
      car.shapeColor="yellow";
    }
    if(deformation>180) {
      car.shapeColor="red";
    }
  }
  
  
  drawSprites();
}





//object2=movingRect
//object1=fixedRect