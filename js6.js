function greeting(name,thank='Thank you')
{
    console.log(`Hey ${name}! ${thank} for your help.`)

}

name1="Pankaj"
name2=`Amyra`

greeting(name1,'Thanks a lot')
greeting(name2,'Thank you very much')
var i=234
function f(n1,n2)
{
    console.log(i)
    i=7
    return n1+n2;
}

console.log(f(3,6))
// console.log(f(67,68))
console.log(i)
function f1()
{
    var x=78 // local variabe
    console.log(x)
}
// console.log(x)
if(1)
{
    let y=9
}
// console.log(y) // this will give error as y is out of scope