console.log('ES6 classes and inheritance')

// Class
class Employee{
    // constructor - 'constructor' keyword is used to create a constructor
    constructor(name,givenExperience,givenDivision)
    {
        this.name=name; // a property of Employee
        this.experience=givenExperience; // a property of Employee
        this.division=givenDivision; // a property of Employee
    }
    // a method of Employee
    slogan(){
        return `I am ${this.name} and my company is the best`;
    }
    // a method of Employee
    joiningYear()
    {
        return 2020-this.experience;
    }

    // static method of Employee
    static add(a,b)
    {   console.log('add() called')
        return a+b;
    }
}

// static method can be called without creating an object
// console.log(Employee.add(3+4))

// creating Employee object
let emp1=new Employee('Pankaj',5,1)
console.log(emp1);
console.log(emp1.joiningYear())
console.log(emp1.slogan())
console.log(Employee.add(3,4)) // We can call static methods without creating objects

// creating class Programmer which inherits class Employee

class Programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,language)
    {
        super(givenName,givenExperience,givenDivision); // calling super class constructor
        this.language=language;
    }
    favouriteLanguage(){
        if(this.language=='Python')
        {
            return 'Python';
        }
        else{
            return 'JavaScript';
        }
    }
    static multiply(a,b)
    {
        return a*b;
    }
}
// creating Programmer object

let pro1=new Programmer('Amyra',6,1,'Python')
console.log(pro1);
console.log(pro1.joiningYear())
console.log(pro1.slogan())
console.log(Programmer.add(33,44))
console.log(Programmer.multiply(3,4))