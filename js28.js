console.log('JS28')

// Sets

// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

// Its main methods are:

// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

let mySet=new Set() // Creates an empty set
console.log('Set is : ',mySet)

mySet.add('this')
mySet.add(3)
mySet.add({one: '101',two:'202'})
mySet.add([3,4,2])
mySet.add(function(){})
mySet.add('this') // adding already exiting member in the set
mySet.add(3) // adding already exiting member in the set

console.log('Set is : ',mySet)

console.log('Size of set: ',mySet.size)

mySet.add(true)
console.log(mySet)

console.log(mySet.has('this'))
console.log(mySet.has(4))

mySet.delete(3)
console.log(mySet)

console.log('-----------------------------')
// Iterating over a set using for-of loop

for(let item of mySet)
{
    console.log(item)
}
console.log('-----------------------------')

console.log('-----------------------------')
// Iterating over a set using forEach loop

mySet.forEach((item)=>{
    console.log(item)
})

