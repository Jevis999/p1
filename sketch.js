var player,ground,bg,enemy,lt,e;
var playeranim,lanim,lightningGroup,enemiesGroup;
function preload()
{
playeranim = loadImage("thor.jpg");
lanim = loadImage("lightening.png");
bg = loadImage("space.jpg");
}
function setup() {
  createCanvas(displayWidth-30,displayHeight-20);
  
player = new Thor();
player.body.addImage("thor",playeranim);
player.body.scale = 0.5;
ground = new Ground();
enemy = new Enemy();
enemiesGroup = new Group();
lightningGroup = new Group();
}

function draw() {
  background (bg); 

  
    player.display();
    enemy.display();
  drawSprites();
  
}
