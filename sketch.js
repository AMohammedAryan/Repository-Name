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


  if(isTouching()){
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

function isTouching(){
  if(wall.x - bullet.x < wall.width/2 + bullet.width/2
     && bullet.x - wall.x < bullet.width/2 + wall.width/2
     && wall.y -bullet.y < bullet.height/2 + wall.height/2
     && bullet.y - wall.y = bullet.height/2 + wall.height/2){
     return true;
  }
  else{
     return false;
  }
}
