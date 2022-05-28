let cont=document.querySelector('.no')
console.log(cont)
cont=document.querySelector('.container')
console.log(cont)
console.log(cont.childNodes) // It returns all the child element of the element - It takes the new line as text element , comment also as an element
console.log(cont.children) // To remove all the unnecessary child elements we use children instead of childNodes (In most cases children is used)

let nodeName=cont.childNodes[5].nodeName // It gives the nodeName of any element (HTML tag name)
console.log(nodeName)
nodeName=cont.children[0].nodeName  
console.log(nodeName)

let nodeType=cont.childNodes[4].nodeType
console.log(nodeType)
nodeName=cont.children[0].nodeType
console.log(nodeType)

// To get the children inside children
console.log(cont.children[0].children[1].children)

console.log(cont.firstChild) // This returns the first child from cont.childNodes (As it is a childNodes so it may give text or comment (if present))
console.log(cont.firstElementChild) // To get only element as first child We use firstElementChild. Now it will give first child from cont.children
// Same as firstChild and firstElementChild we can use lastChild and lastElementChild afor getting the last child


// console.log(cont.childElementCount) // It return the number of element in the cont.children

// console.log(cont.firstElementChild.parentNode) 

console.log(cont.firstElementChild.nextSibling) // It will give the the next sibling element inside container(cont) - It can give text as well as comments
console.log(cont.firstElementChild.nextElementSibling) // It gives next sibling(only element)
console.log(cont.firstElementChild.nextElementSibling.nextElementSibling) // In this way we can do chaining



// creating an object by object literal
var emp={id:102,name:"Shyam Kumar",salary:40000}  
document.write(emp.id+" "+emp.name+" "+emp.salary);  // This will write the passed string inside DOM at the end of all the elements



// creating an object by constructor
function employee(id,name,salary)
{
    this.id=id;
    this.name=name;
    this.salary=salary;
}
let x=new employee(1,'Pankaj',300000)
console.log(x)
console.log(x.id+" "+x.name+" "+x.salary)

x=new employee('vgg','Renu',300000)
console.log(x)
console.log(x.id+" "+x.name+" "+x.salary)


