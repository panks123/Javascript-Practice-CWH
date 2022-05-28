console.log("JS30")

// Destructuring

let a,b
[a,b]=[34,45]
console.log(a)
console.log(b)

console.log('===============================');
// Array destructuring
[a, b, c, ...d] = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13];

console.log('a=',a)
console.log("b=",b)
console.log("c=",c)
console.log("d=",d)

console.log('-------------------------------');
// Object destructuring
({a,b,c, ...d}={a:11,b:22,c:33,d:45,e:34,f:89})

console.log('a=',a)
console.log("b=",b)
console.log("c=",c)
console.log("d=",d)

// Array destructuring
let fruits=['Lemon',"Banana",'Apple',"Mango","Pineapple"];

[a,b,c]=fruits

console.log("+++++++++Fruits+++++++++")
console.log('a=',a)
console.log("b=",b)
console.log("c=",c)

console.log("+++++++++Fruits+++++++++");

[a,b,c, ...d]=fruits
console.log('a=',a)
console.log("b=",b)
console.log("c=",c)
console.log("d=",d)

// Object destructuring
const laptop ={
    model: "HP Pavilion",
    age: "23 days",
    gender: "Male",
    net: 1233,
    start: function (){console.log('started');}
    }
    console.log("+++++++++Laptop+++++++++");
// const {model,age,gender}=laptop

// console.log(model)
// console.log(age)
// console.log(gender);

const {model,age,gender, ...w}=laptop
console.log('model=',model)  
console.log("age=",age) 
console.log("gender=",gender) 
console.log("w=",w)


