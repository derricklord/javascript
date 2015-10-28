function Car(make, model, color, tires){
	if(typeof(make) === 'string') this.make = make || '';
	if(typeof(model) === 'string') this.model = model || '';
	if(typeof(color) === 'string') this.color =  color || '';
	if(typeof(tires) === 'number') this.tires = tires || 4;
	this.sprite = 'car.png';
	this.position = {x:0, y:0};
	this.moving = false;
	this.parked = true;
}

Car.prototype.accelerate = function(){
	this.moving = true;
	this.parked = false;
	var vy = 0;
	var ay = 5;

	if(this.position.y >= 1000){
		this.position.y = 0;
	}else{
		vy += ay;
		this.position.y += vy 
	}
	
}

Car.prototype.brake = function(){
	this.moving = false;
	this.parked = true;
	return 'Car stopped';
}


Car.prototype.update = function(){
		this.accelerate()
		return { 
					data: '<h1>Honda data: (' + this.position.x + ',' + this.position.y + ')</h1> ' +  new Date().toString(),
					car: this.position.y
				}
}


