class stone{
    constructor(x,y,height,width){

        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 90;
        this.height = 65;
        World.add(world, this.body);
    

     var options = {
        "restitution":0.8,
        "friction":0.8,
        "density":12
     }
    }
    display(){
        var pos=this.body.position;	
        //var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
       // rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
			stroke("black");
        fill("green");
        //draw the rect here to display the iron 
 rect(0,0,this.width,this.height);
        pop()
    }

    }

   


