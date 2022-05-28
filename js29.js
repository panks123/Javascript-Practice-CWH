console.log('JS29')

// Symbols- Symbols are primitive datatype introduced in ES6

const symbol1=Symbol('My identifier')
console.log(symbol1)
console.log("Type of symbol is: ",typeof symbol1)

// Symbols are always unique

const sym1=Symbol('this')
const sym2=Symbol('this')

console.log(sym1===sym2) // It will always give false as Symbols are always unique

const sym3=Symbol()
const sym4=Symbol()

console.log(sym3===sym4)

// But if we do same thing with any other datatype 
console.log('===============================')
console.log('this'==='this') // It will give true
console.log(3===3)  // It will give true
console.log(undefined===undefined)
console.log(null===null)
console.log('===============================')


// Let's see one use case of Symbols

let obj={}
const k1=Symbol()
const k2=Symbol()

obj[k1]="Pankaj"
obj[k2]="Renu"

console.log(obj[k1])
console.log(obj[k2])

// Note: Symbols are ignored in for-in loop
console.log('===============================')
for(key in obj)
{
    console.log(key) // nothing got printed
    console.log(obj[key]) // nothing got printed
} 
console.log('===============================')


