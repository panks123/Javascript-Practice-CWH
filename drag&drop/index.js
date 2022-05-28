console.log('Drag & Drop')

const imgBox=document.querySelector('.imgBox')

const whiteBoxes=document.querySelectorAll('.whiteBox')
// console.log(imgBox, whiteBoxes)

// Event listeners for the element which is going to be dragged
imgBox.addEventListener('dragstart',(e)=>{
    console.log('DragStart event')
    // Whenever we are dragging the element from the whiteBox it should add hold class so a dashed border of different color
    e.target.className+=' hold'
    setTimeout(()=>{
        // Whenever we drag the element from the whiteBox it should add hide class so that it becomes hidden at the end
        e.target.className+=' hide'
    },0) // When we run setTimeout with 0, then executes at the end when everything executes
})

imgBox.addEventListener('dragend',(e)=>{
    console.log('DragEnd event')
    // Whenever we drop the element in other box it should have only imgBox class (To remove hide and hold classes from imgBox after it has been dropped)
    e.target.className='imgBox' 
})

// Event listners for the element on which the imgBox will be dragged over

for(whitebox of whiteBoxes)
{
    whitebox.addEventListener('dragover',(e)=>{
        console.log('DragOver event')
        e.preventDefault(); //
    })

    whitebox.addEventListener('dragenter',()=>{
        console.log('Dragenter event')
    })

    whitebox.addEventListener('dragleave',()=>{
        console.log('Dragleave event')
    })

    whitebox.addEventListener('drop',(e)=>{
        console.log('DragDrop event')
        e.target.append(imgBox)
    })

}