// JavaScript is a dynamic language. You can attach new properties to an object at any time as shown below.
function Student() {
    this.name = 'John';
    this.gender = 'Male';
}

var studObj1 = new Student();
studObj1.age = 15;
console.log(studObj1.age); // 15

var studObj2 = new Student();
console.log(studObj2.age); // undefined

// age property is attached to studObj1 instance. However, studObj2 instance will not have age property
//  because it is defined only on studObj1 instance.

// We need to add the age property in the prototype of Student

Student.prototype.age=15

// For all the Student instance the age will be initialized to 15

console.log(studObj2.age);
console.log("-------------------");

// However, Every student instance will have its own copy of age variable
studObj2.age=19
console.log(studObj1.age); // 15
console.log(studObj2.age); // 19