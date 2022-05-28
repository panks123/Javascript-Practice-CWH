// Regular expressions

// let reg=/harry/  // This is regular expression literal(Any thing written within double slash(/anything/) is a regular expression literal)
let reg=/harry/g // g- means global

// reg= /harry/i // i for case insensitive
console.log(reg)
console.log(typeof reg) //  Object
console.log(reg.source) // It will print whatever was written within double slash

// Functions to match expressions

let str="This is great code with harry and also code with harry"
// let str="This is great code with HarrY and also code with harry"

// 1. exec() - This function returns an array when there is a match and returns null when there is not a match

// let result=reg.exec(str) // As we have used g flag so it will search the whole string
// if(result){
//     console.log(result) 
//     console.log(result.input) // From which input string it found the match
//     console.log(result.index) // At which index match was found
// }


// We can use multiple exec() calls with global flag
// result=reg.exec(str) // for next exec() call it will return array for the next match
// console.log(result)  
// result=reg.exec(str) // for next exec() call it will return array for the next match (null because there was no match)
// console.log(result)

// 2. test() -- returns true when there is a match and false when there is no match

// let testResult=reg.test(str)
// console.log(testResult)

// 3. match()- It will return an array(of all matches) of results on match otherwise it will return null

// let matchResult=reg.match(str) --> This is wrong syntax
// let matchResult=str.match(reg) // This is right syntax (Actuall match() i a string object's function) 
// console.log(matchResult)

// reg=/harrs/g
// matchResult=str.match(reg) 
// console.log(matchResult) // null as there was no match

console.log("--------------")
// 4. search() - this will return the index of the first match otherwise it will return -1

// reg=/harry/g
// let searchResult=str.search(reg) // This is also a string object's function) 
// console.log(searchResult)

// reg=/harrs/g
// searchResult=str.search(reg) 
// console.log(searchResult) // -1 as there was no match

// replace() - It will return the replaced string with all string replacements

let replaceResult=str.replace(reg,"PankaJ") // If no global flag is given to the 'reg' then first match will be replaced 
console.log(replaceResult)

reg=/harrs/g
replaceResult=str.replace(reg,"PankaJ") // If there is no match then it returns the same string
console.log(replaceResult)