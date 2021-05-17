class iron{
	constructor(x,y){
	// assign options to the iron 
	var options={
		'restitution' : 0.3,
		'friction' : 3,
		'denisity' : 30
	}
		
		this.body=Bodies.rectangle(x,y,50,50,options);
        this.width = 98;
        this.height= 65;
		World.add(world, this.body);

	}
	display()
	{
		var pos = this.body.position;
		//pos.x = mouseX;
		//pos.y = mouseY;
		//var angle = this.body.angle;
	
		push();
		translate(pos.x, pos.y);
		//rotate(angle);
		strokeWeight(3);
		stroke('black')
		fill('red')
		//rectMode(CENTER)
		rect(0, 0, this.width, this.height);
		pop();		
	}

}