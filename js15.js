let myElem=document.createElement('div')
myElem.setAttribute('id','elem')
myElem.className='elem'
myElem.setAttribute('style','border:2px groove red;margin:50px;padding:20px; width:160px;background-color:cyan');
let tnode=document.createTextNode('this is an editable div, click here to edit...')
myElem.appendChild(tnode)
console.log(myElem)
let first=document.getElementById('myfirst')
let container=document.querySelector('.container')
console.log(first,container)

container.insertBefore(myElem,first)

myElem.addEventListener('click',function(){
    
    let countTArea=document.getElementsByClassName('textarea').length
    if(countTArea==0)
    {
        myElem.innerHTML=`<textarea placeholder='Write something' id='textarea' class='textarea'></textarea>`
    }

    let textarea=document.getElementById('textarea')
    textarea.addEventListener('blur',function(){
        if(textarea.value!='')
        {
            myElem.innerHTML=textarea.value
            localStorage.setItem('text',myElem.innerHTML)
        }
        else
        {

        }
    })
})