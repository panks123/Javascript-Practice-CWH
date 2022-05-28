console.log('HELLO')

// object literal - creating objects

let car={
    name:'Maruti 800',
    topSpeed:100,
    run:function() {
        console.log('car is running');
    }
}  
console.log(car)
console.log(typeof car)
// Now we can call the 'car' object's methods and properties:
console.log(car.name,car.topSpeed);
car.run();

// Other way of creating object is by using constructors/ function constructors
// Constructors (using function keyword)
function generalCar(name,givenSpeed) {
    this.name=name;
    this.speed=givenSpeed;
    this.run=function(){
        console.log(`${this.name} is running`);
    }

    this.analyze=()=>{
        console.log(`This car is slower by ${200-this.speed} kmph than Mercedes`)
    }
}

// If we call the function using new keyword then it will act as a constructor 
let car1=new generalCar('Maruti alto',80); // car1 object is created
console.log(car1);
console.log(typeof car1)
// Now we can call the 'car1' object's methods and properties:
console.log(car1.name,car1.speed);
car1.run();
car1.analyze()