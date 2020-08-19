var bullet, wall;
var speed, weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 60, 20);
  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, thickness, 800);
  wall.shapeColor = (80, 80, 80);

  bullet.velocityX = speed;

}

function draw() {
  background("black");


  if(isTouching(bullet, wall)){
    damage = 0.5 * weight * speed * speed / thickness * thickness * thickness
    bullet.velocityX = 0;

    if(damage < 10){
      bullet.shapeColor = "green";
    }
    if(damage > 10){
      bullet.shapeColor = "red";
    }
  }
  
  drawSprites();
}

function isTouching(object1, object2){
  if(object2.x - object1.x < object1.width/2 + object2.width/2
     && object1.x - object2.x < object1.width/2 + object2.width/2
     && object2.y -object1.y < object1.height/2 + object2.height/2
     && object1.y - object2.y = object1.height/2 + object2.height/2){
     return true;
  }
  else{
     return false;
  }
}
