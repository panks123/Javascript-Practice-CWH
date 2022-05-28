name1='Pankaj'
name2='Kumar'
console.log(name1+name2)

console.log(name1+' '+name2)

name1=name1.concat(name2)
console.log(name1)

let x="this ".concat("Is ","A","Pen")
console.log(x)

console.log(x.length)

//  indexing and slicing

console.log(x[2])
console.log(x[-3])//--undefined - In javascript -ve indexing not allowed
console.log(x.indexOf('s'))

console.log(x.lastIndexOf('s'))

console.log(x.charAt(3))

console.log(x.startsWith('this'))
console.log(x.startsWith('This'))

console.log(x.endsWith('Pen'))
console.log(x.endsWith('PEN'))

console.log(x.includes('is'))
console.log(x.includes('are'))

console.log(x.substring(2,5))
console.log(x.substring(-4))

console.log(x.slice(1,3))
console.log(x.slice(-4))
console.log(x.split(' ')) // splits the string according to the passed separator and stores them as a list of words 


//template literals
let name='Pankaj'
let fruit1='Orange'
let fruit2='Mango'
let myHtml=`Hello ${name}
            <h1>This is Heading</h1>
            <p>You like ${fruit1} and don't like ${fruit2}</p>           
`
document.body.innerHTML=myHtml
 