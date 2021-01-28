 var bullet,wall;
 var speed,weight,thickness;
 
 function setup() {
   createCanvas(1200,400)
   speed=random(223,321)
   weight=random(30,52)
   thickness=random(22,83)
 bullet= createSprite(50,200,50,50);
bullet.velocityX=speed;
bullet.shapeColor="white";
wall=  createSprite(1200, 200, thickness, height/2);
wall.shapeColor="black";




 
}

function draw() {
  background("yellow");  
  if (hascollided(bullet,wall)){

  
 
    
      bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
      if(damage>10)
      {
       wall.shapeColor="red";
      }
      if(damage<10)
      {
        wall.shapeColor="green";
      }
      
      }
  
  


  
  
 drawSprites();
}

function hascollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
 else{
    return false;
  }
}

