//Pattern for Generic Object
//1. var keyword
//2. name of Object (identifier)
//3. assignment operator =
//4. brackets {} - beginning and ending of object

//ex.   1   2  3  4
//     var Car = { } 

//Compound Object (Generic Object)
var Car = {
    make: 'Honda',  //String Object - Attribute
    model: 'Civic', //String Object - Attribute
    color: 'White', //String Object - Attribute
    tires: 4, //Number Object - Attribute
    image: 'car.jpg', //String Object - Attribute 
    headlight: false,  //Boolean Object - Attribute
    moving: false, //Boolean Object - Attribute
    start: start, //Function Object - Behavior
    stop: stop, //Function Object - Behavior
    turnOnHeadlights: turnOnHeadlights, //Function Object - Behavior
    turnOffHeadlights: turnOffHeadlights //Function Object - Behavior
}  


//Pattern for Function
//1. function keyword
//2. name of Object (identifier)
//3. Parentheses () - input to function object
//4. return statement - output from function object
//5. Brackets {} - beginning and ending of object

//ex.      1          2     3      4                            5
//     function doSomething( ) { return 'Done doing something'; }

//Compound Object (Function Object)
function start(){
    //console.log('Car has Started');
    Car.moving = true;
    return 'Car has Started';
}

function stop(){
    //console.log('Car has Stopped');
    Car.moving = false;
    return 'Car has Stopped';
}

function turnOnHeadlights(){
    Car.headlight = true;
    //console.log('Head Lights on');
    return 'Headlights on'
}

function turnOffHeadlights(){
    Car.headlight = false;
    //console.log('Turn of Headlights');
    return 'Headlights off'
}

//Display Car State
console.log(Car);

//Alter Car State
Car.start();
Car.turnOnHeadlights();
Car.turnOffHeadlights();

//Display Car State
console.log(Car);

var toyota = Object.create(Car);
toyota.make = 'Toyota';
toyota.color = 'Blue';
console.log(toyota);
console.log(toyota.start());
console.log('Has ' + toyota.tires + ' tires');
console.log(typeof(toyota));