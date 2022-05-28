// DOM- Document object model

// let a=window.document  // It will give the document object(DOM) i.e. the whole HTML code of the page
// a=document.all  // It gives an HTMLcollection(an object) - It contains all the html element of the DOM 
// a=document.forms // It will give all the form elements used inside the DOM as an HTMLcollection
// a=document.links
// a=document.links[0].href
// console.log(a)

//Element selectors - There are two types of element selectors -1. Single Element Selector 2. Multiple Element Selector

// 1. Single Element Selector

let element=document.getElementById('myfirst') // It will select the element from the document whose id=myfirst
console.log(element)

console.log(element.className) // it will give give the className associated with that element
console.log(element.classList) // It returns a DOMtokenList containing all the classNames assigned to this element

console.log(element.childNodes) // It returns all the child elements of the element

console.log(element.parentNode) // It returns the parent Node of the of the element

element.style.color='red'      // We can change the css property of the element using Javascript

console.log("InnerText :"+element.innerText) // It will return the text inside the element as string
element.innerText='Shut up!!'  // We can change the innerTest of the element using Javascript

console.log("InnerHTML: "+element.innerHTML) // It will return the HTML(text+other HTML element) inside the element as string

element.innerHTML='<b>Shut UPP!!</b>'  // We can change the innerHTML of the element also
console.log(element.innerHTML)

// Another single element selector- querySelector - In querySelector we can pass any CSS selector to get an HTML element

let sel=document.querySelector('#myfirst')
console.log(sel)
sel=document.querySelector('.child') // It will return the first element whose className is .child
console.log(sel)
sel=document.querySelector('.red')
console.log(sel)
sel=document.querySelector('b')  // It will return the first element whose className is .child
console.log(sel)
sel=document.querySelector('h1')
console.log(sel)
sel=document.querySelector('div')
console.log(sel)
sel.style.color='green'

// // 2. Multi Element Selector

let ele=document.getElementsByClassName('child') // It returns an HTML collection containing all the HTML elements whose className is child
console.log(ele)
console.log(ele[0])
console.log(ele[1])
ele=document.getElementsByClassName('container')
console.log(ele)
console.log(ele[0].getElementsByClassName('child'))

ele=document.getElementsByTagName('div'); // It returns an HTMLcollection containing elements with HTML Tag
console.log(ele)

// We can iterate over all the elements and do some modifification with the elements
Array.from(ele).forEach(element => { // Here Array.from(HTMLcollection) converts the HTMLcollection into an array then we can apply foreach loop on the array 
    console.log(element)
    element.style.color='blue'
});

// BUt if we directly want to iterate over the HTMLcollection then we can use tradition for loop

for (let index = 0; index < ele.length; index++) {
    const element = ele[index];
    element.style.color='brown'   
}