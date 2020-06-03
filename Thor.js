class Thor
{
constructor()
{

    this.width = 10;
    this.height = 10;
    //this.visibility = true;
    this.x = displayWidth/2;
    this.y = displayHeight-displayHeight/4;
    this.body = createSprite(this.x,this.y,this.width,this.height);

}
display(){

    if(keyDown(LEFT_ARROW))
    {
        this.body.x = this.body.x - 5;
        
    }
    if(keyDown(RIGHT_ARROW))
    {
      this.body.x = this.body.x + 5;}
      if(keyWentDown("space"))
      {  
        lt = createSprite(player.body.x,player.body.y - 25,20,20);
          lt.addImage("light",lanim);
          lt.scale = 0.2;
          lt.velocityX = 0;
           lt.velocityY = -3;
           lightningGroup.add(lt);
      }
     

}


}