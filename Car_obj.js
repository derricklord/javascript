function Car(make, model, color, tires){
	if(typeof(make) === 'string') this.make = make || '';
	if(typeof(model) === 'string') this.model = model || '';
	if(typeof(color) === 'string') this.color =  color || '';
	if(typeof(tires) === 'number') this.tires = tires || 4;
	this.sprite = '';
	this.position = {x:0, y:0};
	this.moving = false;
	this.parked = true;
}

Car.prototype.accelerate = function(){
	this.moving = true;
	this.parked = false;
	this.position.y += 5;
	return 'Car started';
}

Car.prototype.brake = function(){
	this.moving = false;
	this.parked = true;
	return 'Car stopped';
}

Car.prototype.update = function(){
		this.accelerate()
		return '<h1>Honda data: (' + this.position.x + ',' + this.position.y + ')</h1> ' +  new Date().toString();
}



module.exports = Car;