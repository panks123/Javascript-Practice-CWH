// Regular expression- Character sets | Quantifiers

// anything inside the [] in the regular expression literal is called character set- we use character set so that anything present in the 
// character-set in regex literal appears in place of [] in the sting it will match with the expression
// const reg=/h[aty]rry/  // can be an a, t, or y
// const reg=/h[a-z]rry/  // can be any character from a to z
// const reg=/h[^aty]rry/  // anything other than a or t or y
// const reg=/h[a-zA-Z]rr[yuU0-9]/ // first characterset-> any alphabet(capital or small) | second character set--> y,uU or any digit(0 to 9) 


// Quantifiers -> when we want some character i the regular expression to occur in some no. of times --> We use {} for quantifiers
// const reg=/har{2}y/ // r should occur 2 times
// const reg=/har{0,2}y/  // r should occur 0-2 times(0 or 1 or 2 times)

// Groupings - We use parenthesis for grouping characters in the regular expression
// const reg=/(har){2}/ // We want 'har' should collectively appear 2 times in the string
const reg=/(har){2}(no.[0-9]r){3}/

// let str="This is harry and "
// let str="This is hary and "
let str="This is harrry and  harharno.1rno.4rno.8rgange"
// let str="This is hzrry and "
// let str="This is hzrr7 and "
// let str="This is h*rry and harry is also code with harry"



let result=reg.exec(str)
console.log(result)

if(reg.test(str))
{
    console.log(`The string '${str}' matches the expression '${reg.source}'`)
}
else
{
    console.log(`The string '${str}' does not match the expression '${reg.source}'`) 
}