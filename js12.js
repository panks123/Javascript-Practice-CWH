
function func1(e)
{
    console.log('Thanks, its a single click');
    e.preventDefault(); // As we click a button inside a form , then it shows the default behavior of submitting the form
                        // To prevent from default behaviour , we call e.preventDefault() function
}

function func2(e)
{
    console.log('Thanks its a double click');
    e.preventDefault();
}

function func3(e)
{
    console.log('Thanks its a mouse down');
    e.preventDefault();
}



function func4(e)
{
    console.log('Thanks its a mouse enter');
    e.preventDefault();
}


function func5(e)
{
    console.log('Thanks its a mouse leave');
    e.preventDefault();
}



function func6(e)
{
    console.log(e.offsetX,e.offsetY)
    document.body.style.backgroundColor=`rgb(${e.offsetX+120},${e.offsetY+33},${e.offsetX+e.offsetY})`
}


btn1=document.getElementById('btn')

btn1.addEventListener('click',func1) // 'click' event listens when mouse is left clicked
btn1.addEventListener('dblclick',func2) // 'dblclick' event listens when mouse is double clicked
// btn1.addEventListener('mousedown',func3)  // 'mousedown' event listens when mouse key pressed down

// let x=document.querySelector('.no');
// x.addEventListener('mouseenter',func4)  // 'mouseenter' event listens when the mouse cursor enters the element


// x.addEventListener('mouseleave',func5)   // 'mouseleave' event listens when the mouse cursor leaves the element


// let y=document.querySelector('.container');   
// y.addEventListener('mousemove',func6)      // 'mousemove' element listens when the mouse is moved inside the element



