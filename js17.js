let car={
    name:'Maruti 800',
    topSpeed:100,
} 
console.log(car)
// If we click on the object 'car' in the console we can see inside that there is [[Prototype]]

// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, 
// so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a 
// prototype that has null for its own prototype.

// When you try to access a property of an object: if the property can't be found in the object itself, the prototype is 
// searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on 
// until either the property is found, or the end of the chain is reached, in which case undefined is returned.
function generalCar(name,givenSpeed) {

    this.name=name;
    this.speed=givenSpeed;
    this.run=function(){
        console.log(`${this.name} is running`);
    }
}

let car1=new generalCar('Maruti Alto',80);
console.log(car1)

generalCar.prototype.getName=function(){
    return this.name;
}

let car2=new generalCar('Skoda Kushaq',100);
console.log(car1)

// car.prototype.getName=function(){
//     return this.name;/* you can't change prototype of object literal object but you can change the prototype of constructor object**/
// }

generalCar.prototype.setName=function (Name) {
    return this.name=Name;
    
}