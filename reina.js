
var Car = {
    make: 'Honda',  //String Object - Attribute
    model: 'Civic', //String Object - Attribute
    color: 'White', //String Object - Attribute
    tires: 4, //Numer Object - Attribute
    image: 'car.jpg',
    headlight: false,
    moving: false,
    start: start, //Function Object - Behavior
    stop: stop, //Function Object - Behavior
    turnOnHeadlights: turnOnHeadlights, //Function Object - Behavior
    turnOffHeadlights: turnOffHeadlights //Function Object - Behavior
}  //Compound Object

function start(){
    //console.log('Car has Started');
    Car.moving = true;
}

function stop(){
    //console.log('Car has Stopped');
    Car.moving = false;
}

function turnOnHeadlights(){
    Car.headlight = true;
    //console.log('Head Lights on');
}

function turnOffHeadlights(){
    Car.headlight = false;
    //console.log('Turn of Headlights');
}

//Display Car State
console.log(Car);

//Alter Car State
Car.start();
Car.turnOnHeadlights();
Car.turnOffHeadlights();

//Display Car State
console.log(Car);