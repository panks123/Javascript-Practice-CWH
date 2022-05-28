// Prototype inheritance

console.log('Hello!!!!');

// Just a prototype
const proto={
    slogan: function () {
        return `This is the best company`;       
    },
    changeName: function(name) {
        this.name=name;
        
    }
}

// const pankaj=Object.create(proto); // This creates pankaj object
// console.log(pankaj)
// pankaj.name='Pankaj';
// pankaj.role='Developer';
// console.log(pankaj)

// This also creates pankaj object
const pankaj=Object.create(proto,{
    name:{value:'Pankaj' ,writable:true},
    role:{value:'Developer'},   
})
console.log(pankaj)

pankaj.changeName('Amyra');
console.log(pankaj)

// --------------------------------------------------------------------------------

// Prototype inheritance

// Employee constructor
function Employee(name,salary,experience)
{
    this.name=name;
    this.salary=salary;
    this.experience=experience;
}
// Adding slogan function to the prototype of the Employee object
Employee.prototype.slogan=function() {
    return `This is the best company.  Regards, ${this.name}`;
} 
// Employee object
let Emp1=new Employee('Pankaj',300000,4)
console.log(Emp1)
console.log("Emp1 says: "+Emp1.slogan())

// Programmer constructor which inherits Employee
function Programmer(name,salary,experience,language){
    // call function is used to to inherit from Employee prototype (in this first arg. 'this' represents 'Programmer', name,salary,experience
    // will be inherited from Employee prototype)
    Employee.call(this,name,salary,experience); // We're actually calling the constructor of Employee
    this.language=language;
}

let panks=new Programmer("Pankaj", 300000000,3,"Java")
console.log(panks)
// panks.slogan() // This will give error because the Programmer object has not inherited the prototype of Employee(as slogan() 
// was added in the prototype of Employee (line no. 40))

// Inheriting the prototype of Employee in Programmer prototype
Programmer.prototype=Object.create(Employee.prototype);
let prog1=new Programmer('Amyra',340000,4,'javascript');
console.log(prog1)
// /Now, if we call slogan() , it will work
console.log("prog1 says: "+prog1.slogan())

// But still if we check the prototype  of Programmer , The constructor of the Programmer is not present in its prototype
// So we need to set the constructor manually
// Setting manually the constructor
Programmer.prototype.constructor=Programmer;
console.log(prog1)

// Now if we expand the prototype of Programmer, then its constructor will come


