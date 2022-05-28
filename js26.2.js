// Regular expression- metacharacters

// let reg=/harry/

// let reg=/^har/ // ^ - means starts with (starts with 'har')
let reg=/ry$/ // $ - means ends with (ends with 'har')
// let reg=/h.rry/ // . - means any character in place of . 
// let reg=/ha*y/ // * - means any zero or more characters in place of *
// let reg=/ha?rryi?/ // ? - The character after which ? is placed is optional(So whether a and i are present does not matter)
// let reg=/h\*rry/ // \ is for escaping a metacharacter

let str="This is harry and harry is also code with harry"
// let str="This is h*rry and harry is also code with harry"

let result=reg.exec(str)
console.log(result)

if(reg.test(str))
{
    console.log(`The string '${str}' matches the expression '${reg.source}'`)
}
else
{
    console.log(`The string '${str}' does not matche the expression '${reg.source}'`) 
}