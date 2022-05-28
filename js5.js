// Array

let ar1=[1,2,3,4,5]
console.log(ar1)
let ar2=[1,2,[3,4],5,'Orange']
console.log(ar2)

console.log(ar1.length,ar2.length)

console.log(Array.isArray(ar1))

// modifying array
ar1.push(55)
console.log(ar1)

ar1.unshift(10)
console.log(ar1)

ar1.pop()
console.log(ar1)

ar1.shift()
console.log(ar1)

ar1.splice(2,3)
console.log(ar1)

ar1.splice(1,2)
console.log(ar1)

ar2.reverse()
console.log(ar2)

ar2=ar2.concat(ar1)
console.log(ar2)

// Objects

let myObj={
    name:'Pankaj',
    Roll:1709020,
    m:[92,84,82,64,59]
}
console.log(myObj)
console.log(myObj.m)




console.log(65=='65')
console.log(65==='65')