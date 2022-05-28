// How to create an HTML element and append it into an existing element in the DOM

let element=document.createElement('li'); // This will create an HTML li element 

element.className='childul'; // This will add a class name 'childul' to the element
element.id='createdLi'; // This will add id to the element as 'createdLi'
element.setAttribute('title','mytitle');  // This will add an attribute named 'title' having value 'mytitle' the created element
element.innerHTML='<b>78</b>'   // This will add the HTML content inside the created li  

// Now, to append the created li we'll first select the element inside the DOM where we want to append the created li
let ul=document.querySelector('ul.this')
console.log(ul)
console.log(element);
let text=document.createTextNode('I\'m a text node'); // This will create a textNode containing text " I'm a text node"
element.appendChild(text) // This will append the textNode to the create li 'element'
ul.appendChild(element) // This will append the create li element to the selected ul element


// How to replace an element of DOM by another element
// 1. Creating an element which we'll replace later with some element in the DOM
elem2=document.createElement('h3');
elem2.id='headin3'
elem2.className='heading3';
let tnode=document.createTextNode('This is created h3 for replacement');
elem2.appendChild(tnode);
console.log(elem2);
// Now replace the elemnent with the created h3 element 
element.replaceWith(elem2); // By this- the above <li> which was created above is replaced by the<h3> element

// //How to remove an element from the DOM
// let two=document.querySelector('#two')
// two.remove()

// // How to remove a child element from an element in the DOM
// ul=document.querySelector('ul.this')
// ul.removeChild(document.getElementById('third'))


let pr=elem2.getAttribute('id') // It will return the value of the attribute 'id'
console.log(pr)
pr=elem2.getAttribute('class') // It will return the value of the attribute 'id'
console.log(pr)
pr=elem2.getAttribute('href') // It will return the value of the attribute 'href' - But as 'href' attribute is not present so it will return null
console.log(pr)
pr=elem2.hasAttribute('id') // It returns true if the attribute is present else it returns false
console.log(pr)
pr=elem2.hasAttribute('href')
console.log(pr)

// To remove an attribute from an element in the DOM
console.log(elem2)
elem2.removeAttribute('id') // this will remove the attribute 'id' from the elem2
console.log(elem2)
// to set an attribute to an element in the DOM
elem2.setAttribute('id','idHeading');
console.log(elem2)

// quiz - Create  an anchor tag which will link to the https://codewithharry.com 
let p1=document.createElement('a');
p1.setAttribute('href','https://codewithharry.com/')
p1.setAttribute('target','_blank')
let p=document.createElement('h1')

let p_textNode=document.createTextNode('Go to CodeWithHarry.com')
p.appendChild(p_textNode)

p1.appendChild(p)
console.log(p1)
let x=document.querySelector('div.container')
console.log(x)

x.appendChild(p1)
