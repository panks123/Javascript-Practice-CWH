let container=document.querySelector('.container')
let first=document.getElementById('myfirst')
let myElement=document.createElement('div')
// let tn=document.createTextNode('This is an editable div, click here to edit')
// myElement.appendChild(tn)
myElement.setAttribute('id','myDiv')
myElement.className='myDiv'
myElement.innerText='This is an editable div,click here'
myElement.setAttribute('style','border:2px solid black;margin:34px; width:154px;padding:23px;')
console.log(container,first,myElement)

container.insertBefore(myElement,myfirst)



myElement.addEventListener('click',func)

function func()
{
    let countTArea=document.getElementsByClassName('textarea').length
    if(countTArea==0)
    {
        myElement.innerHTML=`<textarea id='textarea' class='textarea' placeholder='Write something'></textarea>`;
    }
    let textarea=document.getElementById('textarea')
    textarea.addEventListener('blur',function(){
        if(textarea.value!='')
        {
            myElement.innerText=textarea.value
            localStorage.setItem('text',textarea.value)
        }
        else
        {
        }
    })
}