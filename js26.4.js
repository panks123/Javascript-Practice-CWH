// Regular expression- Character classes

let reg=/dfghj/

let str="This is harry and harry is also code with harry"

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