var Car = require('./Car_obj')

var honda = new Car('Honda', 'Accord', 'silver', 4);
var counter = 0;

console.log(honda);
for(var i = 0; i<5; i++){
	honda.accelerate();
}
console.log(honda);