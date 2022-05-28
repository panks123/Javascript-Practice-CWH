// document.getElementById('heading').addEventListener('click',function(e){  // here 'e' is an event object which is automatically passed to the callback function
//     console.log('You have clicked the heading');
   
//     // location.href='https://google.com'  // It will open google.com when it is clicked
//     variable=e.target;                    // It will return the HTML element in which the EventListner function is written
//     variable=e.target.className;          
//     variable=e.target.classList;
//     variable=e.target.id;
//     this.style.color='red'
//     this.style.enableBackground
//     variable=Array.from(e.target.classList)
//     variable=e.offsetX          // It returns the x-coordinate of the mouse pointer, relative to the target element.
//     variable=e.offsetY           // It returns the x-coordinate of the mouse pointer, relative to the target element.

//     variable=e.clientX          // It returns the x-coordinate of the mouse pointer, relative to the  browser window.
//     variable=e.offsetY           // It returns the y-coordinate of the mouse pointer, relative to the  browser window.
//     console.log(variable)

    document.getElementById('heading').addEventListener('mouseover',function(e){
        console.log('You have mouseovered the heading');
        
        // location.href='https://google.com'
        variable=e.target;
        variable=e.target.className;
        variable=e.target.classList;
        variable=e.target.id;
        this.style.color='red'
        this.style.enableBackground
        variable=Array.from(e.target.classList)
        variable=e.offsetX
        variable=e.offsetY
        console.log(variable) 
})