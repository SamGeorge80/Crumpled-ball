class DustBin{
    constructor(x,y,width,height){
        var options = {
         isStatic:true   
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,height,options);
        World.add(world,this.body)

    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill("Blue");
        rect(0,-50,120,150);
        pop();
    }
     
}
