class Enemy {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 20;
        this.height = 20;


    }
    display() {
       //console.log(this.x);
        var rnum = 0;
        if (frameCount % 60 === 0) {
            e = createSprite(this.x, this.y, this.width, this.height);
            rnum = random(0, displayWidth);
            this.x = rnum;
            e.velocityY = 2;
        }
console.log(lightningGroup);
        if (lightningGroup.isTouching(e))
        {
            e.visible = false;
        }

    }
}