console.log('Js27')

// Maps

// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

// Methods and properties of map are:

// - new Map() – creates the map.
// - map.set(key, value) – stores the value by the key.
// - map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// - map.has(key) – returns true if the key exists, false otherwise.
// - map.delete(key) – removes the value by the key.
// - map.clear() – removes everything from the map.
// - map.size – returns the current element count.

const myMap=new Map()
console.log(myMap)
console.log(typeof myMap) // object type

let key1='mystr'
let key2={}
let key3=function(){} 
let key4=4
let key5=[1,2,"arr"]

myMap.set(key1,'This is a string')
myMap.set(key2,'This is a blank object')
myMap.set(key3,'This is an empty function')
myMap.set(key4,'This is a number')
myMap.set(key5,'This is an array')

console.log(myMap)
console.log("Size of Map=",myMap.size)
console.log(myMap.get(key2))
console.log("Map Keys: ",myMap.keys())
console.log("Map Values: ")
console.log(myMap.values    ())
console.log("***********************")
// Using for-of loop to iterate over the Map

for( let [key, value] of myMap)
{
    console.log("Key is: "+key +" | Value is: "+ value)
}
console.log("***********************")

// Using forEach loop to iterate over the Map

myMap.forEach((value,key)=>{
    // Note that we have passed value first and key second in the arrow function
    console.log("Key is: "+key +" | Value is: "+ value)
})
console.log("------------------------")

myMap.delete(key2)
console.log("After deleting key2")
console.log(myMap)

console.log(myMap.has(key3))
console.log(myMap.has(key2))

myMap.clear()
console.log(myMap)

