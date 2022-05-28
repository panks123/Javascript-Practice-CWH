console.log('Hello!!!!!');
let addBtn=document.getElementById('addBtn');
console.log('ello!!');
addBtn.addEventListener('click',function(){
    let addText=document.getElementById('addTxt');
    let notes=localStorage.getItem('notes')
    if(notes==null)
    {
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notesObj);
    }
    notesObj.push(addText)
    localStorage.setItem('notes',JSON.stringify(notesObj))
    addText.value='';
    console.log(notesObj)
})