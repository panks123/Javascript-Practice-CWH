//window.alert('Hello Window!!')
// same as
let a=window
console.log(a)
// window.alert() and alert() are same thing as window is a global object
// alert('Hello window!!')
// let name_=prompt('Enter your name')

// console.log(name_)
// let conf=confirm('Do you want to exit?')
// console.log(conf)

// window.location
a=location
a=location.toString()
console.log(a)
a=history // window.history
console.log(a)
console.log(history.length)
// history.go(-1) // -1 means one step back and 1 means one step forward
// history.back() // one step back
// history.forward() // one step forward
a=scrollX // It gives the amount of scroll done in X-axis in the web page 
console.log(a) 
a=scrollY // It gives the amount of scroll done in Y-axis in the web page 
console.log(a)

a=window.innerHeight // Gives the inner Height of the window of the browser
console.log(a)
a=window.innerWidth //  Gives the inner Width of the window of the browser
console.log(a)

a=window.outerHeight // Gives the outer Height of the window of the browser
console.log(a)
a=window.outerWidth //  Gives the outer Width of the window of the browser
console.log(a)